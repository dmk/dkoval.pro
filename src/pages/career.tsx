import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const CareerDisplay = dynamic(() => (import("@/components/Career/CareerDisplay").then(cmp => cmp)), { ssr: false })

export default function Career() {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Career</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <div className="w-full h-full md:h-[calc(100vh-theme(height.16))] mt-4 px-2">
        <h4 className="text-2xl font-bold text-center my-6">Career</h4>


        <div className="flex items-top justify-center">
          <p className="text-lg text-gray-700 font-semibold">
            The data in this section is still being updated.
          </p>
        </div>

        <div className="flex-grow flex justify-center items-start overflow-hidden
                        px-4 pb-8 w-full h-full md:h-[calc(100dvh-theme(height.16))]">
          <CareerDisplay />
        </div>
      </div>
    </>
  );
}