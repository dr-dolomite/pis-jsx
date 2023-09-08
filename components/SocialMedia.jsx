import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SocialMedia = () => {
  return (
    <section>
            <h1 className='text-black text-[42px] font-semibold mt-20 ml-16'>Follow us on our social media platforms</h1>
            {/*------------------------------LOGOS---------------------------------*/}
            <div className='flex items-center justify-center mt-10 h-[300px] mb-4'>
                <div className='justify-between flex flex-row items-center'>
                    <Link href='/'>
                        <Image src='/facebook.svg' alt='facebook' width={100} height={100} className='mx-20 hover:w-[140px] hover:h-[140px] ease-in duration-300' />
                    </Link>

                    <Link href='/'>
                        <Image src='/youtube.svg' alt='facebook' width={100} height={100} className='mx-20 hover:w-[140px] hover:h-[140px] ease-in duration-300' />
                    </Link>

                    <Link href='/'>
                        <Image src='/spotify.svg' alt='facebook' width={100} height={100} className='mx-20 hover:w-[140px] hover:h-[140px] ease-in duration-300' />
                    </Link>

                    <Link href='/'>
                        <Image src='/tiktok.svg' alt='facebook' width={90} height={90} className='mx-20 hover:w-[120px] hover:h-[120px] ease-in duration-300' />
                    </Link>
                </div>
            </div>
            {/*------------------------------LOGOS END---------------------------------*/}

            <div className='border-solid border-t-2 border-b-2'>
                {/*------------------------------YOUTUBE---------------------------------*/}
                <div className='ml-20 mt-10 flex flex-row items-center'>
                    <h1 className='text-black text-[18px] font-semibold'>Watch informative videos</h1>
                    <Image src='/youtube.svg' alt='facebook' width={30} height={30} className='mx-4' />
                </div>
                {/*------------------------------VID 1 START---------------------------------*/}

                <div className='flex flex-row mx-40 mt-10 mb-10 justify-center'>
                    {/*-----------------------------VID 1 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe
                            src="https://www.youtube.com/embed/0YLno_k3034"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className='vid-box rounded-[12px]'
                            width="334" height="352"
                        ></iframe>
                        <h1 className='text-15px font-semibold mt-6'>Batteries cause devastating injuries</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>10:49</p>

                    </div>
                    {/*-----------------------------VID 1 END------------------------------------*/}

                    {/*-----------------------------VID 2 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe
                            src="https://www.youtube.com/embed/0YLno_k3034"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className='vid-box rounded-[12px]'
                            width="334" height="352"
                        ></iframe>
                        <h1 className='text-15px font-semibold mt-6'>Carbon Monoxide: The Invisible Killer</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>08:47</p>
                    </div>
                    {/*-----------------------------VID 2 END------------------------------------*/}

                    {/*-----------------------------VID 3 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe
                            src="https://www.youtube.com/embed/0YLno_k3034"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className='vid-box rounded-[12px]'
                            width="334" height="352"
                        ></iframe>
                        <h1 className='text-15px font-semibold mt-6'>E-Cigs and toddlers: Beware</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>12:51</p>
                    </div>
                    {/*-----------------------------VID 3 END------------------------------------*/}
                </div>
                {/*------------------------------YOUTUBE END---------------------------------*/}
            </div>

            {/*--------------------------------SPOTIFY START------------------------------*/}
            <div className='border-solid border-t-2 border-b-2'>
                {/*------------------------------YOUTUBE---------------------------------*/}
                <div className='ml-20 mt-10 flex flex-row items-center'>
                    <h1 className='text-black text-[18px] font-semibold'>Podcast episodes on Spotify</h1>
                    <Image src='/spotify.svg' alt='spotify' width={30} height={30} className='mx-4' />
                </div>
                {/*------------------------------VID 1 START---------------------------------*/}

                <div className='flex flex-row mx-40 mt-10 mb-10 justify-center'>
                    {/*-----------------------------VID 1 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe src="https://open.spotify.com/embed/episode/3peS0LaCSRfqnaeZmNTzMI?" width="334" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className='vid-box-spot'></iframe>
                        <h1 className='text-15px font-semibold mt-6'>Red tide toxins: symptoms to look for</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>10:49</p>
                    </div>
                    {/*-----------------------------VID 1 END------------------------------------*/}

                    {/*-----------------------------VID 2 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe src="https://open.spotify.com/embed/episode/3peS0LaCSRfqnaeZmNTzMI?" width="334" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className='vid-box-spot'></iframe>
                        <h1 className='text-15px font-semibold mt-6'>Red tide toxins: symptoms to look for</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>08:47</p>
                    </div>
                    {/*-----------------------------VID 2 END------------------------------------*/}

                    {/*-----------------------------VID 3 START------------------------------------*/}
                    <div className='mx-10 flex flex-col'>
                        <iframe src="https://open.spotify.com/embed/episode/3peS0LaCSRfqnaeZmNTzMI?" width="334" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className='vid-box-spot'></iframe>
                        <h1 className='text-15px font-semibold mt-6'>Red tide toxins: symptoms to look for</h1>
                        <p className='text-15px text-[#5F5D5D] font-normal mt-2'>12:51</p>
                    </div>
                    {/*-----------------------------VID 3 END------------------------------------*/}
                </div>
                {/*------------------------------YOUTUBE END---------------------------------*/}
            </div>


    </section>
  )
}

export default SocialMedia