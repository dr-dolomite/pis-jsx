import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const LatestNews = () => {
  return (
    <section>
      <div className="2xl:mt-14 flex justify-center items-center">
        <div className="2xl:h-[420px] border-4 2xl:mx-10 flex items-center 2xl:w-[1400px]" >
          <div className="flex flex-row 2xl:ml-10">
            <div className="flex flex-col">
              <div className="flex flex-row items-center 2xl:mt-4">
                <h1 className="text-black 2xl:text-[42px] font-semibold">
                  Latest News
                </h1>
                <div className="ml-12 h-12 border-r-4 border-solid border-[#FDD247]" />
                <p className="text-black text-[18px] font-normal ml-12 hover:text-[#0067A2] hover:cursor-pointer">
                  View All
                </p>
              </div>
              <h1 className="mt-4 text-[#0067A2] text-[18px] font-semibold">
                WVSU joins the Philippine National Poison Prevention Week | June
                19-23, 2023
              </h1>
              <p className="mt-4 text-black text-[15px] font-normal max-w-[752px]">
                Mark your calendars for an important event this June 19-23,
                2023: National Poison Prevention Week! Let's come together and
                prioritize the safety of our health and environment. It's time
                to raise awareness and take action against the risks of
                poison-related incidents. During this special week, we will
                provide you with valuable information, tips, and resources on
                how to prevent poison-related accidents in our homes,
                workplaces, and communities.
              </p>
              <div className="items-center justify-center flex mt-8">
                <Link href="/News">
                  <CustomButton
                    title="Learn More"
                    btnType="button"
                    containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <h1 className="text-black text-[18px] font-semibold ml-16">
                {" "}
                This issue also contains:
              </h1>
              <ul className="mt-8 list-disc ml-20">
                <li className="text-[#0067A2] text-[16px] mb-2 font-semibold hover:cursor-pointer hover:underline">
                On the legalization of Medical Marijuana, are we ready?
                </li>
                <li className="text-[#0067A2] text-[16px] mb-2 font-semibold hover:cursor-pointer hover:underline">
                  A Closer Look at Heavy Metal Poisoning: Sources, Symptoms, and
                  Treatment
                </li>
                <li className="text-[#0067A2] text-[16px] mb-2 font-semibold hover:cursor-pointer hover:underline">
                  Pesticides and Public Health: Navigating the Risks and Impact
                  on the Environment
                </li>
                <li className="text-[#0067A2] text-[16px] mb-2 font-semibold hover:cursor-pointer hover:underline">
                  Workplace Hazardous Substances: Protecting Employees from
                  Occupational Exposures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
