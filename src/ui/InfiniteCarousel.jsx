import React from "react";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/2.svg";
import svg3 from "../assets/svg3.svg";
import svg4 from "../assets/svg4.svg";
import svg5 from "../assets/svg5.svg";
import svg6 from "../assets/LBtvbbMscujp7wOLmEoI7hneo.svg";


const InfiniteCarousel = () => {
  const logos = [svg1, svg2, svg3, svg4, svg5, svg6];

  const loopLogos = [...logos, ...logos, ...logos]; // extend track

  return (
    <div
      className="overflow-hidden py-10 relative
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex w-max gap-12 animate-loop-scroll">
        {loopLogos.map((logo, index) => (
          <div key={index} className="w-20 h-20 flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;