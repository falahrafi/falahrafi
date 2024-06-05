// import { Link } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";


import bgBlur from "../assets/bg-blur.png"

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    // <ParallaxProvider>
    //   <Parallax>
    //     <AppNavbar />
    //     <Hero />
    //   </Parallax>
    //   <div className="min-h-60 mt-40">
    //     <Parallax speed={-10}>
    //       <div className="h-8 w-8 bg-falahrafi-green rounded-full mx-auto"></div>
    //     </Parallax>
    //   </div>
    //   <Parallax>
    //     <Portfolio />
    //   </Parallax>
    // </ParallaxProvider>
    
    // <div>
    //   <Parallax pages={4}>
    //     <ParallaxLayer offset={0}>
    //       <AppNavbar />
    //       <Hero />
    //     </ParallaxLayer>
    //     <ParallaxLayer sticky={{ start: 1.4, end: 1.6 }} speed={2}>
    //       <div className="h-40 text-center">
    //         <span className="inline-block h-5 w-5 border-white border-2 border-solid bg-falahrafi-green rounded-full mx-auto mt-12"></span>
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1.8}>
    //       <Portfolio />
    //     </ParallaxLayer>
    //   </Parallax>
    // </div>

    <div style={{backgroundImage: 'url(' + bgBlur + ')'}}>
      <AppNavbar />
      <Hero />
      <div className="mt-60"></div>
      <Portfolio />
    </div>
  )
}
