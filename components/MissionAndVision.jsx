import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const MissionAndVision = () => {
  return (
    <section>
        <h1 className="text-black text-[42px] font-semibold xl:ml-10 xl:mt-10">
          Mission & Vision
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row ml-24 py-4 mt-4">
              <div className="ml-12 h-8 border-r-8 border-solid border-[#FDD247] mr-4" />
              <h1 className="text-black text-[22px] font-normal">
                Our Mission
              </h1>
            </div>
            <div className="ml-36 py-2">
              <p className="w-[482px] text-[16px]">
                The WVSU PIS commits to promote the safety of the Filipino
                people from poisons through adequate clinical management of
                poisoned patients, education and training of healthcare
                professionals and the community and research in toxicology.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row ml-24 py-4 mt-4 mr-24">
              <div className="ml-12 h-8 border-r-8 border-solid border-[#0067A2] mr-4" />
              <h1 className="text-black text-[22px] font-normal">Our Vision</h1>
            </div>
            <div className="ml-36 py-2">
              <p className="w-[482px] text-[16px]">
                To be an internationally-recognized academic, community and
                research-oriented national poison center by 2030.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row ml-24 py-4 mt-4">
              <div className="ml-12 h-8 border-r-8 border-solid border-[#FDD247]" />
              <div className="ml-2 h-8 border-r-8 border-solid border-[#0067A2] mr-4" />
              <h1 className="text-black text-[22px] font-normal">Objectives</h1>
            </div>
            <div className="ml-36 py-2">
              <ul className="w-[482px] text-[16px]">
                <li
                  className="
                            mb-4"
                >
                  Provide adequate and timely information on poisoning to health
                  professionals and the community
                </li>
                <li className="mb-4">
                  Provide sufficient provisions in the clinical management of
                  poisoning cases
                </li>
                <li className="mb-4">
                  Conduct regular trainings on poisoning to health professionals
                </li>
                <li className="mb-4">
                  Publish relevant and timely researches and articles on
                  poisoning
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row ml-24 py-4 mt-4 mr-24">
              <div className="ml-12 h-8 border-r-8 border-solid border-[#FDD247]" />
              <div className="ml-2 h-8 border-r-8 border-solid border-[#0067A2] mr-4" />
              <h1 className="text-black text-[22px] font-normal">Rationale</h1>
            </div>
            <div className="ml-36 py-2">
              <p className="w-[482px] text-[16px] line-clamp-6">
                Poisoning remains an important global issue, thus poison
                centers, which are specialized units that deals with the
                prevention, diagnosis and management of poisoning were
                established worldwide. In the country, the first poison center
                was established at the University of the Philippines Manila –
                Philippine General Hospital and currently is called the National
                Poison Management and Control Center (NPMCC). Subsequently,
                regional poison centers or poison treatment units were
                established in various parts of the country under the Philippine
                Department of Health to address the variations in poisoning
                epidemiology across different regions, focusing on patient care
                services. However, other than the NPMCC which is in the National
                Capital Region, no other center in the country is
                university-based which specializes in research and innovation.
                Thus, the idea of another university-based Poison Control Center
                with its own unique capabilities is being proposed. The
                functions of a poison center include poison information service
                which provides accurate and timely information to healthcare
                professionals and the public, clinical toxicology service which
                provides appropriate management of poisoned patients and
                provision for analytical laboratory services, toxicovigilance,
                education for poisoning prevention, teaching and training and
                research. The West Visayas State University, being a center of
                learning and research, and having a College of Medicine and its
                own teaching and training tertiary care medical center is well
                suited for this purpose. As this will be a new home-grown
                innovation, it shall start as a poison information center. In
                its infancy stage, it hopes to be developed under collaboration
                with cooperating agencies, particularly with the first poison
                center in the country – the NPMCC. Subsequently, the poison
                information service shall improve its services – incorporating
                the clinical toxicology unit in the medical center and other
                services to become the West Visayas State University Poison
                Control Center and finally attaining its vision to be an
                internationally-recognized academic, community and
                research-oriented national poison center by 2030. Currently,
                there are only two poison centers from the Philippines in the
                directory of poison centers of the WHO: the UP PGH National
                Poison Management and Control Center and the East Avenue Medical
                Center Toxicology Referral & Training Center, both in located at
                the National Capital Region
                (https://apps.who.int/poisoncentres/). Along every step in its
                establishment, the WVSU PCC shall adhere to standards set by the
                World Health Organization, but at the same time, establish
                strong collaboration with all stakeholders, especially from the
                forerunners who established of the field of Toxicology in the
                country. The establishment of the Poison Information Service and
                subsequently the Poison Center shall be guided by the World
                Health Organization for Establishing a Poison Center to which
                most of the contents of this framework were adopted. The initial
                stage of development shall see intensive collaboration with the
                UP PGH National Poison Management and Control Center and the
                Philippine Society of Clinical and Occupational Toxicology. The
                economic benefits of poison centers have been discussed in
                various researches worldwide, although, there is paucity of
                studies in the local setting, thus this could be a potential
                area for research.
              </p>
              <div className="mt-4">
                <Link href="/rationale">
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
    </section>
  );
};

export default MissionAndVision;
