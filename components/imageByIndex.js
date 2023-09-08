// content.js
import image1 from "../public/hero.webp";
import image2 from "/public/hero2.webp";
import image3 from "/public/hero3.webp";
import image4 from "/public/hero4.webp";
import image5 from "/public/hero5.png";

const slideContent = [
  {
    imageSrc: image1,
    title:
      "Welcome to West Visayas State University Poison Information Service",
    description:
      "When it comes to poison exposure, every second counts. That's why we're here, providing you with instant access to comprehensive poison information and guidance. Whether you're a concerned parent, caregiver, healthcare professional, or simply someone seeking knowledge, we've got you covered.",
  },
  {
    imageSrc: image2,
    title: "Prenatal 'Forever Chemicals' Exposure Tied to Childhood Obesity Risk",
    description: "A new study finds that exposure to 'forever chemicals' during pregnancy may increase the risk of childhood obesity. These chemicals are a group of man-made chemicals that are known to be persistent in the environment and can build up in the body.",
  },
  {
    imageSrc: image3,
    title: "Study Reveals Genotoxicity of Common Sweetener Metabolite, Raising Safety Concerns",
    description: "A new study finds that a chemical formed when we digest a widely used sweetener is 'genotoxic,' meaning it breaks up DNA. This could have implications for the safety of this sweetener, which is used in many food and beverage products.",
  },
  {
    imageSrc: image4,
    title: "Study Uncovers Endocrine Disrupting Effects of Micro/Nanoplastics, Raising Health Concerns",
    description: "A new study shows that micro and nanoplastic particles can have endocrine disrupting effects, meaning they can interfere with the body's hormones. This could have implications for human health, as exposure to these particles is becoming increasingly common.",
  },
  {
    imageSrc: image5,
    title: "Alarming Study: Over 80% of IV Drug Users Test Positive for Deadly Fentanyl",
    description: "A new study finds that more than 80% of intravenous drug users test positive for fentanyl, a powerful synthetic opioid that is often mixed with other drugs. This is a serious public health concern, as fentanyl can be highly addictive and can cause fatal overdoses.",
  },
];

export default slideContent;

{
  /*import image1 from '../public/hero.webp';
import image2 from '/public/hero2.webp';
import image3 from '/public/hero3.webp';
import image4 from '/public/hero4.webp';
import image5 from '/public/hero5.png';

export const images = [image1, image2, image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;*/
}
