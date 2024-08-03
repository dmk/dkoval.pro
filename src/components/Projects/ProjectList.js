import { Box, Grid } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <Box>
      <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 }} spacing={3}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Masonry>
    </Box>
  );
};

export default ProjectList;
