const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "info.helixconferences@gmail.com",
    pass: "vkrjpqpvqruygngi" // Replace with your App Password
  }
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// API endpoint to handle contact form
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: email,
      to: "info.helixconferences@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    console.log('Message sent:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Error sending email',
      details: error.message 
    });
  }
});

// Abstract submission endpoint
app.post('/api/abstract-submission', upload.single('abstract'), async (req, res) => {
  try {
    const {
      firstName, lastName, mobileNumber, email,
      university, affiliation, linkedin, twitter,
      abstractTitle, address, state, country,
      interestedIn
    } = req.body;

    const abstractFile = req.file;

    const info = await transporter.sendMail({
      from: email,
      to: "info.helixconferences@gmail.com",
      subject: `New Abstract Submission: ${abstractTitle}`,
      text: `
        Personal Information:
        -------------------
        Name: ${firstName} ${lastName}
        Mobile: ${mobileNumber}
        Email: ${email}
        
        Professional Information:
        ----------------------
        University: ${university}
        Affiliation: ${affiliation}
        LinkedIn: ${linkedin || 'Not provided'}
        Twitter: ${twitter || 'Not provided'}
        
        Abstract Details:
        ---------------
        Title: ${abstractTitle}
        Interested In: ${interestedIn}
        
        Address Information:
        -----------------
        Address: ${address}
        State: ${state}
        Country: ${country}
      `,
      html: `
        <h2>New Abstract Submission</h2>
        
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Mobile:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <h3>Professional Information</h3>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Affiliation:</strong> ${affiliation}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <p><strong>Twitter:</strong> ${twitter || 'Not provided'}</p>
        
        <h3>Abstract Details</h3>
        <p><strong>Title:</strong> ${abstractTitle}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        
        <h3>Address Information</h3>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
      `,
      attachments: abstractFile ? [
        {
          filename: abstractFile.originalname,
          path: abstractFile.path
        }
      ] : []
    });

    console.log('Abstract submission sent:', info.messageId);
    res.status(200).json({ message: 'Abstract submitted successfully' });
  } catch (error) {
    console.error('Error processing abstract submission:', error);
    res.status(500).json({ 
      error: 'Error processing submission',
      details: error.message 
    });
  }
});

// General contact form with auto-reply
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, message } = req.body;

    const adminMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "YOUR_EMAIL@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Contact Information:
        ------------------
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company/University: ${company || 'Not provided'}

        Message:
        --------
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company/University:</strong> ${company || 'Not provided'}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <h3 style="color: #444; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    };

    const userMailOptions = {
      from: `"Your Website Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Us</h2>
          <p>Dear ${firstName} ${lastName},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company/University:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,</p>
          <p>Your Team Name</p>
        </div>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('Contact form emails sent successfully');
    res.status(200).json({ message: 'Thank you for your message. We will get back to you soon!' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ 
      error: 'Error sending message',
      details: error.message 
    });
  }
});

// Brochure download submission endpoint
app.post('/api/brochure-download', async (req, res) => {
  try {
    const {
      firstName, lastName, mobileNumber, email,
      university, affiliation, linkedin, twitter,
      address, state, country, interestedIn
    } = req.body;

    // Email to Admin
    const info = await transporter.sendMail({
      from: email,
      to: "info.helixconferences@gmail.com",
      subject: `New Brochure Download Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Brochure Download Request</h2>

        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Mobile:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Professional Information</h3>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Affiliation:</strong> ${affiliation}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <p><strong>Twitter:</strong> ${twitter || 'Not provided'}</p>

        <h3>Interested In</h3>
        <p>${interestedIn}</p>

        <h3>Address Information</h3>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
      `
    });

    // Auto-reply to user
    // const userEmailOptions = {
    //   from: `"Helix Conferences" || "info.helixconferences@gmail.com"}>`,
    //   to: email,
    //   subject: 'Thank You for Your Interest - Brochure Download',
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px;">
    //       <h2 style="color: #333;">Thank You for Downloading Our Brochure</h2>
    //       <p>Dear ${firstName} ${lastName},</p>
    //       <p>Thank you for your interest. We have received your request for the conference brochure and will be in touch with more information shortly.</p>
    //       <p>If you have any further questions, feel free to reach out to us at <a href="mailto:info.helixconferences@gmail.com">info.helixconferences@gmail.com</a>.</p>
    //       <p>Best regards,<br>The Helix Conferences Team</p>
    //     </div>
    //   `
    // };

    // await transporter.sendMail(adminEmailOptions);
    // await transporter.sendMail(userEmailOptions);

    console.log('Brochure request submitted and confirmation sent');
    res.status(200).json({ message: 'Brochure download request submitted successfully' });
  } catch (error) {
    console.error('Error processing brochure request:', error);
    res.status(500).json({
      error: 'Error processing brochure request',
      details: error.message
    });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
