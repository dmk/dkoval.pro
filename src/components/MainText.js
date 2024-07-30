import { Suspense, lazy, useState } from "react";

import { Raleway, Paytone_One } from "next/font/google";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const UAFlagAnimation = lazy(() => import("./easter-eggs/UAFlagAnimation"));
const KyivAnimation = lazy(() => import("./easter-eggs/KyivAnimation"));
const DimaPopup = lazy(() => import("./easter-eggs/DimaPopup"));

const main = Raleway({ subsets: ["latin"] });
const highlighed = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Text = styled(Typography)(({ theme }) => ({
  ...main.style,
}));

const HighlightedText = styled('span')(({ theme }) => ({
  ...highlighed.style,
  fontSize: 32,
  cursor: 'pointer',
}));

const Name = styled(HighlightedText)(({ theme }) => ({
  color: '#6aa84f',
}));

const City = styled(HighlightedText)(({ theme }) => ({
  color: '#3d85c6',
}));

const Country = styled(HighlightedText)(({ theme }) => ({
  color: '#ffb000',
}));

export function MainTextRaw() {
  return (
    <>
      <h4>
        Hi, I&apos;m Dmytro, a DevOps Engineer from&nbsp; Kyiv, Ukraine.
      </h4>

      <p>
        I work in gamedev, passionate about automation, and enjoy doing web
        developmentfor fun.
      </p>
    </>
  )
}

export default function MainText() {
  const [uaFlagActive, setUAFlagActive] = useState(false);
  const [kyivActive, setKyivActive] = useState(false);
  const [dimaPopupActive, setDimaPopupActive] = useState(false);

  return (
    <>
      <Text variant="h4" component="h1" gutterBottom>
        Hi, I&apos;m&nbsp;
        <Name onClick={() => setDimaPopupActive(!dimaPopupActive)}>
          Dmytro
        </Name>
        , a DevOps Engineer from&nbsp;
        <City onClick={() => setKyivActive(true)}>
          Kyiv
        </City>,&nbsp;
        <Country onClick={() => setUAFlagActive(true)}>
          Ukraine
        </Country>.
      </Text>

      <Text variant="body1" gutterBottom>
        I work in gamedev, passionate about automation, and enjoy doing web
        developmentfor fun.
      </Text>

      <Suspense fallback={<LinearProgress />}>
        <KyivAnimation active={kyivActive} setActive={setKyivActive} />
        <UAFlagAnimation active={uaFlagActive} setActive={setUAFlagActive} />
        <DimaPopup active={dimaPopupActive} setActive={setDimaPopupActive} />
      </Suspense>
    </>
  )
}

export { Text };
