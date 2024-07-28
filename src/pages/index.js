import { lazy, Suspense } from 'react';

import Head from 'next/head';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';

import { MainTextRaw } from "@/components/MainText";

const MainText = lazy(() => import("@/components/MainText"));
const Links = lazy(() => import("@/components/Links"));
const RubyPopupContainer = lazy(() => import('@/components/easter-eggs/RubyPopup'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <Container maxWidth="sm">
        <Suspense fallback={<MainTextRaw />}>
          <Box mt={12}>
            <MainText />
          </Box>

          <Box mt={2}>
            <Links />
          </Box>
        </Suspense>
      </Container>

      <Suspense fallback={<LinearProgress />}>
        <RubyPopupContainer />
      </Suspense>
    </>
  );
}
