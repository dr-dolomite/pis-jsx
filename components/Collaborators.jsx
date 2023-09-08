import React from "react";
import Image from "next/image";

const Collaborators = () => {
  return (
    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-10">
        Collaborators
      </h1>
      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>

          <div className="h-[280px] w-[280px] relative flex justify-center items-center rounded-full ">
            <Image
              src="/placeholder_logo.png"
              alt="spark_logo"
              width={200}
              height={200}
              className="object-contain rounded-full hover:cursor-pointer hover:h-[280px] hover:w-[280px] ease-in duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
