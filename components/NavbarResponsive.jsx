"use client";

import { Navbar, Dropdown } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiOutlineSearch, HiOutlineArrowRight } from "react-icons/hi";
const NavbarResponsive = () => {
  return (
    <Navbar fluid className="bg-[#0067A2]">
      <Navbar.Brand href="/">
        <img alt="PIS Logo" className="mr-3 h-10 2xl:h-[5rem]" src="logo.svg" />
        <div className="self-center grid grid-flow-col grid-rows-2 2xl:ml-2 text-center 2xl:gap-0 gap-0 ml-1">
          <span className="whitespace-nowrap 2xl:text-[20px] text-[8px] text-white font-semibold dark:text-white uppercase text-poppins">
            POISON INFORMATION SERVICE
          </span>
          <span className="whitespace-nowrap 2xl:text-[16px] text-[8px] text-white font-semibold dark:text-white">
            West Visayas State University
          </span>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <TextInput
          id="search"
          placeholder="Search"
          required
          rightIcon={HiOutlineSearch}
          type="search"
          className="2xl:w-[320px] rounded hidden 2xl:block"
        />
      </div>
      {/*<div className="flex md:order-3">
        <Button className="2xl:px-[44px] 2xl:py-[6px] hidden 2xl:block bg-[#FDD247] hover:bg-[#dab53c]" color="primary">
            <p className="2xl:text-[16px] text-white font-semibold">Get started</p> 
            <HiOutlineArrowRight className="ml-2 h-5 w-5 text-white" />
        </Button>

        <Navbar.Toggle />
      </div>*/}
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className="2xl:text-[18px] text-white dark:text-white hover:!text-[#FDD247]"
        >
          Home
        </Navbar.Link>

        <div className="2xl:text-[18px] text-white dark:text-white hover:!text-[#FDD247]">
          <Dropdown
            inline
            label="Poison Information"
            className="xl:w-[220px] w-[195px]"
          >
            <Dropdown.Item>
              <a
                href="/PoisonInformation"
                className="2xl:text-[16px] text-black dark:text-white hover:!text-[#FDD247]"
              >
                Articles
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/News" className="2xl:text-[16px] text-black dark:white">
                News
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="/Trainings"
                className="2xl:text-[16px] text-black dark:white"
              >
                Trainings
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="/Statistics"
                className="2xl:text-[16px] text-black dark:white"
              >
                Statistics
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/Toxy" className="2xl:text-[16px] text-black dark:white">
                Chat with Toxy
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <Navbar.Link
          href="/Antidote"
          className="2xl:text-[18px] text-white dark:text-white hover:!text-[#FDD247]"
        >
          Antidote
        </Navbar.Link>

        <div href="#" className="2xl:text-[18px] text-white dark:text-white hover:!text-[#FDD247]">
          <Dropdown
            inline
            label="Facilities"
            className=" xl:w-[220px] w-[195px]"
          >
            <Dropdown.Item>
              <a href="#" className="2xl:text-[16px] text-black dark:white">
                Laboratory
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="2xl:text-[16px] text-black dark:white">
                Research Facility
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="2xl:text-[16px] text-black dark:white">
                Clinics
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <div href="#" className="2xl:text-[18px] text-white dark:text-white hover:!text-[#FDD247]">
          <Dropdown inline label="About" className=" xl:w-[220px] w-[195px]">
            <Dropdown.Item>
              <a
                href="/About"
                className="2xl:text-[16px] text-black dark:white"
              >
                What is PIS?
              </a>
            </Dropdown.Item>

            <Dropdown.Item>
              <a
                href="/#services"
                className="2xl:text-[16px] text-black dark:white"
              >
                Services
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="/#linkages"
                className="2xl:text-[16px] text-black dark:white"
              >
                Linkages
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/FAQ" className="2xl:text-[16px] text-black dark:white">
                Help & FAQ
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="2xl:text-[16px] text-black dark:white">
                Support Us
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarResponsive;
