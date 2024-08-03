import { Card, CardContent, Typography, CardActions, Button, Chip, Grid, Stack } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Stack spacing={.5}>
          <Typography variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stars: {project.stargazers_count} | Forks: {project.forks_count}
          </Typography>

          <Grid container spacing={.5}>
            {Object.keys(project.languages).map((language) => (
              <Grid key={language} item>
                <Chip label={language} size='small' variant='filled' />
              </Grid>
            ))}
          </Grid>
        </Stack>
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