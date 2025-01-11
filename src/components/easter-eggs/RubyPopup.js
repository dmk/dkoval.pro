import { motion } from 'motion/react';
import Box from '@mui/material/Box';
import RubySvg from '@/assets/ruby.svg';
import { useState } from 'react';
import { styled } from '@mui/system';

const hoverZoneBackgroundColor =
  process.env.NODE_ENV == 'production' ? 'transparent' : 'rgba(0, 0, 0, 0.1)';

const HoverZone = styled('div')({
  position: 'fixed',
  right: 0,
  top: 30,
  bottom: 0,
  width: '30px',
  height: '150px',
  cursor: 'pointer',
  backgroundColor: hoverZoneBackgroundColor,
  zIndex: 1000,
  '&:hover + div': {
    transform: 'translateX(0)',
  },
});

export function RubyPopup({ active, setActive }) {
  return (
    <Box>
      <motion.div
        variants={{
          inactive: { scale: 1, rotate: 0, x: 0, display: 'none' },
          active: { scale: 1.2, rotate: -30, x: -196, display: 'inline-block' },
        }}
        animate={active ? 'active' : 'inactive'}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        style={{ display: 'none', cursor: 'pointer' }}
      >
        <RubySvg height={196} width={196} onClick={() => setActive(false)} />
      </motion.div>
    </Box>
  )
}

export default function RubyPopupContainer() {
  const [active, setActive] = useState(false);

  return (
    <>
      <HoverZone onClick={() => setActive(!active)} />

      <Box position='fixed' top={30} right={-196}>
        <RubyPopup active={active} setActive={setActive} />
      </Box>
    </>
  )
}

