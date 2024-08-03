import { Box, Grid } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }} spacing={2}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Masonry>
  );
};

export default ProjectList;
