import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'right' ? -200 : direction === 'left' ? 200 : 0,
    y: direction === 'down' ? -200 : direction === 'up' ? 200 : 0,
  }),
  enter: { opacity: 1, x: 0, y: 0 },
  exit: (direction) => ({
    opacity: 0,
    x: direction === 'right' ? 200 : direction === 'left' ? -200 : 0,
    y: direction === 'down' ? 200 : direction === 'up' ? -200 : 0,
  }),
};

const PageTransition = ({ children, direction }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        custom={direction}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        style={{ position: 'absolute', width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
