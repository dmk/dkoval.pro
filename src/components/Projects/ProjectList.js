import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div className="px-6">
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="break-inside-avoid">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
