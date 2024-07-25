// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router-dom';

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectItem from '../components/portfolio/ProjectItem';
import ActionButton from '../components/button/ActionButton';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer/Footer';

export default function PortfolioPage() {
  window.scrollTo(0,0);

  const { category } = useParams();

  return (
   <div>
      {/* <HashLink to="/#portfolio">Kembali</HashLink>
      <br/>
      <div className="text-3xl font-bold">PORTFOLIO - {category}</div> */}
      <div className="absolute top-12 right-10">
        <ActionButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      <SecondaryNavbar text="Web Development" />
      <section id="projects" className="container text-center mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
      <Footer />
   </div>
  )
}
