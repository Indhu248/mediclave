import React, { useState } from 'react';
import axios from 'axios';

const BrochureDownload = () => {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/brochure-download", form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
      setSent(true);
      alert("Form submitted successfully.");
    } catch (err) {
      console.error('Error details:', err.response?.data || err.message);
      alert(err.response?.data?.message || "Submission failed. Please try again.");
    }
  };

  return (
    <div>
      {/* Render your form here */}
    </div>
  );
};

export default BrochureDownload; 