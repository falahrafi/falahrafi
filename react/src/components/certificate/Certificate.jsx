import SectionHeader from "../header/SectionHeader"
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
]

export default function Certificate() {
  return (
    <section id="certificate" className="px-12 text-center bg-top w-100" style={{backgroundImage: 'url(' + gridPattern + ')'}}>
      <SectionHeader header="Certificates Obtained" subheader="My Credentials and Professional Development" />
      <div className="container mx-auto mt-24">
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
                <SwiperSlide key={certificate.name}>
                  <img src={certificate.image} alt="Certificate" className="mb-16 select-none" />
                  <h4 className="select-none font-display font-bold text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                    {certificate.name}
                  </h4>
                  <h5 className="select-none font-display font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-falahrafi-green-light via-falahrafi-green-light to-falahrafi-green-dark">
                    {certificate.provider}
                  </h5>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
