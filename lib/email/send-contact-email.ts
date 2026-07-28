import { Resend } from "resend";

import { buildContactEmailHtml, type ContactEmailFields } from "./templates/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(fields: ContactEmailFields, attachments: { filename: string; content: Buffer }[]) {
  const html = buildContactEmailHtml(fields);

  return resend.emails.send({
    from: "Dileep Mali <contact@dileepmali.me>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: fields.email,
    subject: `New enquiry: ${fields.subject || fields.name}`,
    html,
    attachments: attachments.length ? attachments : undefined,
  });
}