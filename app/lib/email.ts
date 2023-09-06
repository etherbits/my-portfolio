"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailData = {
  from: string;
  to: string;
  subject: string;
  message: string;
};

export async function sendMail(data: EmailData) {
  const res = await resend.emails.send({
    from: data.from,
    to: data.to,
    subject: data.subject,
    html: `<p>${data.message}</p>`,
  });

  console.log(res);
}
