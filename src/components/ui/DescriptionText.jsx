import React from "react";

const DescriptionText = ({ icon: Icon, Descriptionmaintext, DescriptionSubText }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <div className="flex items-center bg-[#2A2A2A] h-[34px] justify-center  text-white font-semibold px-2  rounded-md flex-1">
            {Icon}
          </div>
          <div className="w-full"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-[16px] lg:text-[18.5px] font-bold">
              {Descriptionmaintext}
            </h3>
            <h3 className="text-[12px] font-bold font- text-[#bababb]">
              {DescriptionSubText}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionText;
