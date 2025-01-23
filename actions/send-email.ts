"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    if (!process.env.RESEND_EMAIL) {
      throw new Error("No email address provided");
    }
    await resend.emails.send({
      from: `${name} <noreply@prosystemservice.ro>`,
      to: process.env.RESEND_EMAIL,
      subject: `Contact Prosystem WEB / ${email}`,
      text: message,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};
