import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Text } from '@/components/MainText';

export default function Career() {
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
      >
        <Container maxWidth="sm">
          <Box mt={12}>
            <Text variant='h4'>The Career page is in development...</Text>
            <Text variant='body1'>Check it out later!</Text>
          </Box>
        </Container>
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
