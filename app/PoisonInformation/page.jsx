import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <section className="mt-10 mb-20">
      <h1 className="2xl:text-[52px] font-semibold 2xl:ml-16">
        Poison Awareness Information
      </h1>
      <div className="mt-10 ml-16">
        <h1 className="text-[18px] font-normal">
          Dive into different topics to increase awareness of preventing
          poisoning.
        </h1>
        <div className="flex flex-row">
          <ul className="ml-16 mt-10 text-[#0067A2] font-semibold text-[16px]">
            <Link
              href="/PoisonInformation/Article"
              className="hover:text-[#033f61]"
            >
              <li className="my-4">
                Red tide alert issued on some coastal areas.
              </li>
            </Link>

            <li className="my-4">E-Cigs and toddlers: Beware</li>
            <li className="my-4">Carbon Monoxide: The Invisible Killer</li>

            <li className="my-4">
              Red tide alert issued on some coastal areas.
            </li>
            <li className="my-4">E-Cigs and toddlers: Beware</li>
            <li className="my-4">Carbon Monoxide: The Invisible Killer</li>

            <li className="my-4">
              Red tide alert issued on some coastal areas.
            </li>
            <li className="my-4">E-Cigs and toddlers: Beware</li>
            <li className="my-4">Carbon Monoxide: The Invisible Killer</li>

            <li className="my-4">
              Red tide alert issued on some coastal areas.
            </li>
            <li className="my-4">E-Cigs and toddlers: Beware</li>
            <li className="my-4">Carbon Monoxide: The Invisible Killer</li>
          </ul>

          <ul className="ml-[120px] mt-10 text-[#9B9B9B] font-semibold text-[16px]">
            <li className="my-4">Jun 02, 2023</li>
            <li className="my-4">May 21, 2023</li>
            <li className="my-4">May 24, 2023</li>

            <li className="my-4">Jun 02, 2023</li>
            <li className="my-4">May 21, 2023</li>
            <li className="my-4">May 24, 2023</li>

            <li className="my-4">Jun 02, 2023</li>
            <li className="my-4">May 21, 2023</li>
            <li className="my-4">May 24, 2023</li>

            <li className="my-4">Jun 02, 2023</li>
            <li className="my-4">May 21, 2023</li>
            <li className="my-4">May 24, 2023</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default page