import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Text } from '@/components/MainText';
import ArrowLink from '@/components/ArrowLink';

export default function Projects() {
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
        display='flex'
        justifyContent='center' alignItems='center'
      >
        <Container maxWidth="sm">
          <Box mt={-28}>
            <Text variant='h4'>The Projects is in development...</Text>
            <Text variant='body1'>Check it out later!</Text>
          </Box>
        </Container>

        <ArrowLink href="/" text="Back to Homepage" placement='left' />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      transitionDirection: 'right'
    },
  };
};
