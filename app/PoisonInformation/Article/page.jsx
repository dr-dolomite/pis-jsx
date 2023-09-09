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
            Incididunt quis cupidatat non do Lorem cillum labore irure est
            excepteur. Aute sunt aliquip eiusmod officia. Duis duis adipisicing
            officia ut non minim reprehenderit deserunt incididunt aliquip velit
            laborum.Ut ex ea eu officia laborum et quis irure anim. Adipisicing
            veniam eu elit cillum ut sit nisi eu occaecat est. Dolor proident
            velit irure nostrud eiusmod tempor do magna commodo fugiat fugiat
            excepteur nisi veniam. Voluptate laborum deserunt incididunt ipsum
            proident dolore. Consectetur deserunt laborum ea eiusmod cupidatat
            duis labore incididunt est. Eiusmod ipsum excepteur anim dolore
            tempor pariatur duis ullamco minim minim velit. Cillum laboris in
            fugiat fugiat incididunt et voluptate veniam Lorem ad et ea fugiat
            reprehenderit.
          </p>

          <p className="mt-8">
            Consectetur anim consectetur aliquip laborum non. Aute enim sit aute
            non duis aute ex ad. Sint velit nostrud magna pariatur id proident
            consequat fugiat. Nulla velit eu eu velit veniam aliquip magna ea
            culpa est sunt nostrud consectetur.
          </p>

          <p className="mt-8">
            If you want to learn about early red tide warnings in your area,
            visit the{" "}
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
              Symptoms include sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium
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
