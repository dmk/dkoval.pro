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
  filter: 'blur(32px)',
  width: '100%',
  height: '100%',
  zIndex: -1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const UkrainianFlagSvg = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 2 1">
    <rect width="2" height="1" fill="#ffb000" />
    <rect width="2" height="0.5" fill="#3d85c6" />
  </svg>
);

const UAFlagAnimation = ({active, setActive}) => {
  const { width, height } = useWindowSize();

  return (
    <FullScreenContainer>
      <BlurContainer
        style={{
          scale: 1.5, opacity: .0
        }}
        variants={{
          inactive: { scale: .8, opacity: .0 },
          active: { scale: 1.5, opacity: .5 },
        }}
        animate={active ? 'active' : 'inactive'}
        transition={{ duration: .7, ease: 'easeInOut' }}
        onAnimationComplete={() => {
          setActive(false);
        }}
      >
        <UkrainianFlagSvg width={width} height={height} />
      </BlurContainer>
    </FullScreenContainer>
  );
};

export default UAFlagAnimation;