import { Raleway, Paytone_One } from "next/font/google";

import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useState } from "react";
import UAFlagAnimation from "./easter-eggs/UAFlagAnimation";
import KyivAnimation from "./easter-eggs/KyivAnimation";
import DimaPopup from "./easter-eggs/DimaPopup";

const main = Raleway({ subsets: ["latin"] });
const highlighed = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const Text = styled(Typography)(({ theme }) => ({
  ...main.style,
}))

const HighlightedText = styled('span')(({ theme }) => ({
  ...highlighed.style,
  fontSize: 32,
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

export default function MainText() {
  const [uaFlagActive, setUAFlagActive] = useState(false);
  const [kyivActive, setKyivActive] = useState(false);
  const [dimaPopupActive, setDimaPopupActive] = useState(false);

  return (
    <>
      <Text variant="h4" component="h1" gutterBottom>
        Hi, I&apos;m
        &nbsp;
        <Name onClick={() => setDimaPopupActive(!dimaPopupActive)}>
          Dmytro
        </Name>
        , a DevOps Engineer from
        &nbsp;
        <City onClick={() => setKyivActive(true)}>
          Kyiv
        </City>,
        &nbsp;
        <Country onClick={() => setUAFlagActive(true)}>
          Ukraine
        </Country>.
      </Text>

      <Text variant="body1" gutterBottom>
        I work in gamedev, passionate about automation, and enjoy doing web
        developmentfor fun.
      </Text>

      <KyivAnimation active={kyivActive} setActive={setKyivActive} />
      <UAFlagAnimation active={uaFlagActive} setActive={setUAFlagActive} />
      <DimaPopup active={dimaPopupActive} setActive={setDimaPopupActive} />
    </>
  )
}
