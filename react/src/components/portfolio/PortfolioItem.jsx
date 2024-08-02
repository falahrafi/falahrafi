import API_CONFIG from "../../scripts/globals/api-config";
import PropTypes from 'prop-types';
import MainButton from "../button/MainButton"

export default function PortfolioItem({icon, categoryOne, categoryTwo, tools, link}) {
  return (
    <div className="relative h-fit md:h-[500px] px-8 pb-40 md:pb-0 bg-gradient-to-tr from-white/10 to-white/5 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border border-l-neutral-800  border-b-neutral-800 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
      <img src={icon} alt="Icon UI/UX Design" className="inline-block w-36 mt-[-50px] md:mt-[-64px] mb-2 ms-[-32px]" />
      <h3 className="uppercase font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900">
        {categoryOne} <br/> {categoryTwo}
      </h3>
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 mt-6 gap-3">
        {
          tools?.map((tool) => {
            return (
              <div className="col-span-1 flex bg-black/30 rounded-xl h-12 w-12" key={tool.id}>
                <img src={ API_CONFIG.IMAGES_URL + "icons/" + tool.logo}  alt="" className="m-auto h-6" />
              </div>
            )
          })
        }
      </div>
      <div className="absolute inset-x-0 bottom-0 mb-8 mx-8 hover:mx-6 transition-all duration-500 ease-in-out">
        <MainButton link={link} text="Open" rounded="rounded-lg" />
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  icon: PropTypes.string.isRequired,
  categoryOne: PropTypes.string.isRequired,
  categoryTwo: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
}
