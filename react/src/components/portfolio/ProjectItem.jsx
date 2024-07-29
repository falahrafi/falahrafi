import MainButton from '../button/MainButton';
import PreviewProject from "../../assets/projects/preview-image.jpg"

import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

export default function ProjectItem() {
  return (
    <div className="col-span-2 lg:col-span-1">
      <div className="relative h-[400px] min-[490px]:h-[440px] sm:h-[480px] md:h-[500px] lg:h-[390px] xl:h-[440px] 2xl:h-[530px] p-6 backdrop-blur-sm bg-gradient-to-tr from-white/10 to-white/5 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border  border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
        <img src={PreviewProject} className="h-[210px] min-[490px]:h-[250px] sm:h-[290px] md:h-[310px] lg:h-[200px] xl:h-[250px] 2xl:h-[340px] w-full object-cover object-top rounded-lg" alt=""/>
        <h3 className="uppercase my-6 font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-900">
          Galseid Website
        </h3>
        <div className="absolute inset-x-0 bottom-0 m-6 transition-all duration-500 ease-in-out">
          <MainButton link="/project/1" text="View Project" icon={faFolderOpen} rounded="rounded-lg" />
        </div>
      </div>
    </div>
  )
}
