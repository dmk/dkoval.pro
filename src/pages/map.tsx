import Head from 'next/head';
import React from 'react';

import { ParentSize } from '@visx/responsive';
import UAMap, { OblastCode } from '@dkkoval/react-ua-map';

import populationJson from '@/assets/opendata/population.json'

interface MapData {
  title: string;
  valueName: string;
  data: Record<OblastCode, number>; // TODO: have type with defined regions
}

export default function Map() {
  const populationData = populationJson as MapData;

  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Maps</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <div className="w-full mt-4 px-2">
        <h4 className="text-2xl font-bold text-center my-6">Maps</h4>

        <div className="flex md:hidden items-top justify-center mt-14 px-4">
          <p className="text-lg text-gray-700 font-semibold">
            Please switch to a larger screen to view this content.
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-5xl h-[calc(100vh-theme(height.32))] hidden md:flex">
            <ParentSize>
              {({ height, width }) => (
                <UAMap
                  {...{height, width}}
                  data={populationData.data}
                  title={populationData.title}
                  valueName={populationData.valueName}
                />
              )}
            </ParentSize>
          </div>
        </div>
      </div>
    </>
  );
}