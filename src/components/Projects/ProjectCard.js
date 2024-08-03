import { Card, CardContent, Typography, CardActions, Button, Chip, Grid } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stars: {project.stargazers_count} | Forks: {project.forks_count}
        </Typography>
        <Grid rowSpacing={2} columnSpacing={2}>
          {Object.keys(project.languages).map((language) => (
            <Chip key={language} label={language} variant="outlined" />
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;