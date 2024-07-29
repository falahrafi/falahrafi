import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectSectionHeader from '../components/header/ProjectSectionHeader';

import ActionButton from '../components/button/ActionButton';
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

import wavyPattern from '../assets/grid-3d-pattern-fade.png'

const UixSkills = [iconFigma, iconMaze, iconAi, iconPs]
const WebSkills = [iconHtml, iconCss, iconJs, iconReact, iconBootstrap, iconTailwind, iconPhp, iconMysql, iconLaravel, iconNodejs, iconVite, iconPostman, iconEslint, iconGit, iconGithub]
const LogoSkills = [iconAi, iconPs, iconCanva]

export default function ProjectDetailPage() {

  const navigate = useNavigate();

  // Back to Previous Page if 'Esc' Clicked
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace' ) {
        navigate(-2);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [navigate]);

  return (
    <div id="projectDetailPage" className="px-6 sm:px-12 md:px-16" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>
      
      <div className="hidden sm:block absolute top-12 right-10">
        <ActionButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      
      {/* CLOSE BUTTON on MOBILE */}
      <div className="sm:hidden mt-8 -mb-8 text-end">
        <ActionButton link="/#portfolio" icon={faXmark} />
      </div>

      <SecondaryNavbar text="Galseid Website" />
      <section id="projectDetails" className="container text-center mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 2xl:col-start-4 2xl:col-span-6">
            <div className="mb-12 sm:mb-8 p-3 md:p-5 backdrop-blur-sm bg-gradient-to-bl from-white/25 to-white/10 border border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
              <img src={PreviewProject} className="h-[210px] sm:h-[250px] md:h-[290px] lg:h-[300px] xl:h-[380px] 2xl:h-[360px] w-full object-cover object-top rounded-lg" alt=""/>
            </div>
            <MainButton width="w-full sm:w-fit" text="Live Website" link="/" icon={faGlobe} rounded="rounded-lg" />
            <div className="block sm:inline mb-6 sm:me-6"></div>
            <MainButton width="w-full sm:w-fit" text="Source Code" link="/" icon={faGithub} rounded="rounded-lg" />
            <ProjectSectionHeader header="About" />
            <p className="font-header font-light text-base text-justify tracking-widest">
              Galseid is a web application that provides a collection of paintings, information on prominent painters, art event agenda, and a stunning merchandise catalog. Through Galseid, we strive to bridge traditional art with modern technology, overcoming the challenge of lack of accessibility and information on Indonesian art and culture.
            </p>
            <ProjectSectionHeader header="Tools Used" />
            <div className="grid grid-cols-4 min-[490px]:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 mt-8 gap-3">
              {
                WebSkills.map((skill) => {
                  return (
                    <div className="col-span-1 flex backdrop-blur-sm bg-gradient-to-t from-black/65 to-black/25 hover:shadow-[0_6px_8px_0px_rgba(13,220,125,0.5)] rounded-xl h-20 w-20" key={skill}>
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
