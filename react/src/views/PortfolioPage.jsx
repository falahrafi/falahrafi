import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectItem from '../components/portfolio/ProjectItem';
import ActionButton from '../components/button/ActionButton';

import wavyPattern from '../assets/wavy-pattern-fade.png'

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer/Footer';

export default function PortfolioPage() {
  window.scrollTo(0,0);

  const { category } = useParams();
  const navigate = useNavigate();

  // Back to Previous Page if 'Esc' Clicked
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace' ) {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [navigate]);

  return (
   <div id="portfolioPage" className="px-6 sm:px-16 md:px-28" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>

      <div className="hidden sm:block absolute top-12 right-10">
        <ActionButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      
      {/* CLOSE BUTTON on MOBILE */}
      <div className="sm:hidden mt-8 -mb-8 text-end">
        <ActionButton link="/#portfolio" icon={faXmark} />
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