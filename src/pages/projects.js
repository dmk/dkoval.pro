import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

import ProjectList from '@/components/Projects/ProjectList';
import { Text } from '@/components/MainText';

import { fetchGitHubData } from '@/utils/github';

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
        sx={{
          width: '100%',
          mt: 4,
          px: 2,
        }}
      >
        <Text variant='h4' align='center' fontWeight={600} gutterBottom>
          My Open-source Projects
        </Text>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ProjectList projects={projects} />
        </Box>
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
