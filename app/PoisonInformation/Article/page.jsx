import React from "react";
import Link from "next/link";
import { HiChevronUp } from "react-icons/hi";

const Article = () => {
  return (
    <section className="mt-10 mb-20">
      <h1 className="text-[52px] font-semibold ml-16">
        Poison Awareness Information
      </h1>

      <div className="mt-6 ml-16">
        <h1 className="text-[18px] text-[#0067A2] font-semibold">
          Red tide alert issued on some coastal areas.{" "}
          <span className="ml-16 text-[#9B9B9B]">Jun 02, 2023</span>
        </h1>
      </div>

      <div className="mt-8 ml-16 text-[16px] font-normal max-w-[900px]">
        <p>
          In a concerning development, authorities have issued a red tide alert
          for several coastal areas, raising alarms about potential
          environmental and economic impacts. Red tide, caused by the rapid
          growth of harmful algae, poses a significant threat to marine life and
          can result in the depletion of oxygen levels in the affected waters.
          The alert signals the need for heightened monitoring and management
          efforts to mitigate the potential consequences of this natural
          phenomenon.
        </p>

        <p className="mt-8">
          Red tide events have far-reaching consequences, affecting not only the
          marine ecosystem but also the livelihoods of coastal communities
          dependent on fishing and tourism. The toxins produced by the algae can
          accumulate in shellfish, making them unsafe for human consumption and
          leading to economic losses for local industries. Authorities are
          urging residents and businesses in the affected areas to stay informed
          about the situation and adhere to any safety measures in place.
          Additionally, research and response teams are working diligently to
          understand the underlying causes of the red tide and develop
          strategies to minimize its impact on both the environment and the
          communities that rely on the ocean for their sustenance. As the alert
          persists, collaboration between scientists, policymakers, and the
          public becomes crucial in navigating the challenges posed by red tide
          events and safeguarding the delicate balance of coastal ecosystems.
        </p>

        <p className="mt-8">
          If you want to learn about early red tide warnings in your area, visit
          the{" "}
          <Link
            href="https://www.bfar.da.gov.ph/"
            className="hover:text-[#033f61] text-[#0067A2] font-semibold"
          >
            BFAR website.
          </Link>
        </p>
      </div>

      <div className="mt-16 ml-16">
        <div className="max-w-[700px]">
          <h1 className="text-[18px] font-semibold">Symptoms</h1>
          <p className="mt-4 text-[16px] font-normal">
            Symptoms include sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium
          </p>
        </div>

        <div className="max-w-[700px] mt-8">
          <h1 className="text-[18px] font-semibold">Treatment</h1>
          <p className="mt-4 text-[16px] font-normal">
            There is no specific cure for shellfish poisoning.
          </p>
        </div>

        <div className="max-w-[700px] mt-8">
          <h1 className="text-[18px] font-semibold">Related topics</h1>
          <div className="flex flex-row items-center mt-4">
            <HiChevronUp className="rotate-90 text-[#0067A2] text-[26px]" />
            <p className="font-semibold text-[#0067A2]">
              Red tide cases statistics{" "}
            </p>
          </div>
        </div>

        <div className="max-w-[700px] mt-8">
          <h1 className="text-[18px] font-semibold">References</h1>
          <p className="mt-4 text-[16px] font-normal">APA Format</p>
        </div>
      </div>
    </section>
  );
};

export default Article;
