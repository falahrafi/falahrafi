import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from 'react-query';
import { fetchProjectById } from "../scripts/fetchers/projects";

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectSectionHeader from '../components/header/ProjectSectionHeader';

import ActionButton from '../components/button/ActionButton';
import MainButton from '../components/button/MainButton';

import { faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

import Footer from '../components/footer/Footer';

import wavyPattern from '../assets/grid-3d-pattern-fade.png'

const WebSkills = [iconHtml, iconCss, iconJs, iconReact, iconBootstrap, iconTailwind, iconPhp, iconMysql, iconLaravel, iconNodejs, iconVite, iconPostman, iconEslint, iconGit, iconGithub]

export default function ProjectDetailPage() {
  const navigate = useNavigate();

  // Get 'projectId'
  const { id } = useParams();

  // FETCH API INITIALIZATION
  const { isLoading, isSuccess, isError, data: project, error } = useQuery(['projects', id], fetchProjectById);

  // Back to Previous Page if 'Esc' Clicked
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace' ) { navigate(-2); }
    };
    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [navigate]);
  
  // FETCH API STATUS
  if (isLoading) {
    console.log("Loading...");
  }

  if (isError) {
    console.log("Error: ", error.message);
  }

  return (
    <div id="projectDetailPage" className="px-6 sm:px-12 md:px-16" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>

      <div className="hidden sm:block absolute top-12 right-10">
        <ActionButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      
      {/* CLOSE BUTTON on MOBILE */}
      <div className="sm:hidden mt-8 -mb-8 text-end">
        <ActionButton link="/#portfolio" icon={faXmark} />
      </div>

      <SecondaryNavbar text={isSuccess ? project.name : "Project Name"} />
      <section id="projectDetails" className="container text-center mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 2xl:col-start-4 2xl:col-span-6">
            <div className="mb-12 sm:mb-8 p-3 md:p-5 backdrop-blur-sm bg-gradient-to-bl from-white/25 to-white/10 border border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
              <img src={isSuccess ? project.image : ""} className="h-[210px] sm:h-[250px] md:h-[290px] lg:h-[300px] xl:h-[380px] 2xl:h-[360px] w-full object-cover object-top rounded-lg" alt=""/>
            </div>

            { isSuccess 
              ? (project.website !== "" 
                  ? <MainButton width="w-full sm:w-fit" text="Live Website" link={isSuccess ? project.website : ""} icon={faGlobe} rounded="rounded-lg" margin="mb-6 sm:me-6" />
                  : "")
              : ""
            }

            { isSuccess 
              ? (project.sourceCode !== "" 
                  ? <MainButton width="w-full sm:w-fit" text="Source Code" link={isSuccess ? project.sourceCode : ""} icon={faGithub} rounded="rounded-lg" />
                  : "") 
              : ""
            }

            <ProjectSectionHeader header="About" />
            <p className="font-header font-light text-base text-justify tracking-widest">
              {isSuccess ? project.about : ""}
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
