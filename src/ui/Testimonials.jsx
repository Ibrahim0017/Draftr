import { useState, useEffect } from "react";
import avatar1 from "../assets/9440461.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/51761362_9334407.jpg";
import avatar4 from "../assets/70822340_9720011.jpg";

const testimonials = [
  {
    img: avatar1,
    text: "Before Draft, we juggled five different tools to manage clients.",
    name: "Sofia Delgado",
    role: "Product Manager, NovaTech",
  },
  {
    img: avatar2,
    text: "Before Draftr, we juggled five different tools to manage clients, tasks, and reports. Now it’s all in one place. We launched 3 campaigns faster this quarter than ever before",
    name: "Daniel Moore",
    role: "Design Lead, PixelLab",
  },
  {
    img: avatar3,
    text: "Managing campaigns used to be stressful.",
    name: "Aisha Khan",
    role: "Marketing Manager, BrightCo",
  },
  {
    img: avatar4,
    text: "The collaboration tools improved our productivity.",
    name: "Liam Scott",
    role: "Team Lead, DevCore",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <h2 className="text-5xl font-bold">
          Loved by designers & teams
        </h2>

        <div>
          {/* Avatars */}
          <div className="flex mb-6">
            {testimonials.map((item, index) => (
              <img
                key={index}
                src={item.img}
                onClick={() => setActive(index)}
                className={`w-12 h-12 rounded-xl cursor-pointer -ml-2 border-2 transition-all duration-300
                ${
                  active === index
                    ? "border-purple-500 scale-110"
                    : "border-white opacity-60"
                }`}
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-lg text-gray-700 mb-4 transition-all duration-500">
            "{testimonials[active].text}"
          </p>

          <p className="text-sm text-gray-500">
            {testimonials[active].name}, {testimonials[active].role}
          </p>
        </div>

      </div>
    </section>
  );
}