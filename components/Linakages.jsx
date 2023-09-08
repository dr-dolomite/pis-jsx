import React from "react";
import Image from "next/image";

const Linakages = () => {
  return (
    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-[120px]">
        Linkages
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-6">
          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/DOH.svg"
              alt="doh"
              height={162}
              width={162}
              className="hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/DICT.svg"
              alt="dict"
              height={162}
              width={248}
              className="hover:cursor-pointer hover:h-[202px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/DA.svg"
              alt="da"
              height={162}
              width={222}
              className=" hover:cursor-pointer hover:h-[202px] hover:w-[242px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/DTI.svg"
              alt="dti"
              height={162}
              width={162}
              className=" hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/WVSUMC.svg"
              alt="wvsumc"
              height={162}
              width={162}
              className=" hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/WVSU.svg"
              alt="wvsu"
              height={162}
              width={162}
              className=" hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/DOST.svg"
              alt="dost"
              height={162}
              width={162}
              className=" hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>

          <div className=" h-[280px] w-[300px] flex justify-center items-center">
            <Image
              src="/FDA.svg"
              alt="fda"
              height={162}
              width={162}
              className="hover:cursor-pointer hover:h-[202px] hover:w-[202px] ease-in duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Linakages;
