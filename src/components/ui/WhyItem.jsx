import React from "react";
import { ArrowRight } from "lucide-react";

const WhyItem = ({ text }) => {
  return (
    <div className="flex items-start gap-3">
      <ArrowRight className="text-indigo-500 mt-1" size={18} />
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default WhyItem;