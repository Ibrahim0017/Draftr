import React from "react";
import leftImage from '../../assets/lMSZKDPhVBBllLKnGtf5WALEkoU.png'
import rightImage from '../../assets/3ZbX0pAmwG1pNcXk5oRa5jN1I.png'

const HeroPicture = () => {
  return (
    <div className="w-full flex items-center justify-center p-10">
      
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 w-full max-w-[1200px]">

        {/* LEFT PANEL */}
        <div className="bg-[#FFFFFF] rounded-[40px] p-3 shadow-lg">
          
          <img src={leftImage} alt="" />

        </div>

        {/* RIGHT PANEL */}
        <div className="bg-[#FFFFFF] rounded-[40px] p-3 flex flex-col justify-between shadow-lg">
        <div className="bg-[#FFFFFF] rounded-[40px] ">
          
          <img src={rightImage} alt="" />

        </div>            

        </div>

      </div>
    </div>
  );
};

export default HeroPicture;
