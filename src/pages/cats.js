import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PhotoGallery from '@/components/CatGallery/PhotoGallery';

export default function Cats() {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Cat Gallery</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <Box
        display='flex'
        justifyContent='center' alignItems='center'
        pb={8} px={8}
      >
        <Container maxWidth="lg">
          <Box pt={4}>
            <PhotoGallery />
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
