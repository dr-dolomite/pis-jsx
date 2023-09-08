import React from 'react'
import Image from 'next/image'
import {HiMap} from 'react-icons/hi'

const Location = () => {
  return (
   <section>
    <div className='flex flex-col mb-20'>
            <h1 className='text-black text-[42px] font-semibold mt-20 ml-16'>Where we are located</h1>
            <div className='flex justify-center items-center'>
                <div className='flex items-center justify-center mt-14 map-box rounded-2xl'>
                    <Image src='/map.png' alt='map' width={1220} height={810} quality={100} className='object-contain rounded-lg brightness-[.9]' />
                    <div className='group absolute z-20 hover:cursor-pointer mr-[297px]'>
                        <div className='max-w-[80px]'>
                            <Image src='/map-pin.png' alt='map-pin' width={80} height={80} className=' mt-6 object-cover' />
                        </div>
                        <div className='absolute invisible group-hover:visible group-hover:bottom-10 group-hover:left-[85px]'>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1689247461747!6m8!1m7!1szeOC6IQ5WAT3_17xOnYs3g!2m2!1d10.7124106073564!2d122.5604242779992!3f277.27604139346255!4f15.864990502272619!5f0.7820865974627469" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-2xl w-[560px] h-[360px]'></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center flex-row mt-10'>
            <HiMap className='text-[24px] mr-2' />
                <h1 className='font-semibold text-[16px]'>WVSU Poison Information Service <span className='font-normal'> - BINHI Bldg. Magsaysay Road, West Visayas State University, Iloilo City, Iloilo, 5000</span> </h1>
            </div>
        </div>
   </section>
  )
}

export default Location