import React from "react";
import img1 from "../assets/team1.jpg";
import img2 from "../assets/team2.jpg";
import img3 from "../assets/team3.jpg";
import img4 from "../assets/team4.jpg";
import TeamCard from "@/components/ui/TeamCard";

const TeamSection = () => {
  return (
    <section className="w-full py-24 flex justify-center px-6">
      
      <div className="max-w-7xl w-full flex flex-col items-center">

        {/* Title */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Meet the team
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-600 text-center max-w-2xl mb-16"
        >
          At Draftr, we’re a small but passionate team of designers and product
          thinkers who believe that great tools create great outcomes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

          <div data-aos="zoom-in" data-aos-delay="100">
            <TeamCard image={img1} name="Jane Lin" role="Co-Founder" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="200">
            <TeamCard image={img2} name="Sofia Mendes" role="Design Lead" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="300">
            <TeamCard image={img3} name="Liam Chen" role="Marketing & Growth" />
          </div>

          <div data-aos="zoom-in" data-aos-delay="400">
            <TeamCard image={img4} name="Ethan Ross" role="Lead Engineer" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default TeamSection;