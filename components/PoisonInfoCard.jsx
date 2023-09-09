"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const PoisonInfoCard = ({ title, content }) => {
  return (
    <div className="drop-shadow-md shadow-[#0067A2]">
      <div className="border-4 h-[300px] w-[400px] mx-8 justify-center">
        <div className="h-[50px] bg-[#0067A2]">
          <div className="flex items-center justify-center">
            <p className="normal-case text-white text-[15px] font-semibold py-4">
              {title}
            </p>
          </div>
        </div>
        <div className="max-w-[340px] mx-auto justify-center items-center text-center flex py-4">
          <p className="text-black text-[15px] font-normal line-clamp-6">
            {content}
          </p>
        </div>
        <div className="items-center justify-center flex">
          <Link href="/PoisonInformation/Article">
          <CustomButton
            title="Learn More"
            btnType="button"
            containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
          />
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default PoisonInfoCard;
