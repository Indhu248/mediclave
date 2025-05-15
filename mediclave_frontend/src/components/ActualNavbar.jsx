import React, { useState, useEffect } from "react";
import { logo, weblogo } from "../assets";
import { Menu, X } from "lucide-react";

const ActualNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav_links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Executive Panel", link: "/executivepanel" },
    { name: "Tracks", link: "/tracks" },
    { name: "Orators", link: "/orators" },
    { name: "Schedule", link: "/event_schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/Contact" }
  ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <div className="bg-white sticky top-0 z-20 w-full shadow-sm">
      <div className="flex items-center justify-between px-4 py-6 relative">
        {/* Logo */}
        <div className={`transition-all duration-300`}>
          <img
            src={logo}
            alt="Helix_conferences"
            className="rounded-full h-24 w-24 object-cover"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex gap-7 text-md transition-all duration-300 ${
            scrolled ? "ml-12" : "ml-40"
          }`}
        >
          {nav_links.map((item, index) => (
            <a href={item.link} key={index}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="border border-accent py-2 px-4 rounded-full">
            <a href="https://helixconferences.com/register.php?type=conference">Register</a>
          </button>
          <button className="bg-accent px-4 py-2 text-white rounded-full">
            <a href="https://foodmeet.helixconferences.com/brochure-download/">Brochure Download</a>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto z-30">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white">
          {nav_links.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="block text-sm text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full border border-accent py-2 px-4 rounded-full">
            Register
          </button>
          <button className="w-full bg-accent px-4 py-2 text-white rounded-full">
            Brochure Download
          </button>
        </div>
      )}
    </div>
  );
};

export default ActualNavbar;
