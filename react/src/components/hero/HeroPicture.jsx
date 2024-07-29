import falahrafiHero from '../../assets/falahrafi-hero.png'
import SocialButton from '../button/SocialButton'

import { faLinkedinIn, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function HeroPicture() {
  
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="absolute sm:relative left-0 min-[490px]:left-12 sm:left-0 col-span-1 z-10">
          <div className="mt-44 min-[490px]:mt-52 sm:mt-40 md:mt-44 lg:mt-60 xl:mt-64 2xl:mt-80 sm:ms-[90px] md:ms-[110px] lg:ms-[200px] xl:ms-[260px]">
            <SocialButton link="https://www.linkedin.com/in/mfalahabdurrafi/" icon={faLinkedinIn} iconSize="text-xl min-[490px]:text-3xl" addClass="rounded-l-none rounded-r-lg border-l-0 min-[490px]:rounded-t-xl min-[490px]:rounded-bl-xl min-[490px]:rounded-br-none min-[490px]:border-2 animate-[bounce_2.2s_ease-in-out_infinite]" />
            <SocialButton link="https://instagram.com/mfalahabdurrafi" icon={faInstagram} iconSize="text-xl min-[490px]:text-3xl" addClass="mt-12 sm:mt-24 md:mt-32 lg:mt-40 rounded-l-none rounded-r-lg border-l-0 min-[490px]:rounded-l-xl min-[490px]:rounded-br-xl min-[490px]:rounded-tr-none min-[490px]:border-2 animate-[bounce_2.4s_ease-in-out_infinite]" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-10 mx-auto mt-24 sm:mt-16 md:mt-14 lg:mt-12 xl:mt-5">
          <img src={falahrafiHero} alt="Falahrafi Hero Image" className="mb-4 lg:py-8 lg:px-20 xl:py-10 xl:px-28" />
        </div>
        <div className="absolute sm:relative right-0 min-[490px]:right-12 sm:right-0 col-span-1">
          <div className="mt-44 min-[490px]:mt-52 sm:mt-40 md:mt-44 lg:mt-60 xl:mt-64 2xl:mt-80 sm:ms-[-80px] md:ms-[-100px] lg:ms-[-170px] xl:ms-[-230px]">
            <SocialButton link="https://dribbble.com/falahrafi" icon={faDribbble} iconSize="text-xl min-[490px]:text-3xl" addClass="rounded-l-lg border-r-0 min-[490px]:rounded-t-xl min-[490px]:rounded-br-xl min-[490px]:rounded-bl-none min-[490px]:border-2 animate-[bounce_2.3s_ease-in-out_infinite]" />
            <SocialButton link="https://github.com/falahrafi" icon={faGithub} iconSize="text-xl min-[490px]:text-3xl" addClass="mt-12 sm:mt-24 md:mt-32 lg:mt-40 rounded-l-lg border-r-0 min-[490px]:rounded-r-xl min-[490px]:rounded-br-xl min-[490px]:rounded-tl-none min-[490px]:border-2 animate-[bounce_2.5s_ease-in-out_infinite]" />
          </div>
        </div>      
      </div>
    </div>
  )
}
