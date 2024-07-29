import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SecondaryButton({ link, text, icon, rounded }) {

  const faIcon = <span>&nbsp; <FontAwesomeIcon icon={icon} /></span>

  return (
    <div className="items-center justify-center inline" onClick={() => navigator.vibrate(50)}>
      <Link to={link} className={ rounded + " " + "font-display font-semibold text-lg uppercase tracking-widest backdrop-blur bg-gradient-to-b from-transparent to-white/20 border-solid border-2 border-neutral-600 hover:bg-none hover:bg-falahrafi-green/30 hover:border-falahrafi-green hover:border-solid hover:text-white hover:shadow-[0_6px_30px_0px_rgba(13,220,125,0.6)] px-7 py-4 hover:px-8 transition-all ease-in-out duration-500"}>
        {text}
        {icon ? faIcon : null}
      </Link>
    </div>
  )
}

SecondaryButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  rounded: PropTypes.string,
}

export default SecondaryButton;