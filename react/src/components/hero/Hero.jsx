import HeroPicture from "./HeroPicture";
import HeroText from "./HeroText";
import SecondaryButton from "../button/SecondaryButton";
import wavyPattern from '../../assets/wavy-pattern-fade.png'

import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <header id="Hero" className="px-12 bg-scroll mt-[-120px] text-center" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>
      <HeroPicture />
      <HeroText />
      <div id="btnCV" className="container mt-20 mb-60 mx-auto">
        <div className="grid grid-cols-8">
          <div className="col-span-3 text-end">
            <div className="cv-line bg-falahrafi-green w-72 h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
          </div>
          <div className="col-span-2">
            <SecondaryButton link="/" text="Download CV" icon={faFileArrowDown} rounded="rounded-lg" />
          </div>
          <div className="col-span-3 text-start">
            <div className="cv-line bg-falahrafi-green w-72 h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
