const nodemailer = require("nodemailer");

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO",
];

module.exports = async function handler(req, res) {
  // Method check
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  const hasEnv = requiredEnv.every((key) => Boolean(process.env[key]));
  if (!hasEnv) {
    return res
      .status(500)
      .json({ error: "Email service is not configured." });
  }

  const rejectUnauthorized =
    process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false" ? false : true;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: subject
        ? `[Portfolio] ${subject}`
        : "[Portfolio] New message",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${
        subject || "N/A"
      }\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};
