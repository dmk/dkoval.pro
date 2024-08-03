import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;