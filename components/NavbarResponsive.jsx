"use client";

import { Button, Navbar, Dropdown } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiOutlineSearch, HiOutlineArrowRight } from "react-icons/hi";
const NavbarResponsive = () => {
  return (
    <Navbar fluid rounded className="lg:m-1">
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-10 lg:h-[8rem]"
          src="logo.svg"
        />
        <div className="self-center grid grid-flow-col grid-rows-2 lg:ml-2 text-center lg:gap-0 gap-0 ml-1">
          <span className="whitespace-nowrap lg:text-[24px] text-[12px] font-semibold dark:text-white uppercase text-poppins">
            POISON INFORMATION SERVICE
          </span>
          <span className="whitespace-nowrap lg:text-[18px] text-[8px] font-semibold dark:text-white">
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
      <div className="flex md:order-3">
        <Button className="lg:px-[44px] lg:py-[6px] hidden 2xl:block bg-[#FDD247] hover:bg-[#dab53c]" color="primary">
            <p className="lg:text-[16px] text-black font-semibold">Get started</p> 
            <HiOutlineArrowRight className="ml-2 h-5 w-5 text-black" />
        </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
          className="lg:text-[18px] text-black dark:text-white"
        >
          Home
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="lg:text-[18px] text-black dark:text-white"
        >
          <Dropdown inline label="Poison Information" className="xl:w-[220px] w-[195px]">
          <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                News
              </a>
            </Dropdown.Item>
          <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Trainings
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Statistics
              </a>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="lg:text-[18px] text-black dark:text-white"
        >
          Antidote
        </Navbar.Link>


        <Navbar.Link
          href="#"
          className="lg:text-[18px] text-black dark:text-white"
        >
          <Dropdown inline label="Facilities" className=" xl:w-[220px] w-[195px]">
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Laboratory
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Research Facility
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Clinics
              </a>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="lg:text-[18px] text-black dark:text-white"
        >
          <Dropdown inline label="About" className=" xl:w-[220px] w-[195px]">
          <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Services
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Linkages
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Help & FAQ
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="#" className="lg:text-[16px] text-black dark:white">
                Support Us
              </a>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarResponsive;

{
  /*
  <Navbar rounded fluid className="lg:mt-1">
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-10 lg:h-[8rem]"
          src="logo.svg"
        />
        <div className="self-center grid grid-flow-col grid-rows-2 lg:ml-2 text-center lg:gap-0 gap-0 ml-1">
          <span className="whitespace-nowrap lg:text-[24px] text-[12px] font-semibold dark:text-white uppercase text-poppins">
            POISON INFORMATION SERVICE
          </span>
          <span className="whitespace-nowrap lg:text-[18px] text-[8px] font-semibold dark:text-white">
            West Visayas State University
          </span>
        </div>
      </Navbar.Brand>

      <div className="flex lg:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#" className="lg:text-[18px] text-black dark:white">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="lg:text-[18px] text-black dark:white">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="lg:text-[18px] text-black dark:white">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="lg:text-[18px] text-black dark:white">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="lg:text-[18px] text-black dark:white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      <TextInput
          id="search"
          placeholder="Search"
          required
          rightIcon={HiOutlineSearch}
          type="search"
          className="lg:w-[320px] rounded hidden lg:block"
        />
        <Button className="hidden lg:block">Get started</Button>
       
    </Navbar>
 */
}
