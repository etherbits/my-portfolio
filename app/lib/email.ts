"use server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail() {
  const res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "nika.qvrivishvilipc@gmail.com",
    subject: "Hello from resend",
    html: "<p>Congrats on sending your <strong>first nodemailer email</strong>!</p>",
  });

  console.log(res);
}
