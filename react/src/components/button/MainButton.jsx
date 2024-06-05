import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainButton({ link, text, icon, rounded }) {

  const faIcon = <span>&nbsp; <FontAwesomeIcon icon={icon} className="text-falahrafi-green-light" beatFade /></span>
  const textCenter = icon ? '' : ' text-center';

  return (
    <div className="items-center justify-center">
      <div className={ rounded + " " + "h-full w-full bg-gradient-to-r from-falahrafi-green-dark to-falahrafi-green-light shadow-[0_6px_40px_0px_rgba(13,220,125,0.3)] hover:shadow-[0_6px_60px_0px_rgba(13,220,125,0.7)] px-1 py-1 transition-all ease-in-out duration-500"}>
        <Link to={link} className={ rounded + " " + "block bg-black/75 hover:bg-black/45 font-display font-bold text-lg uppercase tracking-wider px-7 py-3 hover:px-8 transition-all ease-in-out duration-500" + textCenter}>
          {text}
          {icon ? faIcon : null}
        </Link>
      </div>
    </div>
  )
}

MainButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  rounded: PropTypes.string
}

export default MainButton;
