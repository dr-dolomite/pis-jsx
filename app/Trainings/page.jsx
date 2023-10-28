import React from "react";
import Link from "next/link";

const Trainings = () => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-[52px] font-semibold ml-16">Trainings</h1>
      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">Basic First Aid Training</h1>
        <p className="mt-4 text-[16px] font-normal max-w-[800px]">
          Our comprehensive basic first aid training equips you with essential
          skills to respond to common emergencies effectively. Learn how to
          assess injuries, provide CPR, and stabilize individuals in need.
          Whether you're a concerned parent, teacher, or just someone who wants
          to be prepared, our courses will give you the confidence and knowledge
          to make a difference in critical situations.
        </p>
      </div>

      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">Handling Poison Incidents</h1>
        <p className="mt-4 text-[16px] font-normal max-w-[800px]">
          Poison emergencies can happen anytime, anywhere. Our specialized
          training programs cover poison identification, initial response, and
          the steps to take before medical help arrives. Whether you're a
          healthcare professional or a concerned individual, our expert-led
          training sessions will empower you to respond swiftly and decisively
          in cases of poison exposure.
        </p>
      </div>

      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold">
          Interactive Talks, Webinars, and In-Depth Trainings
        </h1>
        <p className="mt-4 text-[16px] font-normal max-w-[800px]">
          In addition to our hands-on training courses, we offer a variety of
          interactive talks, webinars, and in-depth training sessions. Stay
          informed about the latest developments in first aid and poison
          management. Our expert speakers provide valuable insights and
          real-world knowledge, ensuring you're well-prepared to handle
          emergency situations with confidence.
        </p>
      </div>

      <div className="mt-10 ml-16">
        <h1 className="text-[20px] font-semibold max-w-[800px]">
        Join us to enhance your knowledge, save lives, and become a more informed and prepared individual in your community.
        </h1>

      </div>
    </div>
  );
};

export default Trainings;
