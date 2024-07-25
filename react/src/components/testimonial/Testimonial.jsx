import SectionHeader from "../header/SectionHeader"

import review1 from "../../assets/testimonials/review-01.png"
import review2 from "../../assets/testimonials/review-02.png"
import review3 from "../../assets/testimonials/review-03.png"
import review4 from "../../assets/testimonials/review-04.png"
import review5 from "../../assets/testimonials/review-05.png"
import review6 from "../../assets/testimonials/review-06.png"
import review7 from "../../assets/testimonials/review-07.png"

export default function Testimonial() {
  return (
    <section id="testimonial" className="px-12 text-center w-100">
      <SectionHeader header="Professional Testimonials" subheader="My Credentials and Professional Development" />
      <div className="container mx-auto mt-16">
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8">
            <img src={review1} className="w-100 rounded-xl"/>
            <img src={review2} className="w-100 rounded-xl"/>
            <img src={review3} className="w-100 rounded-xl"/>
            <img src={review4} className="w-100 rounded-xl"/>
            <img src={review5} className="w-100 rounded-xl"/>
            <img src={review6} className="w-100 rounded-xl"/>
            <img src={review7} className="w-100 rounded-xl"/>
        </div>
      </div>
    </section>
  )
}
