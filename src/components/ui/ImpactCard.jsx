import React from "react";

const ImpactCard = ({ text }) => {
  return (
    <p className="text-gray-600 text-[10px] md:text-lg leading-relaxed max-w-[750px] text-center">
      {text}
    </p>
  );
};

export default ImpactCard;