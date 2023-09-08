import React from "react";
import Image from "next/image";

const MessPresident = () => {
  return (
    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-10">
        Message from the WVSU President
      </h1>
      <div className="flex flex-row xl:ml-16 items-center">
        <div className="flex flex-col mt-8">
          <h1 className="text-black text-[22px] font-normal">
            Dr. Joselito F. Villaruz
          </h1>
          <p className="mt-10 text-black text-[16px] font-normal xl:w-[786px]">
            My warmest greetings to all taga-WEST and the Filipino people.
            <br />
            <br />
            It is with great pride to introduce the website of the West Visayas
            State University Poison Information Service. The Poison Information
            Service represents an integration of the three-fold functions of the
            university of instruction, research, and extension. Its vision to be
            an internationally-recognized academic, community and especially
            research-oriented national poison center by 2030 reflects the
            commitment of the university to strive for excellence amidst the
            numerous challenges it faces. The Poison Information Service is
            indeed one of the home-grown innovations that the university is
            nurturing, a product of the concerted effort of both the hardworking
            university personnel and the collaboration with the community,
            especially our cooperating agencies.
            <br />
            <br />
            It is hoped, that the launching of this website is only the
            beginning as the Poison Information Center moves towards the
            realization of its vision which shall help in the gradual
            transformation of WVSU into a Research University.
          </p>
        </div>
        <div className="relative h-[440px] w-[440px] ml-12 rounded-full bg-gradient-to-r from-blue-400 to-yellow-300 z-10">
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <Image
              src="/Villaruz.svg"
              alt="wvsu president"
              height={400}
              width={303}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <Image 
      src="/blueBorder.svg"
      alt="blue border"
      width={1920}
      height={100}
      className="xl:mt-16"
      />
    </section>
  );
};

export default MessPresident;
