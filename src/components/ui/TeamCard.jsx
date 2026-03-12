import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-3xl px-2 py-2 shadow-sm hover:shadow-md transition w-full">
      
      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-[260px] object-cover rounded-2xl"
        />
      </div>

      {/* Info */}
      <div className="p-4">
      <h3 className="text-xl font-semibold text-black">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{role}</p>

      {/* Socials */}
      <div className="flex gap-4 text-gray-700">
        <FaFacebookF className="cursor-pointer hover:text-black" />
        <FaInstagram className="cursor-pointer hover:text-black" />
        <FaXTwitter className="cursor-pointer hover:text-black" />
      </div>

      </div>
    </div>
  );
};

export default TeamCard;