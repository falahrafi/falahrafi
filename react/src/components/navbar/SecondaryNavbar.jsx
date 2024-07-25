import PropTypes from 'prop-types';
import SectionHeader from "../header/SectionHeader";

import falahrafiLogo from '../../assets/falahrafi-logo-design-light-icon.svg';
import falahrafiText from '../../assets/falahrafi-logo-design-light-text.svg';

export default function SecondaryNavbar({text}) {
  return (
    <section id="header" className="container text-center mx-auto mb-14">
      <div className="mt-7">
        <img src={falahrafiLogo} className="inline mr-4 h-6 sm:h-12" alt="Falahrafi Logo" />
        <img src={falahrafiText} className="inline h-4 sm:h-5" alt="Falahrafi Text" />
      </div>
      <div className="mt-3">
        <SectionHeader header={text} />
      </div>
    </section>
  )
}

SecondaryNavbar.propTypes = {
  text: PropTypes.string.isRequired
}
