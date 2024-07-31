import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainButton({ link, text, textSize, icon, iconColor, margin, padding, rounded, width }) {

  const faIcon = <span><FontAwesomeIcon icon={icon} className={iconColor ? iconColor : "text-falahrafi-green-light"} beatFade /></span>

  // Additional styles
  width = width + " ";
  rounded = rounded + " ";
  margin = margin + " ";
  padding = (padding ? padding : "px-7 py-3 hover:px-8") + " ";
  textSize = (textSize ? textSize : "text-lg") + " ";

  return (
    <div className={ width + margin + "inline-block items-center justify-center"} onClick={() => navigator.vibrate(50)}>
      <div className={ width + rounded + " " + "inline-block px-[3px] py-[3px] bg-gradient-to-l from-falahrafi-green-dark to-falahrafi-green-light shadow-[0_6px_40px_0px_rgba(13,220,125,0.3)] hover:shadow-[0_6px_60px_0px_rgba(13,220,125,0.7)] transition-all ease-in-out duration-300"}>
        <Link 
          to={link} 
          className={ 
            rounded
            + padding 
            + textSize
            + "block tracking-widest text-center bg-black/65 hover:bg-black/45 font-display font-bold uppercase transition-all ease-in-out duration-500"
        }>
          {text}
          {text && icon ? <span>&nbsp; </span> : null}
          {icon ? faIcon : null}
        </Link>
      </div>
    </div>
  )
}

MainButton.defaultProps = {
  width: "w-full"
}

MainButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  textSize: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.object,
  iconColor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  rounded: PropTypes.string,
}

export default MainButton;
