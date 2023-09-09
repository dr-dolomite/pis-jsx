import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <section className="mt-10 mb-20">
      <h1 className="text-[52px] font-semibold ml-16">The Poison Post</h1>

      <div className="mt-6 ml-16">
        <h1 className="text-[18px] text-[#0067A2] font-semibold">
          WVSU joins the Philippine National Poison Prevention Week | June
          19-23, 2023
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-x-8 mt-8 ml-16">
        <div className="text-[16px] font-normal max-w-[780px]">
          <p>
            Mark your calendars for an important event this June 19-23, 2023:
            National Poison Prevention Week!
          </p>

          <p className="mt-8">
            With the theme, "Tungo sa Kaligtasan ng Kalusugan at Kapaligiran:
            Dinggin ang Panawagan", let's come together and prioritize the
            safety of our health and environment. It's time to raise awareness
            and take action against the risks of poison-related incidents.
            During this special week, we will provide you with valuable
            information, tips, and resources on how to prevent poison-related
            accidents in our homes, workplaces, and communities.
          </p>

          <p className="mt-8">
            Join us in spreading the word! Share this post with your family,
            friends, and colleagues. Together, we can make a difference and
            protect our loved ones. Stay tuned for engaging activities,
            informative webinars, and interactive discussions throughout the
            week. Let's empower ourselves with knowledge and build a safer,
            healthier future for all.
          </p>

          <p className="mt-8">
            Remember, prevention is key! Let's work hand in hand to create a
            poison-free environment.
          </p>

          <p className="mt-8">
            To join the activities regarding with the celebration, scan the QR
            code here.
          </p>
          <div className="ml-20 mt-4">
            <Image
              src="/QRCode.svg"
              alt="qrcode"
              className="object-contain"
              width={140}
              height={140}
            />
          </div>
        </div>

        <div className="drop-shadow-md b-2">
          <Image
            src="/book.png"
            alt="book"
            width={0}
            height={0}
            sizes="100vw"
            className="2xl:w-[600px] 2xl:h-[700px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
