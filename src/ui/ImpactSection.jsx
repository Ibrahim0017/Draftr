import ImpactCard from "@/components/ui/ImpactCard.jsx";
import React from "react";

const ImpactSection = () => {
  return (
    <section className="w-full flex justify-center py-28 px-6">
      <div className="max-w-4xl flex flex-col items-center text-center gap-4">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          From Idea to Impact
        </h1>

        {/* Text Blocks */}
        <ImpactCard
          text="At Draftr, we’re building the next generation of design tools — simple, collaborative, and lightning fast. Our mission is to empower teams to move from idea to execution without friction."
        />

        <ImpactCard
          text="Design is no longer just about aesthetics — it’s about speed, clarity, and collaboration. At Draftr, we’re redefining how design happens in modern teams. We believe that anyone with an idea should be able to bring it to life without getting lost in complexity."
        />

        <ImpactCard
          text="Born out of frustration with bloated, rigid design tools, Draftr was created to give creators a smarter, simpler way to design. Whether you're building an interface, presenting an idea, or refining a brand concept, Draftr is the space where clarity meets creativity."
        />

      </div>
    </section>
  );
};

export default ImpactSection;