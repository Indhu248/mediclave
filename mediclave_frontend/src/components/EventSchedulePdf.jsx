import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const EventSchedulePDF = ({ eventSchedule }) => {

  const scheduleRef = useRef();



  const downloadPDF = async () => {
    const canvas = await html2canvas(scheduleRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("schedule.pdf");
  };

  return (
    <div className="p-4">
      <button
        onClick={downloadPDF}
        className="mb-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Download Schedule
      </button>

      <div ref={scheduleRef} className="rounded-xl bg-white shadow-lg overflow-hidden">
        <ul className="flex flex-col divide-y divide-gray-200">
          {eventSchedule.map((item, index) => (
            <li
              key={index}
              className="odd:bg-track-odd even:bg-track-even flex justify-between items-center px-6 md:px-24 py-4 hover:bg-gray-50 transition gap-12"
            >
              <div className="text-md font-semibold text-slate-700">
                {item.time}
              </div>
              <div className="text-md text-slate-500 text-center">
                {item.activity}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventSchedulePDF;
