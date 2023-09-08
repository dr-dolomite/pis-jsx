import Image from 'next/image'

import {Hero, LatestNews, PoisonInfoBoard, Services, Linakages, Collaborators, MissionAndVision, MessPresident, Toxicologists, Team,
  SocialMedia, Location} from '@/components'

export default function Home() {
  return (
    <main>
     <Hero/>
     <PoisonInfoBoard/>
     <LatestNews/>
     <Services/>
     <Linakages/>
     <Collaborators/>
     <MissionAndVision/>
     <MessPresident/>
     <Toxicologists/>
     <div className='xl:mt-[240px]'>
     <Team/>
     </div>
      <SocialMedia/>
      <Location/>

     
    </main>
  )
}
