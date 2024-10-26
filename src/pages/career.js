import dynamic from 'next/dynamic';
import Head from 'next/head';

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

      <div className="w-full h-[calc(100vh-theme(height.16))] mt-4 px-2">
        <h4 className="text-2xl font-bold text-center my-6">Career</h4>

        <div className="
          flex-grow flex justify-center items-center 
          px-4 py-8 w-full h-[calc(100%-theme(height.16))]
        ">
          <CareerDisplay />
        </div>
      </div>
    </>
  );
}