import PropTypes from 'prop-types';

export default function SectionHeader({header, subheader}) {
  return (
    <div>
      <h4 className="font-header font-light text-base uppercase tracking-[.2em] mb-1">
        {subheader}
      </h4>
        <h2 className="w-fit font-header font-bold text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 mx-auto">
          {header}
        </h2>
    </div>
  )
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
}
