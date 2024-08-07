import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useMediaQuery } from '@mui/material';

import PhotoGallery from '@/components/CatGallery/PhotoGallery';
import { Text } from '@/components/MainText';

export default function Cats() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Cat Gallery</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 4,
        }}
      >
        <Text variant='h4' align='center' fontWeight={600} gutterBottom>
          My Cats
        </Text>
        <PhotoGallery />
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
