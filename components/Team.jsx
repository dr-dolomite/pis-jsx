import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Team = () => {
  return (
    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10">
        Meet the Team
      </h1>
      <div className="flex-center mt-8">
        <div className="grid grid-cols-3 gap-8">
          {/*---------------------------------------Team Start-----------------------------------------*/}
          <div className="flex flex-col justify-center items-center mx-10">
            <Image
              src="/teamplaceholder.png"
              alt="doctor"
              width={306}
              height={320}
              className="rounded-sm"
            />
            <h1 className="text-black text-[16px] font-semibold mt-4">
              Juan Dela Cruz
            </h1>
            <div className="w-[322px] h-[44px]">
              <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                Juan Dela Cruz is a key member of our development team, known
                for his exceptional skills and dedication to the field. He
                graduated from the West Visayas State University with a strong
                educational background in programming and computer science.
                Juan's journey in the world of programming has been marked by
                continuous growth and remarkable achievements. After completing
                his studies, he dove headfirst into the world of software
                development and quickly established himself as a proficient
                programmer. His unwavering commitment to excellence and his
                ability to adapt to ever-evolving technologies have been
                instrumental in the success of our projects.
              </p>
              <div className="mt-12 items-center justify-center flex">
                <Link href="/toxicologist">
                  <CustomButton
                    title="Learn More"
                    btnType="button"
                    containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/*---------------------------------------Team End-----------------------------------------*/}

          {/*---------------------------------------Team Start-----------------------------------------*/}
          <div className="flex flex-col justify-center items-center mx-10">
            <Image
              src="/teamplaceholder.png"
              alt="doctor"
              width={306}
              height={320}
              className="rounded-sm"
            />
            <h1 className="text-black text-[16px] font-semibold mt-4">
              Juan Dela Cruz
            </h1>
            <div className="w-[322px] h-[44px]">
              <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                Juan Dela Cruz is a key member of our development team, known
                for his exceptional skills and dedication to the field. He
                graduated from the West Visayas State University with a strong
                educational background in programming and computer science.
                Juan's journey in the world of programming has been marked by
                continuous growth and remarkable achievements. After completing
                his studies, he dove headfirst into the world of software
                development and quickly established himself as a proficient
                programmer. His unwavering commitment to excellence and his
                ability to adapt to ever-evolving technologies have been
                instrumental in the success of our projects.
              </p>
              <div className="mt-12 items-center justify-center flex">
                <Link href="/toxicologist">
                  <CustomButton
                    title="Learn More"
                    btnType="button"
                    containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/*---------------------------------------Team End-----------------------------------------*/}

          {/*---------------------------------------Team Start-----------------------------------------*/}
          <div className="flex flex-col justify-center items-center mx-10">
            <Image
              src="/teamplaceholder.png"
              alt="doctor"
              width={306}
              height={320}
              className="rounded-sm"
            />
            <h1 className="text-black text-[16px] font-semibold mt-4">
              Juan Dela Cruz
            </h1>
            <div className="w-[322px] h-[44px]">
              <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                Juan Dela Cruz is a key member of our development team, known
                for his exceptional skills and dedication to the field. He
                graduated from the West Visayas State University with a strong
                educational background in programming and computer science.
                Juan's journey in the world of programming has been marked by
                continuous growth and remarkable achievements. After completing
                his studies, he dove headfirst into the world of software
                development and quickly established himself as a proficient
                programmer. His unwavering commitment to excellence and his
                ability to adapt to ever-evolving technologies have been
                instrumental in the success of our projects.
              </p>
              <div className="mt-12 items-center justify-center flex">
                <Link href="/toxicologist">
                  <CustomButton
                    title="Learn More"
                    btnType="button"
                    containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/*---------------------------------------Team End-----------------------------------------*/}
        </div>
        {/*-------------------------------------------------------------------------------------*/}
      </div>

      {/*---------------------------------------END PARENT DIV-----------------------------------------*/}
      <Image
        src="/yellowBorder.svg"
        alt="blue border"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
        className="xl:mt-[260px]"
      />
    </section>
  );
};

export default Team;
