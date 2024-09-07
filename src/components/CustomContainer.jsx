import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

const CustomContainer = ({ children }) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#4A4E54] to-[#363C43] px-4 lg:px-16 py-8 rounded-lg min-h-72">
      <div className="absolute top-8 left-4">
        <FaRegQuestionCircle className="opacity-30 text-2xl" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
          <div className="p-1 bg-white opacity-10 rounded-sm"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CustomContainer;
