// routes/brochure.js
import express from "express";
import nodemailer from "nodemailer";
import Brochure from "../models/Browchure.js";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/brochure-download", async (req, res) => {
  console.log('Received form data:', req.body);
  const form = req.body;

  // Basic validation
  if (!form.firstName || !form.lastName || !form.email || !form.interest) {
    console.log('Validation failed:', { firstName: form.firstName, lastName: form.lastName, email: form.email, interest: form.interest });
    return res.status(400).json({ message: "Required fields are missing" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    console.log('Invalid email:', form.email);
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Save to MongoDB
    console.log('Attempting to save to MongoDB...');
    const newBrochure = new Brochure(form);
    await newBrochure.save();
    console.log('Successfully saved to MongoDB');

    // Email content setup
    const adminEmailBody = `
      New brochure request submitted:
  
      Name: ${form.firstName} ${form.lastName}
      Email: ${form.email}
      Email Code: ${form.emailCode}
      Phone: ${form.phone}
      Address: ${form.address}
      State: ${form.state}
      Country: ${form.country}
      University / Company: ${form.company}
      Affiliation: ${form.affiliation}
      LinkedIn: ${form.linkedin}
      Twitter: ${form.twitter}
      Interested In: ${form.interest}
      Message: ${form.message}
    `;

    const userEmailBody = `
      Dear ${form.firstName} ${form.lastName},
  
      Thank you for your interest in our brochure. We have received your request and our team will process it shortly.
  
      Here's a summary of your submission:
      - Name: ${form.firstName} ${form.lastName}
      - Email: ${form.email}
      - Interest: ${form.interest}
  
      We appreciate your interest and will get back to you soon.
  
      Best regards,
      The Team
    `;

    // Send notification to admin
    console.log('Sending admin email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Brochure Download Form Submission",
      text: adminEmailBody,
    });
    console.log('Admin email sent successfully');

    // Send confirmation to user
    console.log('Sending user confirmation email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: form.email,
      subject: "Thank You for Your Brochure Request",
      text: userEmailBody,
    });
    console.log('User confirmation email sent successfully');

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error processing brochure request:", err);
    console.error("Error stack:", err.stack);
    res.status(500).json({ 
      message: "Failed to process your request",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

export default router;
