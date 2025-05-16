import React, { useState } from "react";
import axios from "axios";
import { banner_style } from "../assets/styles";

const AbstractSubmission = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    state: "",
    country: "",
    university: "",
    email: "",
    affiliation: "",
    linkedin: "",
    twitter: "",
    abstractTitle: "",
    abstract: null,
    interestedIn: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
      });

      await axios.post("http://localhost:5000/api/abstract-submission", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoading(false);
      alert("Abstract submitted successfully.");
      // Clear form
      setForm({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        state: "",
        country: "",
        university: "",
        email: "",
        affiliation: "",
        linkedin: "",
        twitter: "",
        abstractTitle: "",
        abstract: null,
        interestedIn: "",
      });
    } catch (err) {
      setLoading(false);
      alert("Submission failed. Please try again.");
    }
  };

  const presentationOptions = [
  "Gynecology",
  "Pediatrics",
  "Emergency Medicine",
  "Genetic Disorders",
  "Mental Health",
  "Telemedicine & Digital Health",
  "Public Health",
  "Infectious Diseases",
  "Nutrition and Metabolism",
  "Rheumatology",
  "Women's Health & Midwifery",
  "Cancer",
  "Addiction Medicine",
  "Remote Healthcare",
  "Pain Management",
  "Vaccines",
  "AI in Healthcare",
  "Cardiovascular Diseases"
  ];

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className={`${banner_style} banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Abstract Submission
        </h1>
      </div>

      <form
  onSubmit={handleSubmit}
  className="max-w-4xl w-full mx-auto flex flex-col items-center p-6 space-y-4 mt-8"
>
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
      name="mobileNumber"
      value={form.mobileNumber}
      onChange={handleChange}
      placeholder="Mobile Number"
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="address"
      value={form.address}
      onChange={handleChange}
      placeholder="Address"
      rows={3}
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="state"
      value={form.state}
      onChange={handleChange}
      placeholder="State"
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="country"
      value={form.country}
      onChange={handleChange}
      placeholder="Country"
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="university"
      value={form.university}
      onChange={handleChange}
      placeholder="University / Industry"
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="affiliation"
      value={form.affiliation}
      onChange={handleChange}
      placeholder="Affiliation"
      required
      className="border p-4 rounded-xl"
    />
    <input
      name="linkedin"
      value={form.linkedin}
      onChange={handleChange}
      placeholder="LinkedIn Profile URL"
      className="border p-4 rounded-xl"
    />
    <input
      name="twitter"
      value={form.twitter}
      onChange={handleChange}
      placeholder="Twitter Handle"
      className="border p-4 rounded-xl"
    />
    <select
      name="interestedIn"
      value={form.interestedIn}
      onChange={handleChange}
      required
      className="border p-4 rounded-xl col-span-2"
    >
      <option value="">Interested in</option>
      {presentationOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="col-span-2 space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Upload Abstract (PDF)
      </label>
      <input
        type="file"
        name="abstract"
        onChange={handleChange}
        accept=".pdf"
        required
        className="w-full border-none"
      />
    </div>
    <div className="col-span-2">
      <a
        href="/sample_abstract.docx"
        download
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Download Demo Abstract
      </a>
    </div>
  </div>

  <button
    type="submit"
    className="bg-black text-white px-8 py-4 rounded-xl flex w-full md:w-auto text-center items-center justify-center mt-6"
  >
    Submit Abstract
  </button>
</form>

    </div>
  );
};

export default AbstractSubmission; 
