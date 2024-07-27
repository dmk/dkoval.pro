import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';

import Twitter from '@mui/icons-material/Twitter';
import X from '@mui/icons-material/X';

import { styled } from '@mui/system';

const TwitterIcon = styled(Twitter)(({ theme }) => ({
  color: '#1da1f2'
}));

const XIcon = styled(X)(({ theme }) => ({
  color: '#1a1a1a'
}));

export default function TwiXIcon({ link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <IconButton
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <XIcon /> : <TwitterIcon />}
    </IconButton>
  );
}
