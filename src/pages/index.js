import { Raleway, Itim } from "next/font/google";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import X from '@mui/icons-material/X';

const raleway = Raleway({ subsets: ["latin"] });
const handwriten = Itim({ subsets: ["latin"], weight: ["400"] });

const Text = styled(Typography)(({theme}) => ({
  ...raleway.style,
}))

const Name = styled('span')(({ theme }) => ({
  color: '#6aa84f',
  ...handwriten.style,
}));

const City = styled('span')(({ theme }) => ({
  color: '#3d85c6',
  ...handwriten.style,
}));

const Country = styled('span')(({ theme }) => ({
  color: '#ffd966',
  ...handwriten.style,
}));

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 12 }}>
        <Text variant="h4" component="h1" gutterBottom>
          Hi, I&apos;m <Name>Dima</Name>, a DevOps Engineer from <City>Kyiv</City>, <Country>Ukraine</Country>.
        </Text>
        <Text variant="body1" gutterBottom>
          I work in gamedev, passionate about automation, and enjoy doing web development for fun.
        </Text>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://github.com/dmk" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/dmk" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://twitter.com/dmkov41" target="_blank">
            <Twitter />
          </IconButton>
        </Box>
    </Container>
  );
}
