// app/api/subscribe/route.ts
import nodemailer from "nodemailer";
import { createItem, readItems } from "@directus/sdk";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name, profession, subject, message, lang } =
      await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    try {
      await sendEmailWithAttachment(
        {
          title: "Newsletter subscription",
          email,
          name,
          subject,
          message,
          lang,
        },
        null
      );
      return NextResponse.json({
        message: "email sent successfully!",
      });
    } catch (emailErr) {
      return NextResponse.json(
        {
          message: "Failed to send email.",
          error: emailErr,
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

const sendEmailWithAttachment = async (fields: any, attachments: any) => {
  // Configure the email transporter
  const { name, email, subject, message } = fields;
  const content =
    fields.lang == "en"
      ? `<!DOCTYPE html>
<html lang="en">
<style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #700032;
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 30px;
    }
    .welcome-text {
      margin-bottom: 25px;
      font-size: 16px;
    }
    .features {
      margin: 25px 0;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .feature-icon {
      background-color: #f5e6ed;
      color: #700032;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
      font-weight: bold;
    }
    .cta-button {
      display: inline-block;
      background-color: #700032;
      color: white !important;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background-color: #8a003d;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #700032;
      text-decoration: none;
      font-weight: bold;
    }
    .unsubscribe {
      font-size: 12px;
      color: #999;
      margin-top: 20px;
    }
    a {
      color: #700032;
    }
    h3 {
      color: #700032;
      margin-top: 0;
    }
  </style>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
  <style>
    /* [Keep all your existing CSS styles from previous version] */
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Message</h1>
      <p>We've received your inquiry and will respond shortly</p>
    </div>
    
    <div class="content">
      <div class="welcome-text">
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. Here's a copy of the information you submitted:</p>
      </div>
      
      <div class="features">
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Name:</strong> ${name}
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Email:</strong> ${email}
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Subject:</strong> ${subject}
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Message:</strong><br>
            ${message}
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p>We typically respond within 24-48 hours.</p>
        <a href="https://yourwebsite.com/contact" class="cta-button">Visit Our Contact Page</a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 Your Company Name. All rights reserved.</p>
      <p>If you didn't initiate this contact, please <a href="mailto:support@yourcompany.com" style="color: #700032;">notify us</a> immediately.</p>
    </div>
  </div>
</body>
</html>`
      : `<!DOCTYPE html>
<html lang="fr">
<style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #700032;
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .header p {
      margin: 10px 0 0;
      font-size: 16px;
      opacity: 0.9;
    }
    .content {
      padding: 30px;
    }
    .welcome-text {
      margin-bottom: 25px;
      font-size: 16px;
    }
    .features {
      margin: 25px 0;
    }
    .feature-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    .feature-icon {
      background-color: #f5e6ed;
      color: #700032;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      flex-shrink: 0;
      font-weight: bold;
    }
    .cta-button {
      display: inline-block;
      background-color: #700032;
      color: white !important;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 5px;
      font-weight: bold;
      margin: 20px 0;
      text-align: center;
      transition: background-color 0.3s;
    }
    .cta-button:hover {
      background-color: #8a003d;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #700032;
      text-decoration: none;
      font-weight: bold;
    }
    .unsubscribe {
      font-size: 12px;
      color: #999;
      margin-top: 20px;
    }
    a {
      color: #700032;
    }
    h3 {
      color: #700032;
      margin-top: 0;
    }
  </style>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Merci pour votre message</title>
  <style>
    /* [Conserver tous les styles CSS existants] */
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Merci pour votre message</h1>
      <p>Nous avons bien reçu votre demande et y répondrons sous peu</p>
    </div>
    
    <div class="content">
      <div class="welcome-text">
        <p>Cher(e) ${name},</p>
        <p>Merci de nous avoir contactés. Voici une copie des informations que vous avez soumises :</p>
      </div>
      
      <div class="features">
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Nom :</strong> ${name}
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Email :</strong> ${email}
          </div>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Sujet :</strong> ${subject}
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">✓</div>
          <div>
            <strong>Message :</strong><br>
            ${message}
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p>Nous répondons généralement dans un délai de 24 à 48 heures.</p>
        <a href="https://yourwebsite.com/contact" class="cta-button">Visitez notre page de contact</a>
      </div>
    </div>
    
    <div class="footer">
      <p>© 2024 Nom de votre entreprise. Tous droits réservés.</p>
      <p>Si vous n'êtes pas à l'origine de cette demande, veuillez <a href="mailto:support@yourcompany.com" style="color: #700032;">nous prévenir</a> immédiatement.</p>
    </div>
  </div>
</body>
</html>`;
  // const fileContent = fs.readFileSync(file.filepath);

  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL, // Your Gmail address
      pass: process.env.NEXT_PUBLIC_PASSWORD, // Your Gmail password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Email options
  let mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: fields.email,
    // to: process.env.NEXT_PUBLIC_EMAIL,
    // Your Gmail address to receive the email
    // to: "jkenfack@krestholding.com",
    subject:
      fields.lang == "en"
        ? `Newsletter subscription`
        : `Souscription a la news letter`,
    html: content,
    attachments,
  };

  // Read the file content to attach it to the email

  // Send email
  // try {
  //   await transporter.sendMail(mailOptions);
  //   console.log("Mail sent");
  //   return true;
  // } catch (error) {
  //   console.log(error);
  //   return false;
  // }

  // Send the email
  await transporter.sendMail(mailOptions);
};