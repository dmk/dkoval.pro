import { Raleway, Paytone_One } from "next/font/google";

const main = Raleway({ subsets: ["latin"] });
const highlighted = Paytone_One({ subsets: ["latin"], weight: ["400"] });

export function MainTextRaw() {
  return (
    <>
      <h4 className="text-2xl font-semibold">
        Hi, I&apos;m Dmytro, a DevOps Engineer from Kyiv, Ukraine.
      </h4>

      <p className="mt-4 text-lg">
        I work in gamedev, passionate about automation, and enjoy doing web development for fun.
      </p>
    </>
  );
}

export default function MainText() {
  return (
    <>
      <h1 className={`${main.className} text-[1.9rem] text-slate-800 font-semibold mb-4`}>
        Hi, I&apos;m&nbsp;
        <span className={`${highlighted.className} text-green-600 text-[2rem]`}>Dmytro</span>, a DevOps Engineer from&nbsp;
        <span className={`${highlighted.className} text-sky-600 text-[2rem]`}>Kyiv</span>,&nbsp;
        <span className={`${highlighted.className} text-yellow-400 text-[2rem]`}>Ukraine</span>.
      </h1>

      <p className={`${main.className} text-lg mb-4`}>
        I work in gamedev, passionate about automation, and enjoy doing web development for fun.
      </p>
    </>
  );
}
