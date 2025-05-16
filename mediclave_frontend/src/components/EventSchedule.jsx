import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import ScheduleData from "./ScheduleData";
import { Link } from "react-router-dom";

const EventSchedule = ({ height, name, link }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(true);

  const dayButtons = [
    { day: 1, label: "25", label2: ' Day', weekday: "Saturday" },
    { day: 2, label: "26", label2: ' Day', weekday: "Sunday" },
    { day: 3, label: "27", label2: ' Day', weekday: "Monday" },
  ];

  useEffect(() => {
    const loadSchedule = async () => {
      setLoading(true);
      try {
        const module = await import(`../assets/schedule_plan${selectedDay}.js`);
        setScheduleList(module.default); // Assumes default export of array
      } catch (err) {
        console.error("Failed to load schedule:", err);
        setScheduleList([]);
      } finally {
        setLoading(false);
      }
    };

    loadSchedule();
  }, [selectedDay]);

  return (
    <div className="w-full px-4 md:px-12 py-8 flex flex-col items-center border-t">
      <p className="text-xl font-semibold text-one">Event Schedule</p>
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Our Events Schedule Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-4 my-6 bg-one/20 p-3 rounded-xl">
        {dayButtons.map(({ day, label, label2, weekday, index }) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm transition-all ${
              selectedDay === day
                ? "bg-one text-white border-green-600"
                : "bg-slate-100 text-black border-slate-300"
            }`}
          >
            {/* <Calendar size={40} />
            <div className="text-left">
              <div className="font-semibold">{label2}</div>
              <div className="font-semibold">{label}</div>

              <div className="text-xs">{weekday}</div>
            </div> */}
            <div className="flex flex-row items-center gap-2">
              <h1 className={`${selectedDay === day ? "bg-white text-black" : "bg-one text-white"} p-1 rounded-lg font-semibold`}>{label2} <br/>0{day}</h1>
              <div >
                <p className="text-xl font-bold">{label}<sup>th</sup> Nov</p>
                <p>{weekday}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="w-full">
        {loading ? (
          <p className="text-center text-slate-500">Loading schedule...</p>
        ) : Array.isArray(scheduleList) && scheduleList.length > 0 ? (
          <ScheduleData scheduleList={scheduleList} height={height} />
        ) : (
          <p className="text-center text-slate-500">No schedule available.</p>
        )}
      </div>

      {link && (
        <a href={link}>
          <button className="bg-one px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
            {name}
          </button>
        </a>
      )}
    </div>
  );
};

export default EventSchedule;
