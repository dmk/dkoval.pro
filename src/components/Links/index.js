import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from '@mui/icons-material/LinkedIn';

import TwiXIcon from './TwiXIcon';

const GitHubIcon = styled(GitHub)(({ theme }) => ({
  color: '#24292e'
}));

const LinkedInIcon = styled(LinkedIn)(({ theme }) => ({
  color: '#0077B5'
}));

export default function Links() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <IconButton href="https://github.com/dmk" target="_blank" aria-label="Link to Dmytro's GitHub">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://linkedin.com/in/dmk" target="_blank" aria-label="Link to Dmytro's LinkedIn">
        <LinkedInIcon />
      </IconButton>
      <TwiXIcon link="https://twitter.com/dmkov41" />
    </Box>
  )
}
