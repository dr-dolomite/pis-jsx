"use client";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitMedical,
  faPhone,
  faLocationDot,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

const Antidotes = () => {
  return (
    <div className="flex flex-col mt-14 mb-20">
      <h1 className="text-[52px] font-semibold ml-16">Antidotes</h1>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row items-center">
          <h1 className="text-[18px] font-semibold ml-16 my-4">
            List of antidotes available and where you can buy them.
          </h1>
          <div className="ml-12">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-2 flex items-center pl-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black 0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search-bar"
                  className="h-[40px] w-[426px] pl-10 border-none shadow-gray-400 shadow-md mr-10 text-sm bg-[#F5F5F5] rounded-full font-semibold"
                  placeholder="Search"
                  required
                ></input>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <p className="text-[18px] ml-16">
            Click on an item to view more information
          </p>
          <div className="ml-8 flex-center hover:cursor-pointer">
            <div className=" bg-[#F5F5F5] rounded-[30px] w-[120px] h-[40px] relative"></div>
            <div className="absolute">
              <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faSort} style={{ fontSize: 24 }} />
                <p className="ml-2 text-[14px]">Sort by</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-center mt-8">
          <div className="grid grid-cols-3 gap-12">
            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Activated Charcoal 50g/pack
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/antidote.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Atropine 1m/mL ampule
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/atropine.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Calcium folinate/leucovorin 10 mg/mL, 5 mL ampule
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/calcium.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Calcium gluconate 10%, 10 mL ampule
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/calcium2.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Cobra Antivenom*# 5 mL/vial
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/cobra.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/antidotes/antidote_id">
              <div className="flex flex-col">
                <div className="w-[348px] h-[372px] rounded-[38px] bg-[#EFF5F8] hover:bg-[#c5c9cb]">
                  <div className="mt-8 ml-8 h-[40px]">
                    <h1 className="text-[18px] font-semibold">
                      Diazepam 5 mg/mL, 2 ml Vial*#
                    </h1>
                  </div>
                  <div className="flex-center mt-2">
                    <div className="w-[180px] h-[180px] mt-4 relative">
                      <Image
                        src="/diazepam.png"
                        alt="antidote"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-center mx-4 mt-4">
                    <div className="grid grid-cols-2 gap-x-[40px]">
                      <div className="flex-center flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faKitMedical}
                              style={{ color: "#CD0000", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">Mercury Drug</p>
                        </div>

                        <div className="flex flex-row mt-2">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faPhone}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">033-333-3333</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#0067A2", fontSize: 18 }}
                            />
                          </Link>
                          <p className="text-[14px] ml-2">City Proper</p>
                        </div>

                        <div className="mt-3">
                          <Link
                            href="/antidotes/antidote_id"
                            className="hover:underline"
                          >
                            <h1 className="text-[10px] font-semibold">
                              See all available stores
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antidotes;
