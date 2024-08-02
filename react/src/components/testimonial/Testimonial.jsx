import API_CONFIG from "../../scripts/globals/api-config";
import SectionHeader from "../header/SectionHeader"

import { useQuery } from 'react-query';
import { fetchAllTestimonials } from "../../scripts/fetchers/testimonials";

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default function Testimonial() {

  // FETCH API INITIALIZATION
  const { data: testimonials} = useQuery(['testimonials'], fetchAllTestimonials);

  return (
    <section id="testimonial" className="px-6 sm:px-16 text-center w-100 scroll-mt-28">
      <SectionHeader header="Professional Testimonials" subheader="My Credentials and Professional Development" />
      <div className="container mx-auto mt-16">
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8">
          {
            testimonials?.map((testimonial) => {
              return (
                <img 
                  key={testimonial.id} 
                  src={ API_CONFIG.IMAGES_URL + "placeholders/testimonials-blur.webp"} 
                  data-src={ API_CONFIG.IMAGES_URL + "testimonials/" + testimonial.image} 
                  data-sizes="auto"
                  className="lazyload w-full rounded-xl border-2 border-white"
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
