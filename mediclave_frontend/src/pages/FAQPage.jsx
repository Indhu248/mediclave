import React, { useState } from "react";

const faqData = [
  {
    question: "What is Mediclave 2025?",
    answer:
      "Mediclave 2025, officially known as the “Global Medical Conclave” (MEDICLAVE-2025), is a premier international medical conference organized by Helix Conferences. The event aims to bring together Healthcare Professionals, Researchers, and Industry leaders to discuss and explore advancements in the Health Care Sector.",
  },
  {
    question: "When and where will the Mediclave 2025 take place?",
    answer: "The conference will be held in Valencia, Spain from November 25–27, 2025.",
  },
  {
    question: "What are the highlights of Mediclave 2025?",
    answer: [
      "Networking opportunities with Industry leaders and Healthcare Professionals.",
      "Interactive Workshops and Sessions.",
      "Exhibitions showcasing Innovations, Products, and Services.",
    ],
  },
  {
    question: "What conference tracks are featured at the Expo?",
    answer: "You can visit the session tracks at https://mediclave.helixconferences.com/tracks/",
  },
  {
    question: "How can I showcase my products and services or explore sponsorship opportunities?",
    answer:
      "For showcasing products, services, or exploring sponsorship opportunities, please contact us directly at hello@helixconferences.com.",
  },
  {
    question: "How can I submit an abstract for the conference?",
    answer:
      "You can submit your abstract using this link: https://mediclave.helixconferences.com/abstractsubmission/",
  },
  {
    question: "Will an invitation letter be provided for visa purposes?",
    answer:
      "Yes, we will provide an invitation letter after successful registration. Contact us at hello@helixconferences.com for visa documentation.",
  },
  {
    question: "Where do I stay if I come for the conference?",
    answer:
      "We will provide accommodation at the hotel we proposed. Contact us directly at hello@helixconferences.com.",
  },
  {
    question: "What about my travel?",
    answer: "We can assist with affordable flight booking options for your trip to Spain.",
  },
  {
    question: "Are travel, hotel fees, and additional services covered by the event organizers?",
    answer:
      "The event does not cover travel, hotel fees, or additional services, but we can assist with bookings and sightseeing options. You will need to cover these costs separately.",
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive at the conference?",
    answer:
      "You will receive a conference kit including a name badge, a conference booklet, and a program guide. Your badge grants access to all sessions.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation slots typically range from 15 to 25 minutes. Specific times will be assigned upon abstract acceptance.",
  },
  {
    question: "Who will be attending Mediclave 2025?",
    answer:
      "The event is expected to attract a diverse group of professionals from the global medical and healthcare community.",
  },
  {
    question: "How many people usually attend the forum?",
    answer:
      "We anticipate over 200 attendees, including participants, speakers, and exhibitors.",
  },
  {
    question: "Can I register for multiple speaking slots?",
    answer:
      "Yes, you can register for multiple speaking slots if each topic is distinct and relevant. Submit separate abstracts for each.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, keynote speaking slots are available. If interested, please specify this in your abstract submission.",
  },
  {
    question: "What does being a speaker involve?",
    answer:
      "Speakers present relevant topics, provide insights, and engage with the audience. Detailed guidelines will follow acceptance.",
  },
  {
    question: "Is there a cost associated with participation as a speaker or delegate?",
    answer:
      "Yes, there is a registration fee for all participants, including speakers. See the 'Buy A Ticket' section on our website.",
  },
  {
    question: "How can I find out the schedule of presentations?",
    answer:
      "The schedule will be available at https://mediclave.helixconferences.com/schudule/. Download it to plan your participation.",
  },
  {
    question: "Can I see the session list before the event?",
    answer:
      "Yes, the full confirmed agenda with session and speaker details will be posted on the website before the event.",
  },
  {
    question: "Can I purchase tickets on-site?",
    answer:
      "While we encourage pre-registration, a limited number of tickets may be available at the event.",
  },
  {
    question: "How can I book accommodation for the expo?",
    answer: "Contact us directly at hello@helixconferences.com for assistance with booking.",
  },
  {
    question: "Are meals included with my registration?",
    answer:
      "Meals depend on your registration type. Dining options will be available at the venue. For meal packages, contact hello@helixconferences.com.",
  },
  {
    question:
      "Do you provide a whole package for flight booking, travel, sightseeing, hotel, and food?",
    answer:
      "Yes, we offer comprehensive packages that include flight booking, travel, hotel accommodation, and meals. Contact us to explore options.",
  },
];

const FAQPage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatAnswer = (answer) => {
    if (typeof answer !== "string") return answer;

    // Convert URLs to anchor tags
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    const parts = answer.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);

    return parts.map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {part}
          </a>
        );
      }
      if (emailRegex.test(part)) {
        return (
          <a key={i} href={`mailto:${part}`} className="text-blue-600 underline">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
            <div
              className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-lg font-semibold text-black">
                {index + 1}. {faq.question}
              </h3>
              <button
                className={`p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 ${
                  expandedItems[index] ? "transform rotate-45" : ""
                }`}
                aria-label={expandedItems[index] ? "Collapse answer" : "Expand answer"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            {expandedItems[index] && (
              <div className="p-4 border-t">
                {Array.isArray(faq.answer) ? (
                  <ul className="list-disc pl-5 text-gray-700">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{formatAnswer(faq.answer)}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
