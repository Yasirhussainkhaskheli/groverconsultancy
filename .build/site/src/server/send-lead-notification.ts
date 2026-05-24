import { Resend } from "resend";

const TO_EMAIL = "krishan@groverconsultancy.com";
const FROM_EMAIL = "leads@groverconsultancy.com";

export interface LeadEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

const serviceLabel: Record<string, string> = {
  "digital-transformation": "Digital Transformation Strategy",
  "sales-enablement": "Sales Enablement & Lead Gen",
  "system-implementation": "System Implementation & Delivery",
  "ai-automation": "AI & Advanced Automation",
  cybersecurity: "Cybersecurity & Compliance",
  other: "Other / General Inquiry",
};

export async function sendLeadNotification(lead: LeadEmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set, skipping email notification");
    return;
  }

  const resend = new Resend(apiKey);
  const service = lead.service ? (serviceLabel[lead.service] ?? lead.service) : "Not specified";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 24px; }
    .card { background: #ffffff; border-radius: 8px; max-width: 560px; margin: 0 auto; overflow: hidden; }
    .header { background: #1A1A1A; padding: 24px 32px; }
    .header h1 { color: #C9A844; margin: 0; font-size: 20px; }
    .header p { color: #aaa; margin: 4px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 4px; }
    .value { font-size: 15px; color: #222; }
    .message-box { background: #f9f9f9; border-left: 3px solid #C9A844; padding: 12px 16px; border-radius: 4px; font-size: 14px; color: #333; white-space: pre-wrap; }
    .footer { background: #f0f0f0; padding: 16px 32px; font-size: 12px; color: #999; text-align: center; }
    a { color: #C9A844; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Lead - Grover Consult</h1>
      <p>A new inquiry was submitted via the website contact form.</p>
    </div>
    <div class="body">
      <div class="field"><div class="label">Name</div><div class="value">${lead.name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div></div>
      <div class="field"><div class="label">Company</div><div class="value">${lead.company || "-"}</div></div>
      <div class="field"><div class="label">Phone</div><div class="value">${lead.phone || "-"}</div></div>
      <div class="field"><div class="label">Area of Interest</div><div class="value">${service}</div></div>
      <div class="field"><div class="label">Message</div><div class="message-box">${lead.message}</div></div>
    </div>
    <div class="footer">Grover Consult &middot; groverconsultancy.com</div>
  </div>
</body>
</html>
  `.trim();

  const { error } = await resend.emails.send({
    from: `Grover Consult Website <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    subject: `New Lead: ${lead.name}${lead.company ? ` - ${lead.company}` : ""}`,
    html,
    replyTo: lead.email,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
