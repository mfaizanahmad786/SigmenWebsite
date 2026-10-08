import type { NextRequest } from "next/server";
import { Resend } from "resend";

/**
 * Fields the form can submit, in the order they appear in the email.
 * Anything not listed here is ignored, so a crafted payload cannot inject
 * extra rows into the message.
 */
const FIELDS = [
  ["fullName", "Name"],
  ["phone", "Phone"],
  ["city", "City / area"],
  ["entity", "Enquiring as"],
  ["buildingType", "Building type"],
  ["status", "Project status"],
  ["service", "Service"],
  ["date", "Preferred call date"],
  ["callTime", "Preferred call time"],
  ["message", "Message"],
  ["floors", "Floors"],
  ["persons", "Persons / cargo"],
  ["doorSize", "Door opening size"],
  ["doorType", "Door type"],
  ["shaftWidth", "Shaft width (mm)"],
  ["shaftDepth", "Shaft depth (mm)"],
  ["pitDepth", "PIT depth (mm)"],
  ["machineRoomHeight", "Machine room height (mm)"],
  ["floorHeight", "Floor-to-floor height (mm)"],
  ["travelHeight", "Total travel height (mm)"],
  ["overheadHeight", "Top floor overhead height (mm)"],
  ["origin", "Lift origin"],
  ["liftType", "Lift type"],
] as const;

const REQUIRED = [
  "fullName",
  "phone",
  "city",
  "entity",
  "buildingType",
  "status",
  "service",
] as const;

/** Longest value we will accept per field, to keep payloads sane. */
const MAX_FIELD_LENGTH = 2000;

/**
 * Best-effort burst protection. Serverless instances are not shared, so this
 * only catches repeated hits on one warm instance. It is a speed bump, not a
 * guarantee; move to a shared store if abuse becomes a real problem.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  // Comma-separated, so the team can add recipients without a code change.
  const to = (process.env.ENQUIRY_TO_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || to.length === 0) {
    console.error(
      "Enquiry not sent: RESEND_API_KEY and ENQUIRY_TO_EMAIL must both be set.",
    );
    return Response.json(
      { error: "Email is not configured yet." },
      { status: 500 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field: real people never fill it, so anything here is a bot.
  // Answer 200 so the bot cannot tell it was rejected.
  if (typeof payload.company === "string" && payload.company.trim()) {
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip && isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  const values = new Map<string, string>();
  for (const [key] of FIELDS) {
    const raw = payload[key];
    if (typeof raw !== "string") continue;
    const trimmed = raw.trim();
    if (trimmed) values.set(key, trimmed.slice(0, MAX_FIELD_LENGTH));
  }

  // The browser already validated this. It is re-checked here because the
  // browser is not a trustworthy source.
  const missing = REQUIRED.filter((key) => !values.get(key));
  if (missing.length > 0) {
    return Response.json(
      { error: "Please complete the required fields." },
      { status: 400 },
    );
  }

  const phone = values.get("phone") ?? "";
  if (!/^[\d\s+\-()]{7,20}$/.test(phone)) {
    return Response.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  const rows = FIELDS.filter(([key]) => values.get(key)).map(
    ([key, label]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#555;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#1c1e3f"><strong>${escapeHtml(values.get(key) ?? "")}</strong></td></tr>`,
  );

  const name = values.get("fullName") ?? "";
  const city = values.get("city") ?? "";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Sigmen Website <${from}>`,
      to,
      replyTo: to[0],
      subject: `Lift enquiry from ${name}${city ? ` (${city})` : ""}`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:14px">
  <h2 style="color:#1c1e3f;margin:0 0 4px">New lift enquiry</h2>
  <p style="color:#555;margin:0 0 20px">Submitted from the Sigmen website.</p>
  <table style="border-collapse:collapse">${rows.join("")}</table>
</div>`,
      text: FIELDS.filter(([key]) => values.get(key))
        .map(([key, label]) => `${label}: ${values.get(key)}`)
        .join("\n"),
    });

    if (error) {
      console.error("Resend rejected the enquiry:", error);
      return Response.json(
        { error: "We could not send your enquiry. Please try again." },
        { status: 502 },
      );
    }
  } catch (cause) {
    console.error("Enquiry send failed:", cause);
    return Response.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
