import PropTypes from 'prop-types';

export default function ProjectSectionHeader({header}) {
  return (
    <div className="flex mt-20 mb-5">
      <div className="flex-1 pt-2 pe-6">
        <div className="cv-line bg-falahrafi-green w-full h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
      </div>
      <div className="flex-none">
        <h2 className="w-fit font-header font-bold text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-500 mx-auto">
          {header}
        </h2>
      </div>
      <div className="flex-1 pt-2 ps-6">
        <div className="cv-line bg-falahrafi-green w-full h-[1.5px] shadow-[0_0px_16px_0px_rgba(13,220,125,0.7)] inline-block align-middle"></div>
      </div>
    </div>
  )
}

ProjectSectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
}