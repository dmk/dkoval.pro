import Head from 'next/head';

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

      <div className="w-full mt-4 px-2">
        <h4 className="text-2xl font-bold text-center my-6">Random Stuff</h4>

        <div className="w-full flex justify-center items-center">
          <div className="max-w-screen-lg">
            yooo
          </div>
        </div>
      </div>
    </>
  );
}