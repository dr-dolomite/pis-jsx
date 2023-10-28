import React from "react";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="flex flex-col mt-10 mb-20">
      <h1 className="text-[52px] font-semibold ml-16">Help & FAQ</h1>
      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">
          There are 3 ways to get help:
        </h1>
        <ul className="list-disc mt-4 text-[16px] font-normal">
          <li className="ml-4">
            Call <span className="font-semibold">033-333-3333</span>
          </li>
          <li className="ml-4">
            Email us at <span className="font-semibold">greatemail.com</span>,
            or
          </li>
          <li className="ml-4">
            Navigate to the{" "}
            <Link href="/">
              <span className="font-semibold hover:text-[#0067A2]">
                Poison Info
              </span>
            </Link>{" "}
            page or use the Search bar to find what you’re looking for.
          </li>
        </ul>
      </div>

      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">What’s a poison exposure?</h1>
        <p className="mt-4 text-[16px] font-normal max-w-[800px]">
          Toxicologists use the term "poison exposure" instead of "poisoning" to
          refer to an incident involving a person who swallows or comes in
          contact with a substance that might be poisonous. Contact could be
          swallowing, splashed in the eyes or on the skin, breathed in, or
          injected. Often the substance isn't as toxic as one initially thinks
          it might be, or the amount taken is so low that no bad effect is
          expected. Since symptoms may not develop, technically these exposures
          can't be called "poisonings".
        </p>
      </div>

      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">
          Is there a charge for the service?
        </h1>
        <p className="mt-4 text-[16px] font-normal max-w-[800px]">
          The website is free but you can donate to help us.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
