import PropTypes from 'prop-types';

function CertificateItem({name, provider, image}) {
  return (
    <>
      <img src={image} alt="Certificate" className="mb-3 group-[.swiper-slide-active]:md:mb-16 mx-auto select-none" />
      <h4 className="select-none group-[.swiper-slide-active]:mx-[-80px] font-display font-bold xl:text-xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
        {name}
      </h4>
      <h5 className={"mb-8 md:mb-0 select-none font-display font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-falahrafi-green-light via-falahrafi-green-light to-falahrafi-green-dark"}>
        {provider}
      </h5>
    </>
  )
}

CertificateItem.propTypes = {
  name: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default CertificateItem;