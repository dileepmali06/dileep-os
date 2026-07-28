import { BRAND, contactTypeAccent, contactTypeLabels } from "../brand";

export interface ContactEmailFields {
  contactType: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  website: string;
  country: string;
  city: string;
  subject: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

function row(label: string, value: string) {
  if (!value.trim()) return "";
  return `
    <tr>
      <td style="padding:10px 14px;border-bottom:2px dashed rgba(0,0,0,0.15);font-family:'Courier New',monospace;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;white-space:nowrap;vertical-align:top;width:120px;">
        ${label}
      </td>
      <td style="padding:10px 14px;border-bottom:2px dashed rgba(0,0,0,0.15);font-size:14px;font-weight:600;color:#111;">
        ${value}
      </td>
    </tr>`;
}

export function buildContactEmailHtml(fields: ContactEmailFields): string {
  const accent = contactTypeAccent[fields.contactType] ?? BRAND.cream;
  const typeLabel = contactTypeLabels[fields.contactType] ?? fields.contactType;
  const firstName = fields.name.split(" ")[0];

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:32px 16px;background-color:#F3F0E9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
      <tr>
        <td>

          <!-- offset-shadow trick: solid black block behind, white card nudged up-left on top -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:8px 0 0 8px;background-color:#000000;border-radius:16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:3px solid #000000;border-radius:16px;margin:-8px 8px 8px -8px;">

                  <!-- letterhead -->
                  <tr>
                    <td style="padding:18px 24px;border-bottom:2px dashed rgba(0,0,0,0.15);">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-family:'Courier New',monospace;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#999;">
                            ✉ New Enquiry
                          </td>
                          <td align="right" style="font-family:'Courier New',monospace;font-size:10px;color:#ccc;">
                            Ref. #NEW
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- type badge -->
                  <tr>
                    <td style="padding:22px 24px 0 24px;">
                      <span style="display:inline-block;background-color:${accent};border:2px solid #000000;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:800;color:#000000;">
                        ${typeLabel}
                      </span>
                    </td>
                  </tr>

                  <!-- headline -->
                  <tr>
                    <td style="padding:14px 24px 4px 24px;">
                      <p style="margin:0;font-size:22px;font-weight:900;color:#000000;line-height:1.2;">
                        ${fields.name}
                      </p>
                      <p style="margin:4px 0 0 0;font-size:14px;color:#666;">
                        ${fields.subject || "No subject provided"}
                      </p>
                    </td>
                  </tr>

                  <!-- details table -->
                  <tr>
                    <td style="padding:18px 12px 4px 12px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #000000;border-radius:12px;overflow:hidden;">
                        ${row("Email", fields.email)}
                        ${row("Phone", fields.phone)}
                        ${row("Company", fields.company)}
                        ${row("Job title", fields.jobTitle)}
                        ${row("Website", fields.website)}
                        ${row("Country", fields.country)}
                        ${row("City", fields.city)}
                        ${row("Service", fields.service)}
                        ${row("Budget", fields.budget)}
                        ${row("Timeline", fields.timeline)}
                      </table>
                    </td>
                  </tr>

                  <!-- message -->
                  <tr>
                    <td style="padding:20px 24px 24px 24px;">
                      <p style="margin:0 0 8px 0;font-family:'Courier New',monospace;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;">
                        Message
                      </p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7;border:2px solid #000000;border-radius:12px;">
                        <tr>
                          <td style="padding:16px 18px;font-size:14px;line-height:1.6;color:#222;white-space:pre-wrap;">
                            ${fields.message}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- footer -->
                  <tr>
                    <td style="padding:0 24px 22px 24px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="border-top:2px dashed rgba(0,0,0,0.15);padding-top:14px;">
                            <a href="mailto:${fields.email}" style="display:inline-block;background-color:${BRAND.green};border:2px solid #000000;border-radius:10px;padding:10px 20px;font-size:13px;font-weight:800;color:#000000;text-decoration:none;">
                              ↩ Reply to ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>

          <p style="text-align:center;margin:20px 0 0 0;font-family:'Courier New',monospace;font-size:10px;color:#aaa;letter-spacing:0.06em;">
            Sent from the contact form on dileepmali.me
          </p>

        </td>
      </tr>
    </table>
  </body>
</html>`;
}