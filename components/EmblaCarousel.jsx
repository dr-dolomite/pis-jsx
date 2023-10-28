"use client";

import React from "react";
import { Button } from "flowbite-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import slideContent from "./imageByIndex";
import Image from "next/image";
import { HiPhone } from "react-icons/hi";

import Link from "next/link";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const autoplayOptions = {
    delay: 8000,
  };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slideContent.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative">
                <div className="z-0 2xl:h-[760px] w-full h-[240px]">
                  <Image
                    className="object-cover brightness-[.25]"
                    src={slide.imageSrc}
                    alt={`hero-${index}`}
                    fill
                  />
                </div>
                <div className="absolute inset-0 z-10 flex items-center 2xl:left-20 left-5">
                  <div className="2xl:flex 2xl:flex-col">
                    <h1 className="text-[#FDD247] 2xl:text-[52px] text-[18px] 2xl:w-[880px] w-[350px] font-semibold 2xl:leading-normal">
                      {slide.title}
                    </h1>
                    <p className="text-white 2xl:mt-8 mt-2 2xl:w-[680px] w-[280px] 2xl:text-[18px] text-[8px] 2xl:font-normal">
                      {slide.description}
                    </p>
                    <div className="flex flex-row 2xl:mt-10 mt-4 items-center">
                      <Button
                        className="bg-[#0067A2] hover:bg-[#02588a] 2xl:p-2 p-0 w-[110px] h-[28px] xl:w-[280px] xl:h-[60px]"
                        color="primary"
                      >
                        <Link href="/Help">
                          <span className="capitalize text-white font-semibold 2xl:text-[18px] text-[8px]">
                            Get Help Online
                          </span>
                        </Link>
                      </Button>
                      <p className="text-white 2xl:text-[18px] text-[8px] 2xl:font-normal 2xl:mx-8 mx-2">
                        or
                      </p>
                      <Button
                        className="bg-[#FDD247] hover:bg-[#dab53c] 2xl:p-2 p-0 w-[120px] h-[28px] xl:w-[280px] xl:h-[60px]"
                        color="primary"
                      >
                        <HiPhone className="2xl:h-6 2xl:w-6 h-2 w-2 2xl:mr-3 mr-1 mt-1 text-black" />
                        <div className="flex flex-row items-center">
                          <span className="capitalize text-black font-semibold 2xl:text-[18px] text-[8px]">
                            Call 033-333-3333
                          </span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

{
  /*
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="relative">
                <div className="z-0 xl:h-[700px] xl:w-full">
                  <Image
                    className="object-cover brightness-[.35]"
                    src={imageByIndex(index)}
                    alt="hero"
                    fill
                  />
                </div>
                <div className="absolute inset-0 z-10 flex items-center xl:left-20">
                  <div className="2xl:flex 2xl:flex-col">
                    <h1 className="text-white 2xl:text-[52px] 2xl:w-[880px] font-semibold leading-normal">
                      Welcome to West Visayas State University Poison
                      Information Service
                    </h1>
                    <p className="text-white 2xl:mt-8 2xl:w-[680px] 2xl:text-[18px] 2xl:font-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    <div className="2xl:flex 2xl:flex-row 2xl:mt-10 items-center">
                      <Button
                        className="bg-[#FDD247] hover:bg-[#dab53c] 2xl:p-2"
                        color="primary"
                      >
                        <span className="capitalize text-black font-semibold 2xl:text-[18px]">
                          Get Help Online
                        </span>
                      </Button>
                      <p className="text-white 2xl:text-[18px] 2xl:font-normal 2xl:mx-8">
                        or
                      </p>
                      <Button
                        className="bg-[#FDD247] hover:bg-[#dab53c] 2xl:p-2"
                        color="primary"
                      >
                        
                        <HiPhone className="2xl:h-6 2xl:w-6 2xl:mr-3" />
                        <div className="2xl:flex 2xl:flex-row items-center">
                        <span className="capitalize text-black font-semibold 2xl:text-[18px]">
                          Call 033-333-3333
                        </span>
                        </div>
                       
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
*/
}
