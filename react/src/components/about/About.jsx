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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
