import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectSectionHeader from '../components/header/ProjectSectionHeader';

import CloseButton from '../components/button/ActionButton';
import MainButton from '../components/button/MainButton';

import PreviewProject from "../assets/projects/preview-image.jpg"
import { faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import iconFigma from "../assets/icons/icon-figma.svg"
import iconMaze from "../assets/icons/icon-maze.png"

import iconHtml from "../assets/icons/icon-html.svg"
import iconCss from "../assets/icons/icon-css.svg"
import iconJs from "../assets/icons/icon-js.svg"
import iconReact from "../assets/icons/icon-react.svg"
import iconBootstrap from "../assets/icons/icon-bootstrap.svg"
import iconTailwind from "../assets/icons/icon-tailwind.svg"
import iconPhp from "../assets/icons/icon-php.svg"
import iconMysql from "../assets/icons/icon-mysql.svg"
import iconLaravel from "../assets/icons/icon-laravel.svg"
import iconNodejs from "../assets/icons/icon-nodejs.svg"
import iconVite from "../assets/icons/icon-vite.svg"
import iconPostman from "../assets/icons/icon-postman.svg"
import iconEslint from "../assets/icons/icon-eslint.svg"
import iconGit from "../assets/icons/icon-git.svg"
import iconGithub from "../assets/icons/icon-github.svg"

import iconCanva from "../assets/icons/icon-canva.svg"
import iconAi from "../assets/icons/icon-ai.svg"
import iconPs from "../assets/icons/icon-ps.svg"
import Footer from '../components/footer/Footer';

const UixSkills = [iconFigma, iconMaze, iconAi, iconPs]
const WebSkills = [iconHtml, iconCss, iconJs, iconReact, iconBootstrap, iconTailwind, iconPhp, iconMysql, iconLaravel, iconNodejs, iconVite, iconPostman, iconEslint, iconGit, iconGithub]
const LogoSkills = [iconAi, iconPs, iconCanva]

export default function ProjectDetailPage() {
  return (
    <div>
      <div className="absolute top-12 right-10">
        <CloseButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      <SecondaryNavbar text="Galseid Website" />
      <section id="projectDetails" className="container text-center mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-start-2 col-span-4">
            <div className="mb-8 p-6 bg-gradient-to-tr from-white/10 to-white/5 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border  border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
              <img src={PreviewProject} className="h-[380px] w-full object-cover object-top rounded-lg" alt=""/>
            </div>
            <MainButton width="w-fit" text="Live Website" link="/" icon={faGlobe} rounded="rounded-xl" />
            <span className="me-6"></span>
            <MainButton width="w-fit" text="Source Code" link="/" icon={faGithub} rounded="rounded-xl" />
            <ProjectSectionHeader header="About" />
            <p className="font-header font-light text-base text-justify tracking-widest">
              Galseid is a web application that provides a collection of paintings, information on prominent painters, art event agenda, and a stunning merchandise catalog. Through Galseid, we strive to bridge traditional art with modern technology, overcoming the challenge of lack of accessibility and information on Indonesian art and culture.
            </p>
            <ProjectSectionHeader header="Tools Used" />
            <div className="grid grid-cols-9 mt-8 gap-3">
              {
                WebSkills.map((skill) => {
                  return (
                    <div className="col-span-1 flex bg-black/30 rounded-xl h-20 w-20" key={skill}>
                      <img src={skill} alt="" className="m-auto h-10" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
