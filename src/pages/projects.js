import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProjectList from '@/components/Projects/ProjectList';
import { fetchGitHubData } from '@/utils/github';

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Projects</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <Box
        display='flex'
        justifyContent='center' alignItems='center'
        pb={8}
      >
        <Container maxWidth="lg">
          <Box pt={4}>
            <ProjectList projects={projects} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const username = 'dmk';
  const repoNames = [
    'fastsheet',
    'temp-alert',
    'jenkins-testbed',
    'dkoval.pro',
    'fastai-course-notebooks',
  ];

  const projects = await fetchGitHubData(username, repoNames);

  return {
    props: {
      projects,
      transitionDirection: 'right'
    },
  };
};
