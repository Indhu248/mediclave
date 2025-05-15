import React, { useState } from "react";

const faqData = [
  {
    question: "What is the Mediclave 2025?",
    answer:
      "Mediclave 2025, officially known as the “Global Medical Conclave” (MEDICLAVE-2025), is a premier international Medical conference organized by Helix Conferences. The event aims to bring together Healthcare Professionals, Researchers, and Industry leaders to discuss and explore advancements in Health Care Sector.",
  },
  {
    question: "When and Where will the Mediclave 2025 take place?",
    answer:
      "The conference will be held in Valencia, Spain from November 25-27, 2025.",
  },
  {
    question: "What are the highlights of Mediclave 2025?",
    answer:
      "Networking opportunities with Industry leaders and Healthcare Professionals. Interactive Workshops and Sessions. Exhibitions showcasing Innovations, Products, and Services.",
  },
  {
    question: "How can I submit an abstract for the conference?",
    answer:
      "You can submit your abstract by using this link https://mediclave.helixconferences.com/abstractsubmission/",
  },
  {
    question: "Will an invitation letter be provided for visa purposes?",
    answer:
      "Yes, we will provide an Invitation letter once after the successful registration. Contact us at hello@helixconferences.com to receive the necessary documentation for your visa application.",
  },
  {
    question: "How can I showcase my products and services or explore sponsorship opportunities?",
    answer:
      "For showcasing Products, Services, or exploring Sponsorship opportunities, please contact us directly at hello@helixconferences.com",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15 to 25 minutes. Specific times will be assigned once your abstract is accepted.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, keynote speaking slots are available. If you are interested in a Keynote position, please specify this in your abstract submission.",
  },
  {
    question: "Do you provide a whole package for flight booking, travel, sightseeing, hotel, and food?",
    answer:
      "Yes, if you would like a comprehensive package that includes flight booking, travel, hotel accommodation, and meals, please contact us. We will provide different options for you to choose from.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
