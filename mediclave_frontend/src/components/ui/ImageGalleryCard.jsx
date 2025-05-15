import React from "react";

const ImageGalleryCard = ({ src, alt }) => {
  return (
    
<div className="flex flex-col gap-4">
    <div className="flex flex-row gap-4">
        <img src="https://www.valencia-cityguide.com/images/attractions4/cac-vlc.jpg" alt="" className="h-44 w-[30vw] rounded-xl object-cover" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyqPwiciv7OKGRrG1V_BTpFhNGoC51fSJ8A&s" alt="" className="h-44 w-40 rounded-xl object-cover"/>
    </div>
    <div className="flex flex-row gap-4">
        <img src="https://valencia.lbsfilm.at/content/images/size/w2000/2017/11/LBS_BlogOceano_048.jpg" alt="" className="h-44 w-40 rounded-xl object-cover"/>
        <img src="https://cdn.dreampropertiesvalencia.com/2024/12/district-el-carmen-in-valencia.jpg" alt="" className="h-44 w-[30vw] rounded-xl object-cover"/>
    </div>
    <div className="">
    </div>
</div>
    
  );
};

export default ImageGalleryCard;
