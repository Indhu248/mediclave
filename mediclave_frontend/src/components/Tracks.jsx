import React from 'react';
import { tracks } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const TracksSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6 px-4 md:py-12 md:px-6 bg-green-100/20 min-h-[100vh]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
        Mediclave - Tracks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {tracks.map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex flex-row gap-2 px-3 py-4 items-center justify-center border rounded-lg border-transparent shadow hover:shadow-lg hover:border-green-500 transition-all text-center cursor-pointer bg-white"
          >
            <Icon className="text-green-500" size={25} />
            <p className="text-sm font-medium text-gray-800">{name}</p>
          </div>
        ))}
      </div>

      <div className="my-6 md:my-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <Link to="/tracks">
          <button className="bg-green-400 px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center">
            Read More
          </button>
        </Link>
        <Link to="/abstract-submission">
        <button
          className="border bg-black text-slate-100 px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center"
        >
          Submit Abstract
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default TracksSection;

