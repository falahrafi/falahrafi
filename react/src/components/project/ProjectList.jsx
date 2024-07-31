import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem";

function ProjectList({data}) {
  return (
    <section id="projects" className="container text-center mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {data?.map(project => (
          <ProjectItem 
            key={project.id} 
            id={project.id} 
            name={project.name} 
            image={project.image} 
          />
        ))}
      </div>
    </section>
  )
}

ProjectList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectList;