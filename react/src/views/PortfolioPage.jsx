import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from 'react-query';
import { fetchProjectByCategory } from "../scripts/fetchers/projects";

import SecondaryNavbar from '../components/navbar/SecondaryNavbar';
import ProjectList from '../components/project/ProjectList';
import ActionButton from '../components/button/ActionButton';

import wavyPattern from '../assets/wavy-pattern-fade.png'

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer/Footer';

export default function PortfolioPage() {
  window.scrollTo(0,0);
  const navigate = useNavigate();

  // Get 'categoryId'
  const { category } = useParams();
  let categoryId, categoryName;
  if (category === 'uiux') {
    categoryId = '1';
    categoryName = 'UI / UX Design';
  }
  else if (category === 'web') {
    categoryId = '2';
    categoryName = 'Website Development';
  }
  else {
    categoryId = '3';
    categoryName = 'Logo & Digital Design';
  }

  // FETCH API INITIALIZATION
  const { isSuccess, data: projects} = useQuery(['projects', categoryId], fetchProjectByCategory);

  // Back to Previous Page if 'Esc' Clicked
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' || event.key === 'Backspace' ) navigate(-1);
    };
    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [navigate]);

  return (
    <div id="portfolioPage" className="relative min-h-screen px-6 sm:px-16 md:px-28" style={{backgroundImage: 'url(' + wavyPattern + ')'}}>

      <div className="hidden sm:block absolute top-12 right-10">
        <ActionButton link="/#portfolio" icon={faXmark} shortcutKey="Esc" />
      </div>
      
      {/* CLOSE BUTTON on MOBILE */}
      <div className="sm:hidden mt-8 -mb-8 text-end">
        <ActionButton link="/#portfolio" icon={faXmark} />
      </div>

      <SecondaryNavbar text={categoryName} />

      <div className="min-h-screen">
      { isSuccess ? <ProjectList data={Object.values(projects)} /> : "" }
      </div>

      <Footer />
    </div>
  )
}