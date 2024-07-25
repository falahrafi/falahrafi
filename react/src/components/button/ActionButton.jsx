// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ActionButton({ link, icon, shortcutKey }) {
  return (
    <div className="items-center justify-center inline">
      <HashLink to={link} className="font-display font-bold text-lg bg-gradient-to-b from-transparent to-white/25 border-solid border-2 border-neutral-600 hover:to-white/15 hover:border-neutral-700 hover:border-solid hover:text-white p-5 transition-all ease-in-out duration-500 rounded-full">
        <FontAwesomeIcon icon={icon} className="text-3xl align-middle" />
      </HashLink>
      <div className="mt-6 uppercase text-center text-xs font-display font-bold tracking-[.3em]">{shortcutKey}</div>
    </div>
  )
}

ActionButton.propTypes = {
  link: PropTypes.string.isRequired,
  shortcutKey: PropTypes.string,
  icon: PropTypes.object.isRequired,
}