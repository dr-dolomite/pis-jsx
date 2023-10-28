"use client";

import Link from "next/link";
import {
  HiMail,
  HiMap,
  HiCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";

const Help = () => {
  return (
    <div className="flex flex-col mt-10 mb-20">
      <h1 className="text-[52px] font-semibold ml-16">
        Get poison help online
      </h1>
      <p className="ml-16 text-[16px] max-w-[600px]">
        If you require immediate assistance in an emergency, please call us
        directly instead of using this form. Our online poison help service is
        here to provide information and guidance for non-urgent situations,
        ensuring you get the support you need.
      </p>

      <div className="ml-20 mt-4">
        <form className="flex flex-col gap-4">
          <div className="flex flex-row mt-4">
            <div className="mr-4">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="First Name" />
              </div>
              <TextInput
                id="email2"
                placeholder="Your First Name"
                required
                shadow
                type="email"
              />
            </div>

            <div className="mr-20">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Last Name" />
              </div>
              <TextInput
                id="email2"
                placeholder="Your Last Name"
                required
                shadow
                type="email"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="E-mail" />
              </div>
              <TextInput
                id="email2"
                placeholder="youremail@email.com"
                required
                shadow
                type="email"
                className="w-80"
                rightIcon={HiMail}
              />
            </div>
          </div>

          <div className="flex flex-row mt-4">
            <div className="mr-40">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your Current Location" />
              </div>
              <TextInput
                id="email2"
                placeholder="Where are you right now?"
                required
                shadow
                type="email"
                className="w-80"
                rightIcon={HiOutlineLocationMarker}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Birth Date" />
              </div>
              <TextInput
                id="email2"
                placeholder="DD / MM / YYYY"
                required
                shadow
                type="email"
                className="w-80"
                rightIcon={HiCalendar}
              />
            </div>
          </div>

          <div className="flex flex-row mt-4">
            <div className="mr-40">
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Phone Number" />
              </div>
              <TextInput
                id="email2"
                addon="+63"
                placeholder="Your Phone Number"
                required
                shadow
                type="email"
                className="w-80"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="medical-centers"
                  value="Nearest Medical Centers"
                />
              </div>
              <Select id="medical-centerss" className="w-80" required>
                <option>WVSU Medical Center</option>
                <option>Kulas Group</option>
                <option>Olson Inc</option>
                <option>Dach Inc</option>
              </Select>
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center">
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Additional Information" />
              </div>
              <Textarea
                id="comment"
                placeholder="Tell us more about your situation."
                required
                rows={8}
                className="w-[400px] text-sm"
              />
            </div>
            <div className="ml-20">
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" className="h-[20px] w-[20px]" />
                <Label htmlFor="promotion" className="ml-2">
                  Need <span className="text-[#0067A2]">immediate</span> help?
                </Label>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <Checkbox id="agree" />
            <Label className="flex" htmlFor="agree">
              <p>I agree with the</p>
              <Link
                className="text-[#0067A2] hover:underline ml-1"
                href="/forms"
              >
                <p>terms and conditions.</p>
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-80 bg-[#0067A2]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Help;
