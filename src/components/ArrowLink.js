import { motion } from 'framer-motion';
import { Stack } from '@mui/system';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from 'next/link';

const arrowVariants = {
  initial: { scaleY: 1 },
  hover: { scaleY: 0.8 },
};

const getFlexDirection = (placement) => {
  switch (placement) {
    case 'top':
      return 'column';
    case 'bottom':
      return 'column-reverse';
    case 'left':
      return 'row';
    case 'right':
      return 'row-reverse';
  }
};

const getTransform = (placement) => {
  switch (placement) {
    case 'top':
      return 'rotate(-90deg)';
    case 'bottom':
      return 'rotate(90deg)';
    case 'left':
      return 'rotate(180deg)';
    case 'right':
      return 'rotate(0deg)';
  }
};

const getLabelStyle = (placement) => {
  switch (placement) {
    case 'top':
    case 'bottom':
      return {
        transform: 'rotate(0deg)',
        margin: '-5px 0',
      };
    case 'left':
      return {
        writingMode: 'tb',
        margin: '0 -5px',
      };
    case 'right':
      return {
        writingMode: 'tb',
        transform: 'rotate(180deg)',
        margin: '0 -5px',
      };
  }
};

const getPositionStyles = (placement) => {
  switch (placement) {
    case 'top':
      return { top: '10px', left: '50%', transform: 'translateX(-50%)' };
    case 'bottom':
      return { bottom: '10px', left: '50%', transform: 'translateX(-50%)' };
    case 'left':
      return { left: '10px', top: '50%', transform: 'translateY(-50%)' };
    case 'right':
      return { right: '10px', top: '50%', transform: 'translateY(-50%)' };
  }
};

const ArrowLink = ({ text, placement, href }) => {
  return (
    <Stack
      direction={getFlexDirection(placement)}
      as='a'
      href={href}
      justifyContent="center"
      alignItems="center"
      spacing={.1}
      sx={{
        textDecoration: 'none',
        position: 'absolute',
        ...getPositionStyles(placement),
      }}
    >
      <motion.span
        initial="initial"
        whileHover="hover"
        variants={arrowVariants}
        style={{
          display: 'inline-block',
          height: 40, width: 40,
        }}
      >
        <ArrowForwardIosRoundedIcon sx={{ fontSize: 40, color: 'gray', transform: getTransform(placement) }} />
      </motion.span>
      <span
        style={{
          color: 'gray',
          fontSize: '14px',
          textTransform: 'upcase',
          ...getLabelStyle(placement),
        }}
      >{text}</span>
    </Stack>
  );
};

export default ArrowLink;
