import MainButton from '../button/MainButton';
import PreviewProject from "../../assets/projects/preview-image.jpg"

import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

export default function ProjectItem() {
  return (
    <div className="col-span-1">
      <div className="relative h-[470px] p-6 bg-gradient-to-tr from-white/10 to-white/5 hover:bg-gradient-to-bl hover:from-white/20 hover:to-white/8 hover:border  border-l-neutral-700  border-b-neutral-700 border-t-neutral-500 border-r-neutral-500 text-start rounded-lg">
        <img src={PreviewProject} className="h-[280px] w-full object-cover object-top rounded-lg" alt=""/>
        <h3 className="uppercase my-6 font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900">
          Galseid Website
        </h3>
        <div className="absolute inset-x-0 bottom-0 m-6 transition-all duration-500 ease-in-out">
          <MainButton link="/project/1" text="View Project" icon={faFolderOpen} rounded="rounded-xl" />
        </div>
      </div>
    </div>
  )
}
