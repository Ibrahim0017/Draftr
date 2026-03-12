import Card from "@/components/ui/Card";
import React from "react";
import image1 from '../assets/cardImg.png'
import image2 from '../assets/dkGE24Md1SbG1Y2bJVQBdWl1dns.png'
import image3 from '../assets/eAT8ehYRmt3nfNGdw82E5OhWPlQ.png'

const CardSection = () => {
  return (
    <section className="w-full flex flex-row justify-center px-4 py-16 bg-white dark:bg-neutral-900">
      <div className="w-[90%] flex flex-col items-center gap-12">
        
        {/* Text Content */}
        <div 
          data-aos="fade-up"
          className="text-center flex flex-col justify-center items-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight max-w-[600px]">
            The ultimate toolkit for designers & teams
          </h2>

          <h2 className="mt-4 text-gray-700 dark:text-gray-300 max-w-[460px]">
            Everything you need to create, prototype, and collaborate – all in a
            single, easy-to-use platform.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          
          <div data-aos="fade-up" data-aos-delay="100">
            <Card
              cardImage={image1}
              MainText="Intuitive drag & drop editor"
              SubText="Create stunning designs effortlessly with a user-friendly interface."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Card
              cardImage={image2}
              MainText="Advanced prototyping"
              SubText="Turn ideas into interactive prototypes without writing a single line of code."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <Card
              cardImage={image3}
              MainText="Real-time collaboration"
              SubText="Work seamlessly with your team, get instant feedback."
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CardSection;