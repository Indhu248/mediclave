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
];

const Venue = () => {
  return (
    <div className="w-full py-8 px-4 md:px-16 flex flex-col items-center justify-center border-t">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Mediclave – Venue
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <p className="text-sm md:text-[15px] leading-[26px] md:leading-[28px] w-full md:w-[50vw] text-justify">
          <span className="text-xl md:text-2xl font-bold text-green-400">Valencia, </span>Spain’s third-largest city, blends historic charm with
          modern innovation. Known for its Gothic architecture and futuristic
          landmarks, it’s a vibrant destination. October offers mild
          temperatures (17°C to 26°C / 63°F to 79°F) and minimal rain, perfect
          for exploring. Visitors can enjoy early Fallas Festival preparations,
          Halloween events at Oceanogràfic and Bioparc, art exhibitions, and the
          grape harvest in the nearby wine region.
          With its rich culture, scenic beauty, and affordability in the
          off-season, Valencia is the perfect host city for Mediclave.
         <span>
           {/* <ul className="mt-4 space-y-2">
            {venueList.map((item) => (
              <li
                key={item.id}
                className="flex flex-row items-center text-sm md:text-md gap-2"
              >
                <ArrowRightCircle size={16} /> {item.name}
              </li>
            ))}
          </ul> */}
          Valencia is a dynamic city where history and innovation coexist beautifully. The City of Arts and Sciences stands as a modern architectural gem, while the Oceanogràfic—Europe’s largest aquarium—offers an unforgettable marine experience. The historic Valencia Cathedral, with its mix of architectural styles, is steeped in legend and charm. Nearby, the UNESCO-listed La Lonja de la Seda showcases the city’s rich mercantile past. Wander through the El Carmen district to discover narrow streets, local art, and traditional tapas.
         </span>
        </p>

        <div className="w-full lg:w-auto md:self-center">
          <ImageGalleryCard />
        </div>
      </div>
      <a href="/venue">
        <button className="bg-green-400 px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </a>
    </div>
  );
};

export default Venue;
