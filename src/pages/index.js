import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import MainText from "@/components/MainText";
import Links from "@/components/Links";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <MainText />
      </Box>

      <Box mt={2}>
        <Links />
      </Box>
    </Container>
  );
}
