import React from "react";
import { med_logo, mediclave_logo, socialLinks } from "../assets";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const nav_links = [
    { name: "About", link: "/about" },
    { name: "Executive Panel", link: "/executivepanel" },
    { name: "Tracks", link: "/tracks" },
    { name: "Orators", link: "/orators" },
    { name: "Schedule", link: "/schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-black px-6 md:px-12 py-4 text-white rounded-t-[30px] gap-8 md:gap-0">
      
      {/* Grid 1 */}
      <div className="w-full md:w-1/4 gap-4 flex flex-col items-center text-center">
        {/* <h1 className="text-slate-100 text-3xl">Mediclave</h1> */}
        <div className="bg-white pt-4 p-4 rounded-full">
          <img src={med_logo} alt="Mediclave Logo" className="h-32 md:h-44 rounded-lg" />
        </div>
        <p className="text-slate-200 text-sm px-4 md:px-8">
          Innovations in Global Health: Bridging Gaps through Technology & Collaboration
        </p>
      </div>

      {/* Grid 2 */}
      <div className="w-full md:w-1/4 flex flex-col items-center text-center md:text-left">
        <h1 className="text-green-400 font-semibold text-3xl border-b border-slate-800">
          Quick Links
        </h1>
        <div className="flex flex-col mt-4 gap-1">
          {nav_links.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-1 justify-center md:justify-start items-center">
              <ChevronRight />
              <a href={item.link}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 3 */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-green-400 font-semibold text-3xl border-b border-slate-800 w-auto md:w-[16vw]">
          Social Media
        </h1>
        {socialLinks.map(({ id, name, url, icon }) => (
          <div key={id} className="flex flex-row items-center justify-center md:justify-start">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="text-green-400 p-2 rounded-full bg-black text-md cursor-pointer flex flex-row items-center gap-2"
            >
              {icon}<p className="text-white">{name}</p>
            </a>
          </div>
        ))}
      </div>

      {/* Grid 4 */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <h1 className="text-green-400 font-semibold text-3xl border-b border-slate-800">
          Get In Touch
        </h1>
        <div className="flex flex-col gap-4 text-slate-300">
          <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
            <Phone size="18" />
            <p>+1757 656 7778</p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center md:justify-start">
            <Mail size="18" />
            <p>hello@helixconferences.com</p>
          </div>
          <div className="flex flex-row gap-2 items-start md:justify-start px-4 md:px-0">
            <MapPin size="44" />
            <p>
              Helix Conferences LLC, 45573 Shepard Drive, Suit#101,
              Sterling, Virginia-20164, USA
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="https://helixconferences.com/register.php?type=conference" className="bg-green-500 px-12 py-2 rounded-full mt-1">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
