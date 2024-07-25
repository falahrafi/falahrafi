// import { Link } from "react-router-dom";
import MainNavbar from "../components/navbar/MainNavbar";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Certificate from "../components/certificate/Certificate";
import Testimonial from "../components/testimonial/Testimonial";

import { Fade } from "react-awesome-reveal";
import Footer from "../components/footer/Footer";

export default function Home() {

  return (
    <div>
      <MainNavbar />
      <Fade cascade damping={0.1}>
        <Hero />
        <div className="h-36 w-fit border-2 border-dashed border-white/15 rounded-full mx-auto my-16"></div>
        <Portfolio />
        <div className="h-36 w-fit border-2 border-dashed border-white/15 rounded-full mx-auto my-16"></div>
        <Certificate />
        <div className="h-36 w-fit border-2 border-dashed border-white/15 rounded-full mx-auto mt-10 mb-16"></div>
        <Testimonial />
      </Fade>
      <Footer />
    </div>
  )
}
