import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroPicture from "./HeroPicture";
import HeroText from "./HeroText";
import SecondaryButton from "../button/SecondaryButton";
import wavyPattern from '../../assets/wavy-pattern-fade.png';
import falahCv from '../../assets/falah-cv-2024.pdf';

import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <header id="Hero" className="px-2 lg:px-12 bg-scroll mt-[-96px] min-[490px]:mt-[-120px] sm:mt-[-90px] lg:mt-[-120px] mb-20 text-center" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>
      <HeroPicture />
      <HeroText />
      <div id="btnCV" className="container flex mt-20 sm:mt-12 xl:mt-20 mx-auto px-4 sm:px-16 lg:px-32 xl:px-52 text-center">
        <div className="flex-1 text-end">
          <div className="cv-line bg-falahrafi-green w-full h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
        </div>
        <div className="flex-none mx-4 sm:mx-8">
          {/* <SecondaryButton link={falahCv} text="Download CV" icon={faFileArrowDown} rounded="rounded-lg" /> */}
        <div className="items-center justify-center inline" onClick={() => navigator.vibrate(50)}>
          <a href={falahCv} className="rounded-lg font-display font-semibold text-lg uppercase tracking-widest backdrop-blur bg-gradient-to-b from-transparent to-white/20 border-solid border-2 border-neutral-600 hover:bg-none hover:bg-falahrafi-green/30 hover:border-falahrafi-green hover:border-solid hover:text-white hover:shadow-[0_6px_30px_0px_rgba(13,220,125,0.6)] px-7 py-4 hover:px-8 transition-all ease-in-out duration-500">
            Download CV
            <span>&nbsp; <FontAwesomeIcon icon={faFileArrowDown} /></span>
          </a>
        </div>
        </div>
        <div className="flex-1 text-start">
          <div className="cv-line bg-falahrafi-green w-full h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
        </div>
      </div>
    </header>
  )
}
