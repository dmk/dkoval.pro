import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import useWindowSize from '@/hooks/useWindowSize';

const FullScreenContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  zIndex: -2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const BlurContainer = styled(motion.div)({
  filter: 'blur(8px)',
  width: '100%',
  height: '100%',
  zIndex: -1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const imageConfigs = [
  {
    src: '/images/kyiv/kyiv-1.avif',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
  {
    src: '/images/kyiv/kyiv-2.avif',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
  {
    src: '/images/kyiv/kyiv-3.avif',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
  {
    src: '/images/kyiv/kyiv-4.avif',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
];

export default function KyivAnimation({ active, setActive }) {
  const [currentImage, setCurrentImage] = useState(imageConfigs[0]);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!active) {
      const randomIndex = Math.floor(Math.random() * imageConfigs.length);
      setTimeout(() => {
        setCurrentImage(imageConfigs[randomIndex]);
      }, 500);
    }
  }, [active]);

  return (
    <FullScreenContainer>
      <BlurContainer
        style={currentImage.inactive}
        variants={{
          inactive: currentImage.inactive,
          active: currentImage.active,
        }}
        animate={active ? 'active' : 'inactive'}
        transition={{ duration: .5, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          setActive(false);
        }}
      >
        <img
          src={currentImage.src}
          style={{
            width, height,
            objectFit: 'cover'
          }}
        />
      </BlurContainer>
    </FullScreenContainer>
  );
};
