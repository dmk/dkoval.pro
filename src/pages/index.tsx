import Head from 'next/head';
import React from 'react';

import MainText from '@/components/MainText';
import Links from '@/components/Links';

// TODO: this is for the future.
// import { MainTextRaw } from "@/components/MainText";
// const MainText = lazy(() => import("@/components/MainText"));
// const Links = lazy(() => import("@/components/Links"));
// const RubyPopupContainer = lazy(() => import('@/components/easter-eggs/RubyPopup'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
      based in Kyiv, Ukraine. I work in game development, am passionate about automation,
      and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <div className="w-full h-full">
        <div className="max-w-lg mx-auto mt-16 md:mt-32">
          <MainText />
        </div>

        <div className="mt-4">
          <Links />
        </div>
      </div>
    </>
  );
}
