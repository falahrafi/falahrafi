import API_CONFIG from "../scripts/globals/api-config";

import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { useQuery } from 'react-query';
import { fetchProjectById } from "../scripts/fetchers/projects";
import { fetchToolsBelongToProject } from '../scripts/fetchers/tools';

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectSectionHeader from '../components/header/ProjectSectionHeader';

import ActionButton from '../components/button/ActionButton';
import MainButton from '../components/button/MainButton';

import { faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Footer from '../components/footer/Footer';

import wavyPattern from '../assets/wavy-pattern-fade.png'

export default function ProjectDetailPage() {
  const navigate = useNavigate();

  // Get 'projectId'
  const { id } = useParams();

  // FETCH API INITIALIZATION
  const { isSuccess: isSuccessProjects, data: project } = useQuery(['projects', id], fetchProjectById);
  const { isSuccess: isSuccessTools, data: tools } = useQuery(['tools', id], fetchToolsBelongToProject);

  // Back to Previous Page if 'Esc' Clicked
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace' ) { navigate(-2); }
    };
    window.addEventListener('keyup', handleEsc);

    return () => window.removeEventListener('keyup', handleEsc);
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

      <SecondaryNavbar text={isSuccessProjects ? project.name : "Project Name"} />
      <section id="projectDetails" className="container text-center mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 2xl:col-start-4 2xl:col-span-6">
            <div className="mb-12 p-1 md:p-2.5 backdrop-blur-sm bg-gradient-to-br from-white/15 to-white/5 text-start rounded-lg">
                { isSuccessProjects 
                  ? (project.video == "" 
                      ? <img src={isSuccessProjects ? project.image : ""} className="w-full object-cover object-top rounded-lg" alt=""/>
                      : <iframe 
                          className="w-full aspect-video rounded-lg border-none"
                          src={isSuccessProjects ? project.video : ""}
                          title={isSuccessProjects ? project.name : "Project Name"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowfullscreen>
                        </iframe>
                    )
                  : ""
                }
            </div>

            { isSuccessProjects 
              ? (project.website !== "" 
                  ? <MainButton width="w-full sm:w-fit" text="Live Website" link={isSuccessProjects ? project.website : ""} icon={faGlobe} rounded="rounded-lg" margin="mb-6 sm:me-6" />
                  : "")
              : ""
            }

            { isSuccessProjects 
              ? (project.sourceCode !== "" 
                  ? <MainButton width="w-full sm:w-fit" text="Source Code" link={isSuccessProjects ? project.sourceCode : ""} icon={faGithub} rounded="rounded-lg" />
                  : "") 
              : ""
            }

            <div 
              id="projectContent"
              className="mt-12 p-9 font-header font-light text-base leading-7 text-justify tracking-wider bg-gradient-to-b from-white/5 to-white/0 rounded-xl border-t-2 border-falahrafi-green"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(isSuccessProjects ? project.about : "") }} 
            />

            <ProjectSectionHeader header="Tools Used" />
            <div className="grid grid-cols-4 min-[490px]:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 mt-8 gap-3">
              {
                tools?.map((tool) => {
                  return (
                    <div className="col-span-1 flex backdrop-blur-sm bg-gradient-to-t from-black/65 to-black/25 hover:shadow-[0_6px_8px_0px_rgba(13,220,125,0.5)] rounded-xl h-20 w-20" key={tool.id}>
                      <img src={ API_CONFIG.IMAGES_URL + "icons/" + tool.logo} alt="" className="m-auto h-10" />
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
