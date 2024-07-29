import SectionHeader from "../header/SectionHeader"
import PortfolioItem from "./PortfolioItem"

import { Fade } from "react-awesome-reveal";

import iconUix from "../../assets/icons/icon-uiux.png"
import iconFigma from "../../assets/icons/icon-figma.svg"
import iconMaze from "../../assets/icons/icon-maze.png"

import iconWeb from "../../assets/icons/icon-web.png"
import iconHtml from "../../assets/icons/icon-html.svg"
import iconCss from "../../assets/icons/icon-css.svg"
import iconJs from "../../assets/icons/icon-js.svg"
import iconReact from "../../assets/icons/icon-react.svg"
import iconBootstrap from "../../assets/icons/icon-bootstrap.svg"
import iconTailwind from "../../assets/icons/icon-tailwind.svg"
import iconPhp from "../../assets/icons/icon-php.svg"
import iconMysql from "../../assets/icons/icon-mysql.svg"
import iconLaravel from "../../assets/icons/icon-laravel.svg"
import iconNodejs from "../../assets/icons/icon-nodejs.svg"
import iconVite from "../../assets/icons/icon-vite.svg"
import iconPostman from "../../assets/icons/icon-postman.svg"
import iconEslint from "../../assets/icons/icon-eslint.svg"
import iconGit from "../../assets/icons/icon-git.svg"
import iconGithub from "../../assets/icons/icon-github.svg"

import iconLogo from "../../assets/icons/icon-logo.png"
import iconCanva from "../../assets/icons/icon-canva.svg"
import iconAi from "../../assets/icons/icon-ai.svg"
import iconPs from "../../assets/icons/icon-ps.svg"

const UixSkills = [iconFigma, iconMaze, iconAi, iconPs]
const WebSkills = [iconHtml, iconCss, iconJs, iconReact, iconBootstrap, iconTailwind, iconPhp, iconMysql, iconLaravel, iconNodejs, iconVite, iconPostman, iconEslint, iconGit, iconGithub]
const LogoSkills = [iconAi, iconPs, iconCanva]

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 sm:px-16 text-center bg-top scroll-mt-28">
      <SectionHeader header="Check out my portfolio" subheader="See My Design and Code Skills in Action" />
      <div className="container mx-auto mt-24">
        <Fade cascade damping={0.2}>
          <ul className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16 lg:gap-5">
              <li className="col-span-12 md:col-span-6 lg:col-span-4">
                <PortfolioItem icon={iconUix} categoryOne="UI / UX" categoryTwo="Design" link="/portfolio/uiux" skills={UixSkills} />
              </li>
              <li className="col-span-12 md:col-span-6 lg:col-span-4">
                <PortfolioItem icon={iconWeb} categoryOne="Website" categoryTwo="Development" link="/portfolio/web" skills={WebSkills} />
              </li>
              <li className="col-span-12 md:col-start-4 md:col-span-6 lg:col-span-4">
                <PortfolioItem icon={iconLogo} categoryOne="Logo Design &" categoryTwo="Digital Design" link="/portfolio/design" skills={LogoSkills} />
              </li>
          </ul>
        </Fade>
      </div>
    </section>
  )
}
