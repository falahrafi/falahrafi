import API_CONFIG from "../../scripts/globals/api-config";
import PropTypes from 'prop-types';

import MainButton from '../button/MainButton';

import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function ProjectItem({id, name, image}) {
  return (
    <div className="col-span-2 lg:col-span-1">
      <div className="relative h-[370px] min-[460px]:h-[410px] sm:h-[450px] md:h-[490px] lg:h-[380px] xl:h-[430px] 2xl:h-[520px] p-4 backdrop-blur-sm bg-gradient-to-tr from-white/10 to-white/5 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border  border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
        <img
          src={ API_CONFIG.IMAGES_URL + "placeholders/project-images-blur.webp"} 
          data-src={image} 
          data-sizes="auto"
          className="lazyload h-[210px] min-[490px]:h-[250px] sm:h-[290px] md:h-[330px] lg:h-[220px] xl:h-[270px] 2xl:h-[360px] w-full object-cover object-center rounded-md"
        />
        
        {/* <img src={image} className="h-[210px] min-[490px]:h-[250px] sm:h-[290px] md:h-[330px] lg:h-[220px] xl:h-[270px] 2xl:h-[360px] w-full object-cover object-top rounded-md" alt=""/> */}
        <h3 className="my-5 mx-3 font-display font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-900">
          {name}
        </h3>
        <div className="absolute inset-x-0 bottom-0 m-5 transition-all duration-500 ease-in-out">
          <MainButton link={"/project/" + id} text="View Project" icon={faFolderOpen} rounded="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProjectItem;