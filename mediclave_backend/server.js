const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configure nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "botchaindravathi@gmail.com",
    pass: "qvhoztlhesvnyjkk" // Replace with your App Password
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

// API endpoint to handle form submission
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const info = await transporter.sendMail({
      from: email,
      to: "botchaindravathi248@gmail.com",
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
      to: "botchaindravathi@gmail.com",
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
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, message } = req.body;

    const info = await transporter.sendMail({
      from: email,
      to: "botchaindravathi@gmail.com",
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
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
        <h2>New Contact Form Message</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company/University:</strong> ${company || 'Not provided'}</p>
        
        <h3>Message</h3>
        <p>${message}</p>
      `
    });

    console.log('Contact form message sent:', info.messageId);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ 
      error: 'Error sending message',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 