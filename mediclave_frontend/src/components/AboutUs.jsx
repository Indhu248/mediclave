import { CircleChevronRight } from "lucide-react";
import React from "react";
import { about_img, group_1, mediclave_logo } from "../assets";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const about_points = [
    "Explores the impact of artificial intelligence and big data on medical diagnostics",
    "Using digital health tools and telemedicine to enhance patient-centered approaches",
    "Ethical challenges associated with new technologies, like gene editing, AI, and data privacy",
    "The global response to infectious diseases and strategies for collaboration & pandemic preparedness.",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={about_img}
          alt="mediclave"
          className="h-[40vh] md:h-[58vh] w-auto md:w-[80vh] mx-auto md:mx-16 rounded-xl"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        {/* <p className="text-xs md:text-sm w-20 md:w-24 rounded-full font-normal text-center bg-green-200/40 p-1">
          About Us
        </p> */}
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Innovations</span> in Global Health: Bridging Gaps{" "}
          <span className="text-one">through Technology & Collaboration</span>
        </h1>

        <div className="flex flex-col gap-3 mt-4">
          {about_points.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-2 items-start">
              <CircleChevronRight
                size={24}
                className="text-one flex-shrink-0 mt-1"
              />
              <p className="text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>

        <Link to="/about">
          <button className="flex bg-black text-one px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
