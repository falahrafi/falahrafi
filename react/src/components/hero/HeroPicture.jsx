import falahrafiHero from '../../assets/falahrafi-hero.png'
import SocialButton from '../button/SocialButton'

import { faLinkedinIn, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function HeroPicture() {
  
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-1 z-10">
          <div className="mt-64 ms-64">
            <SocialButton link="https://www.linkedin.com/in/mfalahabdurrafi/" icon={faLinkedinIn} addClass="rounded-t-xl rounded-bl-xl animate-[bounce_2.2s_ease-in-out_infinite]" />
            <SocialButton link="https://instagram.com/mfalahabdurrafi" icon={faInstagram} addClass="rounded-l-xl rounded-br-xl animate-[bounce_2.4s_ease-in-out_infinite] mt-40" />
          </div>
        </div>
        <div className="col-span-10 mx-auto mt-5">
          <img src={falahrafiHero} alt="Falahrafi Hero Image" className="bg-cover bg-50" />
        </div>
        <div className="col-span-1">
          <div className="mt-64 ms-[-232px]">
            <SocialButton link="https://dribbble.com/falahrafi" icon={faDribbble} addClass="rounded-t-xl rounded-br-xl animate-[bounce_2.3s_ease-in-out_infinite]" />
            <SocialButton link="https://github.com/falahrafi" icon={faGithub} addClass="rounded-b-xl rounded-tr-xl animate-[bounce_2.5s_ease-in-out_infinite] mt-40" />
          </div>
        </div>
      </div>
    </div>
  )
}
