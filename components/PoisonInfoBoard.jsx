import React from "react";
import PoisonInfoCard from "./PoisonInfoCard";

const PoisonInfoBoard = () => {
  return (
    <div className="flex flex-col justify-center 2xl:mt-10">
      <div className="flex flex-row items-center 2xl:ml-10">
        <h1 className="text-black 2xl:text-[42px] font-semibold">
          Poison Awareness Information
        </h1>
        <div className="2xl:ml-12 2xl:h-12 2xl:border-r-4 border-solid border-[#FDD247]" />
        <p className="text-black 2xl:text-[18px] font-normal ml-12 hover:text-[#0067A2] hover:cursor-pointer">
          View All
        </p>
      </div>
      <div className="items-center 2xl:mt-8 2xl:ml-4 flex flex-row">
        <div className="grid grid-cols-4 gap-y-4">
          <PoisonInfoCard
            title="Beware of Poisonous Crabs"
            content="Crabs are a common and favorite food, especially in Western Visayas. However, not all crabs are safe to be eaten. In fact, there are some species of crabs, one of which is Zosimus aeneus or the devil crab shown here which may cause death when eaten. In July, 2023, one death and several people were hospitalized after eating the crab.  It contains the neurotoxins tetrodotoxin and saxitoxin which can lead to muscle paralysis and respiratory failure. Take note that the toxins are heat-stable, meaning they can still kill even if the crab is cooked. For more questions about animal toxins, contact us and we will be glad to provide valuable information."
          />

          <PoisonInfoCard
            title="Looking for a snake anti-venom?"
            content="Snakes are everywhere and, in some instances, they may bite humans when feel threatened. Many people, doctors and hospitals call the toxicologist or poison centers and looking for a snake anti-venom. It is important to know that not all snakes are venomous and, in some cases, bites from venomous snakes may not result in envenomation or would need anti-venoms. Snake antivenoms are currently a scare resource in the country. They are species-specific, which means they can only work in certain types of snakes for which they were made for. In addition, they are not totally safe and may lead to death from anaphylactic reactions. Thus, the WVSU Poison Information Service can assist the public and healthcare professionals with regards to concerns about anti-venoms.
            "
          />

          <PoisonInfoCard
            title="Is your home safe for kids?"
            content="Infants and children are naturally curious and they want to explore the house. They may even eat or drink new stuffs. Many things in the house are potentially hazardous and can lead to death or hospitalization. Common substances that result to accidental poisoning referred to poison centers include household cleaning agents like bleach, cosmetic products, pharmaceuticals, and household pesticides. It is important for parents and guardians to identify these agents, properly label the containers and secure them in locked cabinets out of reach of infants and children. Call and discuss with the WVSU Poison Information Service on the ways to prevent poisonings at home.
            "
          />

          <PoisonInfoCard
            title="Carbon Monoxide: The Invisible Killer"
            content="Carbon monoxide is a colorless gas and is a byproduct of a process called combustion which happens for example in car engines, gas stoves and electricity generators. It can be inhaled and once the concentration in the body reaches toxic levels, it can lead to drowsiness, coma, and death. Concentrations of carbon monoxide can rapidly increase in enclosed spaces. Thus, tips to avoid carbon monoxide poisoning include keeping the kitchen well ventilated, especially when using gas stoves, make sure the exhaust system of your car is working properly and avoid electricity generators inside the house where people are staying."
          />
        </div>
      </div>
    </div>
  );
};

export default PoisonInfoBoard;
