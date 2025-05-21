import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { mailProps } from "@/types/mail";
import { contactEmail } from "@/lib/contactEmail";
import { html } from "framer-motion/client";
import { htmlMailSender } from "@/lib/htmlMailSender";

const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_EMAIL;
const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_PASSWORD;
const SITE_MAIL_RECIEVER = "kenfackjordanjunior@gmail.com";

if (!SMTP_SERVER_USERNAME || !SMTP_SERVER_PASSWORD) {
  throw new Error("Les identifiants SMTP ne sont pas définis.");
}

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const { email, name, subject, message, phone }: mailProps =
      await request.json();

    if (!email || !name || !subject || !message || !phone) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: SMTP_SERVER_USERNAME,
      to: SMTP_SERVER_USERNAME,
      subject,
      text: `Nouveau message de : ${name} - ${email} - ${phone}. Sujet: ${subject}. Message: ${message}.`,
      html: contactEmail({ email, name, phone, subject, message }),
    };

    const confirmationMailOptions = {
      from: SMTP_SERVER_USERNAME,
      to: email,
      subject: "Message de confirmation",
      html: htmlMailSender({email, name, phone, subject, message})
    };

    const submittedMail = await transporter.sendMail(mailOptions);
    const confirmation = await transporter.sendMail(confirmationMailOptions);

    console.log("Message envoyé avec succès:", submittedMail.messageId);
    console.log("Message envoyé avec succès:", confirmation.messageId);

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur interne lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
