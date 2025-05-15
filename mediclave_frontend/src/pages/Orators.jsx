import React from "react";
import { orators } from "../assets";
import OraterCard from "../components/ui/OraterCard";
import { Link } from "react-router-dom";
import { banner_style } from "../assets/styles";

const Orators = () => {
  return (
    <section className="container flex flex-col items-center justify-center">
      {/* Banner Section */}
      <div className={`${banner_style} banner`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Mediclave - Orators
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col px-4 md:px-12 py-4 items-center justify-center mt-2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Meet Our Distinguished Orators
        </h2>
        <p className="w-full md:w-2/3 text-sm md:text-base text-slate-600">
          Renowned experts from across the globe sharing insights and leading
          the conversation at Mediclave.
        </p>
      </div>

      {/* Orator Cards Grid */}
      <div className="grid grid-cols-1 px-4 md:px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mb-12 w-full">
        {orators?.length > 0 ? (
          orators.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className="hover:scale-90 transition-transform"
            >
              <OraterCard
                name={item.name}
                about={item.about}
                from={item.from}
                image={item.image}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No orators available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Orators;
