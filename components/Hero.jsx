import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import Image from 'next/image'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Image 
      src="/menu-control.svg"
      alt="blue border"
      width={1920}
      height={100}
      />

      </div>
      
    </section>
    
    
  );
};

export default Hero;