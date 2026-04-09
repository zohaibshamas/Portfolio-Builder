import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const RECIPIENT = "zohaibshamas3@gmail.com";
const GMAIL_USER = "zohaibshamas3@gmail.com";

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const appPassword = process.env["GMAIL_APP_PASSWORD"];
  if (!appPassword) {
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: appPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: subject?.trim() || `Portfolio Inquiry from ${name}`,
      text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nProject Type: ${subject || "Not specified"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0070d2; border-bottom: 2px solid #0070d2; padding-bottom: 10px;">
            New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Project Type:</td><td style="padding: 8px 0;">${subject || "Not specified"}</td></tr>
          </table>
          <h3 style="color: #333; margin-top: 20px;">Message:</h3>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: "Failed to send email. Please try again." });
    console.error("Email send error:", error.message);
  }
});

export default router;
