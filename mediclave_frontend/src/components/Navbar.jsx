import React, { useState, useEffect } from "react";
import { logo, med_logo } from "../assets";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 md:py-2 transition-all duration-300">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${
            scrolled ? "h-20" : "h-20"
          }`}
        >
          <img
            src={med_logo}
            alt="Helix Conferences"
            className={`rounded-full object-fill transition-all duration-300`}
            style={{
              height: scrolled ? "6rem" : "8rem",
              width: scrolled ? "6rem" : "8rem",
              marginTop: scrolled ? "0rem" : "1rem",
              border: scrolled ? "none" : "2px solid black",
              backgroundColor: scrolled ? "transparent" : "white",
              padding: scrolled ? "0px" : "4px"
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center text-md ${
            scrolled ? "gap-8 ml-4" : "gap-6 ml-8"
          }`}
        >
          {nav_links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`text-gray-700 hover:text-accent transition border-b-2 ${
                location.pathname === item.link
                  ? "border-slate-700"
                  : "border-transparent"
              }`}
              style={{
                marginRight: scrolled ? "0px" : "4px",
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://helixconferences.com/register.php?type=conference"
            className="py-2 px-4 text-accent rounded-full hover:bg-accent hover:text-white transition"
          >
            Register
          </a>
          <a
            href="https://foodmeet.helixconferences.com/brochure-download/"
            className="bg-accent px-4 py-2 text-white rounded-full hover:opacity-90 transition"
          >
            Brochure Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto z-30">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-md">
          {nav_links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-sm text-gray-800 hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://helixconferences.com/register.php?type=conference"
            className="block w-full border border-accent text-center py-2 rounded-full text-accent hover:bg-accent hover:text-white transition"
          >
            Register
          </a>
          <a
            href="/brochure-download"
            className="block w-full bg-accent text-center px-4 py-2 text-white rounded-full hover:opacity-90 transition"
          >
            Brochure Download
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
