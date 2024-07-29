import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialButton({ link, icon, iconSize, addClass }) {

  iconSize = iconSize ? iconSize : "text-3xl";

  return (
    <Link to={link} target="_blank" onClick={() => navigator.vibrate(50)}>              
      <FontAwesomeIcon icon={icon} className={addClass + " " + iconSize + " " + "block text-white/70 bg-gradient-to-b from-transparent to-white/25 border-dashed border sm:border-2 border-white/30 hover:border-falahrafi-green hover:border-solid hover:bg-falahrafi-green-dark/25 hover:text-white hover:shadow-[0_6px_30px_0px_rgba(13,220,125,0.6)] active:border-falahrafi-green active:border-solid active:bg-falahrafi-green-dark/25 active:text-white transition-all ease-in-out duration-500 hover:animate-none px-3 py-2.5 align-middle"} />
    </Link>
  )
}

SocialButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  iconSize: PropTypes.string,
  addClass: PropTypes.string,
}

export default SocialButton;
