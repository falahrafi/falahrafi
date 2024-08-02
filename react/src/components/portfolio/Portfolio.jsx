import SectionHeader from "../header/SectionHeader"
import PortfolioItem from "./PortfolioItem"

import { Fade } from "react-awesome-reveal";

import { useQuery } from 'react-query';
import { fetchToolsBelongToCategory } from '../../scripts/fetchers/tools';

import iconUix from "../../assets/icons/icon-uiux.png"
import iconWeb from "../../assets/icons/icon-web.png"
import iconLogo from "../../assets/icons/icon-logo.png"

export default function Portfolio() {

  // FETCH API INITIALIZATION
  const { isSuccess: isSuccessToolsUiux, data: toolsUiux } = useQuery(['toolsUiux', 1], fetchToolsBelongToCategory);
  const { isSuccess: isSuccessToolsWeb, data: toolsWeb } = useQuery(['toolsWeb', 2], fetchToolsBelongToCategory);
  const { isSuccess: isSuccessToolsLogo, data: toolsLogo } = useQuery(['toolsLogo', 3], fetchToolsBelongToCategory);

  return (
    <section id="portfolio" className="px-6 sm:px-16 text-center bg-top scroll-mt-28">
      <SectionHeader header="Check out my portfolio" subheader="See My Design and Code Skills in Action" />
      <div className="container mx-auto mt-24">
        <Fade cascade damping={0.2}>
          <ul className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16 lg:gap-5">
              <li className="col-span-12 md:col-span-6 lg:col-span-4">
                { isSuccessToolsUiux 
                  ? <PortfolioItem icon={iconUix} categoryOne="Product Design" categoryTwo="(UI / UX)" link="/portfolio/uiux" tools={Object.values(toolsUiux)} /> 
                  : ""
                }
              </li>
              <li className="col-span-12 md:col-span-6 lg:col-span-4">
                { isSuccessToolsWeb 
                  ? <PortfolioItem icon={iconWeb} categoryOne="Website" categoryTwo="Development" link="/portfolio/web" tools={Object.values(toolsWeb)} /> 
                  : ""
                }
              </li>
              <li className="col-span-12 md:col-start-4 md:col-span-6 lg:col-span-4">
                { isSuccessToolsLogo 
                  ? <PortfolioItem icon={iconLogo} categoryOne="Logo Design &" categoryTwo="Digital Design" link="/portfolio/design" tools={Object.values(toolsLogo)} />
                  : ""
                }
              </li>
          </ul>
        </Fade>
      </div>
    </section>
  )
}
