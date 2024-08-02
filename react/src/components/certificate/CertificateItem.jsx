import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function CertificateItem({name, provider, link, image}) {
  return (
    <Link to={link} target="_blank" className="group-[.swiper-slide-prev]:cursor-default group-[.swiper-slide-prev]:pointer-events-none group-[.swiper-slide-next]:cursor-default group-[.swiper-slide-next]:pointer-events-none" >
      <img 
        src={image} 
        alt={"Certificate of " + name} 
        className="mb-3 group-[.swiper-slide-active]:md:mb-16 mx-auto rounded-md border border-white" 
      />
      <h4 className="select-none group-[.swiper-slide-active]:mx-[-80px] font-display font-bold xl:text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
        {name}
      </h4>
      <h5 className={"mb-8 md:mb-0 select-none font-display font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-falahrafi-green-light via-falahrafi-green-light to-falahrafi-green-dark"}>
        {provider}
      </h5>
    </Link>
  )
}

CertificateItem.propTypes = {
  name: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default CertificateItem;