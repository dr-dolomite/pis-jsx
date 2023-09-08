import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPrescriptionBottle,
  faInfo,
  faChartLine,
  faCircleInfo,
  faFlaskVial,
  faHouseChimneyMedical,
  faBook,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";

import { HiInformationCircle, HiOfficeBuilding, HiBeaker, HiBookOpen, HiLibrary } from "react-icons/hi";

const Services = () => {
  return (
    <section>
      <h1 className="xl:text-[42px] font-semibold xl:ml-10 xl:mt-10">
        Services
      </h1>
      <div className="flex-center xl:ml-10 xl:mt-10">
        <div className="grid grid-cols-2 gap-12">
          <div className="mx-10 flex flex-row">
            <div className="xl:w-[250px] flex items-center justify-center">
              <div className="xl:mr-4 xl:h-[120px] xl:w-[120px] rounded-full bg-[#FDD247] flex items-center justify-center">
                <HiInformationCircle className="xl:w-[80px] xl:h-[80px] text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 ml-4">
              <h1 className="font-semibold text-[18px]">
                Poison information service (GTBI)
              </h1>
              <p className="text-[15px] font-normal">
                As a critical lifeline during poison-related emergencies, the
                Poison Information Service (GTBI) stands as a trusted resource
                providing immediate access to expert guidance. This service
                offers rapid, accurate, and reliable advice, helping
                individuals, healthcare professionals, and emergency responders
                make informed decisions and take appropriate actions in the face
                of poisoning incidents.
              </p>
            </div>
          </div>

          <div className="mx-10 flex flex-row">
          <div className="xl:w-[250px] flex items-center justify-center">
              <div className="xl:mr-4 xl:h-[120px] xl:w-[120px] rounded-full bg-[#FDD247] flex items-center justify-center">
                <HiOfficeBuilding className="xl:w-[80px] xl:h-[80px] text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 ml-4">
              <h1 className="font-semibold text-[18px]">
                Clinical management of poisoned patients WVSUMC
              </h1>
              <p className="text-[15px] font-normal">
                Our dedicated clinical management unit, situated within the
                WVSUMC, provides specialized care to individuals affected by
                poisoning. Equipped with a multidisciplinary team of poison
                experts, the unit leverages medical techniques and protocols to
                ensure optimal patient outcomes and swift recovery.
              </p>
            </div>
          </div>

          <div className="mx-10 flex flex-row">
          <div className="xl:w-[250px] flex items-center justify-center">
              <div className="xl:mr-4 xl:h-[120px] xl:w-[120px] rounded-full bg-[#FDD247] flex items-center justify-center">
                <HiBeaker className="xl:w-[80px] xl:h-[80px] text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 ml-4">
              <h1 className="font-semibold text-[18px]">
                Clinical and Analytical toxicology laboratory
              </h1>
              <p className="text-[15px] font-normal">
                At the forefront of toxicology analysis, the Clinical and
                Analytical Toxicology Laboratory boasts cutting-edge technology
                and a team of skilled specialists. This facility plays a crucial
                role in diagnosing poisonings, conducting meticulous assessments
                of toxic substances, and delivering timely results that aid
                medical professionals in devising effective treatment
                strategies.
              </p>
            </div>
          </div>

          <div className="mx-10 flex flex-row">
          <div className="xl:w-[250px] flex items-center justify-center">
              <div className="xl:mr-4 xl:h-[120px] xl:w-[120px] rounded-full bg-[#FDD247] flex items-center justify-center">
                <HiBookOpen className="xl:w-[80px] xl:h-[80px] text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 ml-4">
              <h1 className="font-semibold text-[18px]">Research</h1>
              <p className="text-[15px] font-normal">
                At the heart of our mission lies a commitment to advancing
                toxicology knowledge. Through groundbreaking research
                initiatives, we strive to deepen our understanding of poisons,
                their effects, and related health implications. By exploring
                innovative interventions and prevention strategies, our research
                drives progress in public health and safety, fostering a
                healthier and safer community.
              </p>
            </div>
          </div>

          <div className="mx-10 flex flex-row">
          <div className="xl:w-[250px] flex items-center justify-center">
              <div className="xl:mr-4 xl:h-[120px] xl:w-[120px] rounded-full bg-[#FDD247] flex items-center justify-center">
                <HiLibrary className="xl:w-[80px] xl:h-[80px] text-black" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 ml-4">
              <h1 className="font-semibold text-[18px]">
                Training and education
              </h1>
              <p className="text-[15px] font-normal">
                Committed to empowering communities and healthcare
                practitioners, our comprehensive training and education programs
                focus on poison prevention, recognition, and appropriate
                management. Through interactive workshops, seminars, and
                resources, participants gain essential knowledge, fostering a
                safer environment and better equipping them to handle
                poison-related incidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
