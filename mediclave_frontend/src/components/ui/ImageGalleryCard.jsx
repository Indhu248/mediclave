import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://img.freepik.com/free-photo/picturesque-houses-river-bank-girona_1398-3060.jpg?ga=GA1.1.439739091.1747315086&semt=ais_hybrid&w=740"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://www.valencia-cityguide.com/images/attractions4/cac-vlc.jpg"
          alt=""
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyqPwiciv7OKGRrG1V_BTpFhNGoC51fSJ8A&s"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://valencia.lbsfilm.at/content/images/size/w2000/2017/11/LBS_BlogOceano_048.jpg"
          alt=""
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://img.freepik.com/free-photo/los-arcos-aqueduct-teruel_1398-2347.jpg?uid=R186010399&ga=GA1.1.1632418182.1746428324&semt=ais_hybrid&w=740"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://cdn.dreampropertiesvalencia.com/2024/12/district-el-carmen-in-valencia.jpg"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
