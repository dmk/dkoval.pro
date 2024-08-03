import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArrowLink from '@/components/ArrowLink';
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
        width='100%' height='100%'
        px={8}
      >
        <Container maxWidth="md">
          <Box mt={8}>
            <ProjectList projects={projects} />
          </Box>
        </Container>

        <ArrowLink href="/" text="Back to Homepage" placement='left' />
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
