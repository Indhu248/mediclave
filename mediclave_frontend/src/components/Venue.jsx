import React from "react";
import { ArrowRightCircle } from "lucide-react";
import ImageGalleryCard from "./ui/ImageGalleryCard";

const venueList = [
  { id: 1, name: "City of Arts and Sciences" },
  { id: 2, name: "Valencia Cathedral" },
  { id: 3, name: "La Lonja de la Seda (UNESCO)" },
  { id: 4, name: "El Carmen district" },
  { id: 5, name: "Oceanogràfic" },
  { id: 6, name: "L’Umbracle & Mya nightlife" },
  { id: 7, name: "Bioparc Valencia" },
  { id: 8, name: "Turia Gardens (Jardín del Turia)" },
  { id: 9, name: "Plaza de la Virgen" },
  { id: 10, name: "Malvarrosa Beach" },
  { id: 11, name: "Central Market (Mercado Central)" },
];


const Venue = () => {
  return (
    <div className="w-full py-8 px-4 md:px-16 flex flex-col justify-center items-center md:px-32 border-t">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Mediclave – Venue
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        {/* Description Section */}
        <div className="w-full md:w-[22vw] space-y-4">
          {/* <p className="text-sm md:text-[15px] leading-[26px] md:leading-[28px]">
            <span className="text-xl md:text-2xl font-bold text-one">Valencia, </span>
            Spain’s third-largest city, blends historic charm with modern innovation.
            Known for its Gothic architecture and futuristic landmarks, it’s a vibrant destination.
          </p>

          <p className="text-sm md:text-[15px] leading-[26px] md:leading-[28px]">
            October offers mild temperatures (17°C to 26°C / 63°F to 79°F) and minimal rain,
            perfect for exploring. Visitors can enjoy early Fallas Festival preparations,
            Halloween events at Oceanogràfic and Bioparc, art exhibitions,
            and the grape harvest in the nearby wine region.
          </p>

          <p className="text-sm md:text-[15px] leading-[26px] md:leading-[28px]">
            With its rich culture, scenic beauty, and affordability in the off-season,
            Valencia is the perfect host city for Mediclave.
          </p> */}

          {/* Highlighted Venue List */}
          <ul className="mt-4 space-y-2 ">
            {venueList.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-sm md:text-[15px] leading-[26px] md:leading-[26px]"
              >
                <ArrowRightCircle size={16} className="text-one" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Gallery Section */}
        <div className="w-full md:self-center">
          <ImageGalleryCard />
        </div>
      </div>

      {/* CTA Button */}
      <a href="/venue">
        <button className="bg-one px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base hover:bg-one transition">
          View All
        </button>
      </a>
    </div>
  );
};

export default Venue;
