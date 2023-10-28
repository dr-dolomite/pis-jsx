import React from "react";
import Image from "next/image";

const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-2">
    <Image src="/head.png" alt="Chatbot" className="mr-2" width={60} height={60}/>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4b4b4b] to-[#252525] animate-pulse"></div>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4b4b4b] to-[#252525] animate-pulse delay-75"></div>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4b4b4b] to-[#252525] animate-pulse delay-150"></div>
    </div>
  );
};

export default TypingAnimation;
