import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = process.env.PORT || 5174;
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: clientOrigin,
  })
);
app.use(express.json());

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO",
];

const hasEnv = requiredEnv.every((key) => Boolean(process.env[key]));

if (!hasEnv) {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  console.warn(
    `Warning: missing environment variables for mailer: ${missing.join(", ")}`
  );
}

const rejectUnauthorized =
  process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false" ? false : true;

if (!rejectUnauthorized) {
  console.warn(
    "Warning: SMTP_TLS_REJECT_UNAUTHORIZED is false; TLS certificate verification is disabled."
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // Allow overriding cert validation for self-signed SMTP; default true
    rejectUnauthorized,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!hasEnv) {
    return res
      .status(500)
      .json({ error: "Email service is not configured. Please try again later." });
  }

  try {
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO,
      subject: subject ? `[Portfolio] ${subject}` : "[Portfolio] New message",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});

