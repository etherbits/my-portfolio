"use server";
import { Resend } from "resend";
import { ContactMeFormSchema } from "../components/ContactMePageContent";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailData = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export async function sendContactMail(data: ContactMeFormSchema) {
  return sendMail({
    from: data.email,
    to: "nika.qvrivishviliwork@gmail.com",
    subject: "portfolio contact",
    html: `
      <div>
        <p>sender: ${data.name}</p>
        <p>${data.message}</p>
      </div>`,
  });
}

async function sendMail(data: EmailData) {
  const res = await resend.emails.send(data);

  return res;
}
