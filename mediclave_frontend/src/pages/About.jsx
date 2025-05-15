import React from "react";
import {
  Brain,
  HeartPulse,
  SmilePlus,
  Dna,
  Video,
  Globe,
  Biohazard,
  Radiation,
  Users,
  Star,
  Calendar,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { banner_style } from "../assets/styles";

const data = {
  event: {
    title: "About Event",
    date: "25–27 Nov 2025",
    location: "Valencia, Spain",
    organizer: "Helix Conferences",
    description: [
      "Join us at the prestigious Global Medical Conclave – Mediclave 2025, where healthcare professionals, researchers, scientists, and policymakers unite to discuss groundbreaking developments, tackle pressing challenges, and shape the future of medical science. Mediclave is more than just a conference – it’s a dynamic platform for innovation, research, and collaboration in healthcare, medical technology, and patient care. With a focus on artificial intelligence, personalized medicine, and global health challenges, this conclave aims to foster partnerships and deliver impactful solutions.",
    ],
  },
  themes: [
    {
      icon: Brain,
      title: "AI in Healthcare",
      description: "Researchers & Academicians",
    },
    {
      icon: HeartPulse,
      title: "Cardiovascular Diseases",
      description: "Healthcare Providers & Clinicians",
    },
    {
      icon: SmilePlus,
      title: "Mental Health Innovations",
      description: "Medical Device Innovators",
    },
    {
      icon: Dna,
      title: "Genetics & Personalized Medicine",
      description: "Government Officials & Policymakers",
    },
    {
      icon: Video,
      title: "Telemedicine & Digital Health",
      description: "Pharmaceutical & Biotech Professionals",
    },
    {
      icon: Globe,
      title: "Public Health & Global Systems",
      description: "Students & Early-Career Professionals",
    },
    {
      icon: Biohazard,
      title: "Infectious Diseases & Security",
      description: "NGOs & Public Health Organizations",
    },
    {
      icon: Radiation,
      title: "Cancer Research & Treatment",
      description: "Investors & Healthcare Entrepreneurs",
    },
  ],
  audience: [
    "Researchers & Academicians",
    "Healthcare Providers & Clinicians",
    "Medical Device Innovators",
    "Government Officials & Policymakers",
    "Pharmaceutical & Biotech Professionals",
    "Students & Early-Career Professionals",
    "NGOs & Public Health Organizations",
    "Investors & Healthcare Entrepreneurs",
  ],
  highlights: [
    {
      title: "Keynote Speakers",
      description: "Leading experts in medicine, policy, and tech.",
    },
    {
      title: "Workshops & Seminars",
      description: "Interactive sessions on current topics.",
    },
    {
      title: "Exhibition",
      description: "Showcase of cutting-edge healthcare tech.",
    },
    {
      title: "Networking Opportunities",
      description: "Connect with global leaders.",
    },
    {
      title: "Accredited Learning",
      description: "Earn CPD/CME credits by attending the conferences.",
    },
    {
      title: "Collaboration Building",
      description:
        "Initiate joint research projects or multi-institutional studies.",
    },
    {
      title: "Publication Opportunities",
      description: "Proceedings or journal partnerships for presented work.",
    },
    {
      title: "Awards & Recognition",
      description: "Compete for best paper/poster prizes and other accolades.",
    },
  ],
  dates: {
    eventDate: "25th November",
    venue: "Novotel Valencia, Spain",
    registrationDeadline: "20th November",
  },
  callForPapers:
    "Researchers, scientists, and professionals are invited to submit papers and presentations. Share your innovations with a global audience and contribute to healthcare advancement.",
  registration: {
    note: "Early Bird Registration is Now Open!",
    general: "[Insert Price]",
    student: "[Insert Price]",
  },
};

const AboutMediclave = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className={`${banner_style} banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <h1 className="text-4xl mt-2 font-bold text-green-400">MEDICLAVE</h1>
      <p className="text-center text-gray-600 mb-6">
        <strong>{data.event.date}</strong> | {data.event.location}
      </p>

      {data.event.description.map((para, idx) => (
        <p
          key={idx}
          className="mb-6 text-lg leading-relaxed text-center w-full max-w-5xl"
        >
          {para}
        </p>
      ))}

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-green-400">
          Who Can Attend...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.themes.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <Icon className="h-10 w-10 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                {description}
              </h3>
              {/* <p className="text-gray-600 text-sm mt-2">{description}</p> */}
            </div>
          ))}
        </div>
      </section>

      {/* Audience Section */}
      {/* <section className="mb-16 text-center bg-black rounded-tl-3xl rounded-br-3xl p-8 w-full">
        <h2 className="text-4xl font-bold text-green-400 mb-8">
          Who Should Attend?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {data.audience.map((role, idx) => (
            <div
              key={idx}
              className="bg-slate-200/20 rounded-xl shadow px-6 py-4 text-sm font-medium text-white flex items-center justify-center text-center"
            >
              <Users className="w-4 h-4 text-green-500 mr-2" />
              {role}
            </div>
          ))}
        </div>
      </section> */}

      {/* Highlights Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-green-400 mb-8">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-sm text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
                <p className="text-[14px] text-gray-600 flex-1">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-green-400 mb-8">
          Important Dates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-green-600 mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-green-600 mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-green-600 mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      {/* <section className="mb-16 text-center w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-green-400 mb-6">
          Call for Papers
        </h2>
        <FileText className="w-8 h-8 mx-auto text-green-600 mb-2" />
        <p className="text-lg text-gray-700">{data.callForPapers}</p>
      </section> */}

      {/* Registration Section */}
      {/* <section className="mb-16 text-center w-full">
        <h2 className="text-4xl font-bold text-green-400 mb-6">Registration</h2>
        <p className="text-lg text-gray-700 mb-4">
          🎉 <strong>{data.registration.note}</strong>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-base">
          <div className="bg-white rounded-xl shadow px-6 py-4">
            <p>
              <strong>General Registration:</strong> {data.registration.general}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow px-6 py-4">
            <p>
              <strong>Student Registration:</strong> {data.registration.student}
            </p>
          </div>
        </div>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow">
          Register Now
        </button>
      </section> */}

      {/* Sponsors Section */}
      {/* <section className="text-center w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-green-400 mb-4">
          Sponsors & Partners
        </h2>
        <p className="text-lg">
          Mediclave 2025 is powered by generous partners. Join us in shaping
          healthcare’s future —{" "}
          <a
            href="/"
            className="text-blue-600 underline hover:text-blue-800 ml-1"
          >
            view sponsorship opportunities
          </a>
          .
        </p>
      </section> */}
    </div>
  );
};

export default AboutMediclave;
