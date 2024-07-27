import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

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
    src: '/images/kyiv/kyiv-1.jpg',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
  // {
  //   src: '/images/kyiv/kyiv-2.jpg',
  //   active: { scale: 1.2, opacity: 0.4 },
  //   inactive: { scale: 1.1, opacity: 0 },
  // },
  {
    src: '/images/kyiv/kyiv-3.jpg',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
  {
    src: '/images/kyiv/kyiv-4.jpg',
    active: { scale: 1.2, opacity: 0.4 },
    inactive: { scale: 1.1, opacity: 0 },
  },
];

function KyivAnimation({ active, setActive }) {
  const [currentImage, setCurrentImage] = useState(imageConfigs[0]);

  useEffect(() => {
    if (active) {
      const randomIndex = Math.floor(Math.random() * imageConfigs.length);
      setTimeout(() => {
        setCurrentImage(imageConfigs[randomIndex]);
      }, 1000);
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
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          setActive(false);
        }}
      >
        <img src={currentImage.src} style={{ width: '100%', height: 'auto' }} />
      </BlurContainer>
    </FullScreenContainer>
  );
};

export default KyivAnimation;