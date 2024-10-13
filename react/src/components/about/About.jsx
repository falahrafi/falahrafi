import falahrafiAbout from "../../assets/falahrafi-about.png"
import grid3dPattern from '../../assets/grid-3d-pattern-fade.png'

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-16 py-40 -mt-40 text-center w-100 scroll-mt-0" style={{backgroundImage: 'url(' + grid3dPattern + ')'}}>
      <h2 className="bubble-title"><span className="bubble-bg-title">&nbsp;</span>About Me</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-5 lg:col-span-2 lg:col-start-6">
            <img src={falahrafiAbout} alt="Falahrafi Photo" className="mt-16 mb-10 sm:mt-12 sm:mb-8 sm:p-6 lg:p-0 xl:p-6" />
          </div>
          <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 2xl:col-span-10 2xl:col-start-2 text-justify font-display text-sm sm:text-base leading-7 font-light tracking-wide">
            <p className="mb-6">
              As a <b className="font-semibold">Pi-Shaped person</b>, I possess a unique blend of skills that encompass both web programming and design, allowing me to approach projects from multiple angles.
            </p>
            <p className="mb-6">
              My passion lies in <b className="font-semibold">UI/UX Design</b> and <b className="font-semibold">Web Development</b>, where I focus on creating engaging and user-friendly experiences. I thrive on transforming creative ideas into functional websites that not only look great but also provide seamless navigation and usability.
            </p>
            <p className="mb-6">
              I also specialize in <b className="font-semibold">Logo and Digital Design</b>, helping brands establish their visual identity in the digital landscape. Each design I create is thoughtfully crafted to reflect the essence of the brand while ensuring it stands out in a competitive market.
            </p>
            <p className="mb-6">
              Additionally, I explore other areas, such as <b className="font-semibold">machine learning, startup development, and project management,</b> broadening my understanding and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
