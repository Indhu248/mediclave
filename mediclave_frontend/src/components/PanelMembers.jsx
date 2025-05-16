import React from 'react';
import { panel_members } from '../assets';
import PanelMemberCard from './ui/PanelMemberCard';
import { Link } from 'react-router-dom';

const PanelMembers = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-8 min-h-[70vh] items-center justify-center my-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Meet Our Esteemed Executive Panel
      </h1>
      <p className="w-full sm:w-11/12 md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Our executive panel comprises visionary leaders and industry pioneers who bring deep expertise and strategic insight to guide our mission in advancing global health innovation.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full max-w-7xl mx-auto">
        {panel_members.map((item, idx) => (
          <PanelMemberCard
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
          />
        ))}
      </div>

      <Link to="/executivepanel">
        <button className="bg-one hover:bg-green-500 transition px-6 sm:px-10 md:px-20 py-3 rounded-full mt-6 text-sm md:text-base text-white font-semibold shadow">
          View All
        </button>
      </Link>
    </div>
  );
};

export default PanelMembers;
