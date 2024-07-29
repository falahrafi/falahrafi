import PropTypes from "prop-types";

function Footer({className}) {
  return (
    <section id="footer" className={ className + " container text-center mx-auto mt-40"}>
      <div className="cv-line bg-falahrafi-green w-full h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
      <div className="mt-5 mb-6 font-display font-medium text-lg">
        &copy; 2024 <span className="hover:text-falahrafi-green">Muhammad Falah Abdurrafi</span>
      </div>
    </section>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer;