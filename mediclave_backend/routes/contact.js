import express from "express";
import nodemailer from "nodemailer";
// import VerificationCode from "../models/VerificationCode.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/send-code", async (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await VerificationCode.findOneAndUpdate(
      { email },
      { code, expiresAt },
      { upsert: true, new: true }
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      text: `Your verification code is: ${code}`,
    });

    res.status(200).json({ message: "Code sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send code" });
  }
});

export default router;
