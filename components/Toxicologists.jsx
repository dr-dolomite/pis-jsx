import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Toxicologists = () => {
  return (
    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-10">
        Meet your Toxicologists @ WVSU
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center xl:mx-10">
            <div className="w-[306px] h-[320px] mx-auto">
              <Image
                src="/Doctor1.svg"
                alt="doctor"
                width={306}
                height={320}
                className="rounded-sm"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-black text-[16px] font-semibold">
                Dr. Gerard Lorenz M. Penecilla
              </h1>
              <div className="w-[322px] h-[44px]">
                <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                  Dr. Gerard Lorenz M. Penecilla is a product of the West
                  Visayas State University. He finished residency training in
                  Internal Medicine at the university’s teaching and training
                  hospital, the West Visayas State University Medical Center and
                  served as the Chief Resident of the Department of Internal
                  Medicine for two years. He finished fellowship training in
                  Clinical Toxicology at the University of the Philippines –
                  Philippine General Hospital National Poison Management and
                  Control Center, the first poison center in the Philippines
                  which for more than three decades has served more than a
                  hundred thousand poisoned patients throughout the country.
                </p>
                <div className="mt-6">
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
          </div>
          <div className="flex flex-col items-center xl:mx-10">
            <div className="w-[306px] h-[320px] mx-auto">
              <Image
                src="/Doctor2.svg"
                alt="doctor"
                width={306}
                height={320}
                className="rounded-sm"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-black text-[16px] font-semibold">
                Dr. Elizabeth Bretaña
              </h1>
              <div className="w-[322px] h-[44px]">
                <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                  Dr. Elizabeth Bretaña is a pediatrician and toxicologist. She
                  was one of the first to be trained in Toxicology in the
                  Philippines and the first in the Visayas. She has practiced
                  toxicology for several decades and is affiliated with most
                  tertiary hospitals in Iloilo, including the West Visayas State
                  University Medical Center, Iloilo Doctors’ Hospital, St.
                  Paul’s Hospital Iloilo and Iloilo Mission Hospital. She was
                  also the fomer Chairman of the Department of Pharmacology at
                  the Iloilo Doctors’ College of Medicine and a Professorial
                  lecturer at West Visayas State University College of Medicine.
                </p>
                <div className="mt-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toxicologists;

{
  /*

    <section>
      <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-10">
        Meet your Toxicologists @ WVSU
      </h1>
      <div className="flex items-center justify-center xl:mt-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center mx-14 xl:h-[200px]">
              <Image
                src="/Doctor1.svg"
                alt="doctor"
                width={306}
                height={320}
                className="rounded-sm"
              />
            <h1 className="text-black text-[16px] font-semibold mt-4">
              Dr. Gerard Lorenz M. Penecilla
            </h1>
            <div className="w-[322px] h-[44px]">
              <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                Dr. Gerard Lorenz M. Penecilla is a product of the West Visayas
                State University. He finished residency training in Internal
                Medicine at the university’s teaching and training hospital, the
                West Visayas State University Medical Center and served as the
                Chief Resident of the Department of Internal Medicine for two
                years. He finished fellowship training in Clinical Toxicology at
                the University of the Philippines – Philippine General Hospital
                National Poison Management and Control Center, the first poison
                center in the Philippines which for more than three decades has
                served more than a hundred thousand poisoned patients throughout
                the country.
              </p>
              <div className="mt-10 flex items-center justify-center">
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

          <div className="flex flex-col justify-center items-center mx-14 xl:h-[200px]">
              <Image
                src="/Doctor2.svg"
                alt="doctor"
                width={306}
                height={320}
                className="rounded-sm"
              />
            <h1 className="text-black text-[16px] font-semibold mt-4">
              Dr. Elizabeth Bretaña
            </h1>
            <div className="w-[322px] h-[44px]">
              <p className="mt-4 text-center text-black text-15px text-ellipsis line-clamp-6">
                Dr. Elizabeth Bretaña is a pediatrician and toxicologist. She
                was one of the first to be trained in Toxicology in the
                Philippines and the first in the Visayas. She has practiced
                toxicology for several decades and is affiliated with most
                tertiary hospitals in Iloilo, including the West Visayas State
                University Medical Center, Iloilo Doctors’ Hospital, St. Paul’s
                Hospital Iloilo and Iloilo Mission Hospital. She was also the
                fomer Chairman of the Department of Pharmacology at the Iloilo
                Doctors’ College of Medicine and a Professorial lecturer at West
                Visayas State University College of Medicine.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Link href="/toxicologist2">
                 <CustomButton
                    title="Learn More"
                    btnType="button"
                    containerStyles="drop-shadow-md text-black hover:text-white font-semibold bg-[#FDD247] lg:text-[18px] lg:px-8 lg:py-2 rounded hover:bg-[#0067A2] active:bg-[#0067A2]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

*/
}
