import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArrowLink from '@/components/ArrowLink';
import ProjectList from '@/components/Projects/ProjectList';
import { fetchGitHubData } from '@/utils/github';
import { useMediaQuery } from '@mui/material';

export default function Projects({ projects }) {
  const isMobile = useMediaQuery('(max-width:600px)');

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

        {!isMobile && <ArrowLink href="/" text="Home" placement='left' />}
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
