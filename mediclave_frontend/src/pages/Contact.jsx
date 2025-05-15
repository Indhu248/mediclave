import React, { useState } from "react";
import axios from "axios";
import { banner_style } from "../assets/styles";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/contact", form);
      setStatus({ type: "success", message: response.data.message || "Form submitted successfully." });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage = err.response?.data?.details || err.message || "Something went wrong";
      setStatus({ type: "error", message: `Submission failed: ${errorMessage}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${banner_style} banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col items-center p-6 space-y-4"
      >
        {status.message && (
          <div
            className={`w-full p-4 rounded-xl text-white text-center ${
              status.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="border p-4 rounded-xl"
          />
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="border p-4 rounded-xl"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border p-4 rounded-xl col-span-2"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-4 rounded-xl col-span-2"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company / University"
            className="border p-4 rounded-xl col-span-2"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="border p-4 rounded-xl col-span-2"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-4 rounded-xl flex w-full text-center items-center justify-center"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
