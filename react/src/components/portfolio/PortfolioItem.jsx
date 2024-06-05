import PropTypes from 'prop-types';
import MainButton from "../button/MainButton"

export default function PortfolioItem({icon, categoryOne, categoryTwo, skills, link}) {
  return (
    <div className="relative h-[500px] px-8 bg-gradient-to-tr from-white/10 to-white/4 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border  border-l-white/5  border-b-white/5 border-t-white/20 border-r-white/20 text-start rounded-lg">
      <img src={icon} alt="Icon UI/UX Design" className="inline-block w-36 mt-[-64px] mb-2 ms-[-32px]" />
      <h3 className="uppercase font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900">
        {categoryOne} <br/> {categoryTwo}
      </h3>
      <div className="grid grid-cols-6 mt-6 gap-3">
        {
          skills.map((skill) => {
            return (
              <div className="col-span-1 flex bg-black/30 rounded-xl h-12 w-12" key={skill}>
                <img src={skill} alt="" className="m-auto h-6" />
              </div>
            )
          })
        }
      </div>
      <div className="absolute inset-x-0 bottom-0 mb-8 mx-8 hover:mx-6 transition-all duration-500 ease-in-out">
        <MainButton link={link} text="Open" rounded="rounded-xl" />
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  icon: PropTypes.string.isRequired,
  categoryOne: PropTypes.string.isRequired,
  categoryTwo: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
}
