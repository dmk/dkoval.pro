import { Raleway, Paytone_One } from "next/font/google";

import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useState } from "react";
import UAFlagAnimation from "./easter-eggs/UAFlagAnimation";

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

  return (
    <>
      <Text variant="h4" component="h1" gutterBottom>
        Hi, I&apos;m <Name>Dmytro</Name>, a DevOps Engineer from <City>Kyiv</City>,&nbsp;
        <Country onClick={() => setUAFlagActive(true)}>Ukraine</Country>.
      </Text>

      <Text variant="body1" gutterBottom>
        I work in gamedev, passionate about automation, and enjoy doing web
        developmentfor fun.
      </Text>

      <UAFlagAnimation active={uaFlagActive} setActive={setUAFlagActive}/>
    </>
  )
}
