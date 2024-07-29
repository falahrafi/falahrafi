import { useState } from "react";

import CertificateItem from "./CertificateItem"
import SectionHeader from "../header/SectionHeader"
import SecondaryButton from "../button/SecondaryButton"
import gridPattern from '../../assets/grid-pattern-fade.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../../styles/certificate.css'

// import required modules
import { Navigation } from 'swiper/modules'

import dicodingCert from "../../assets/dicoding-certificate-sample.png"

const certificates = [
  {
    name: "Front-End Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Git dan GitHub",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "React Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Back-End Developer Beginner",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
    {
    name: "Front-End Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Git dan GitHub",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "React Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Back-End Developer Beginner",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
    {
    name: "Front-End Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Git dan GitHub",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "React Web Developer Expert",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
  {
    name: "Back-End Developer Beginner",
    provider: "Dicoding Indonesia",
    image: dicodingCert
  },
]

export default function Certificate() {

  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section id="certificate" className="px-6 sm:px-16 text-center bg-top w-100 scroll-mt-28" style={{backgroundImage: 'url(' + gridPattern + ')'}}>
      <SectionHeader header="Certificates Obtained" subheader="My Credentials and Professional Development" />

      {/* LARGER DEVICE */}
      <div className="hidden md:block container mx-auto mt-24">
        <Swiper
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            certificates.map((certificate) => {
              return (
                <SwiperSlide key={certificate.name} className="group">
                  <CertificateItem 
                    key={certificate.name}
                    name={certificate.name} 
                    provider={certificate.provider} 
                    image={certificate.image}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      {/* SMALLER DEVICE */}
      <div className="md:hidden container mx-auto mt-24">
          {
            certificates.slice(0, visible).map((certificate) => {
              return (
                <CertificateItem 
                  key={certificate.name}
                  name={certificate.name} 
                  provider={certificate.provider} 
                  image={certificate.image}
                />
              )
            })
          }

          {
            // If all certificates have been loaded, don't show the button
            certificates.length - visible < 3
            ? ""
            : (
              <div className="py-6" onClick={showMoreItems}>
                <SecondaryButton link="/" text="Load More" rounded="rounded-md" />
              </div>
            )
          }
      </div>
    </section>
  )
}
