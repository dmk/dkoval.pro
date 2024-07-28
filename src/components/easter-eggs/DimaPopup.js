import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

export default function DimaPopup({ active, setActive }) {
  return (
    <Box position='fixed' bottom={0} right={196}>
      <motion.div
        variants={{
          inactive: { scale: 1, rotate: 15, y: 200 },
          active: { scale: 1.1, rotate: -5, y: 30 },
        }}
        animate={active ? 'active' : 'inactive'}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ display: 'inline-block', y: 200 }}
      >
        <img
          src='/images/dima.webp'
          alt='Dmytro'
          height={196} width={196}
          onClick={() => setActive(false)}
        />
      </motion.div>
    </Box>
  )
}
