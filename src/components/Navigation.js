import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PetsIcon from '@mui/icons-material/Pets';

const Navigation = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  return (
    <Paper
      elevation={4}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home" icon={<HomeIcon />}
          value="/" href="/"
          component='a'
        />
        <BottomNavigationAction
          label="Projects" icon={<CodeIcon />}
          value="/projects" href="/projects"
          component='a'
        />
        <BottomNavigationAction
          label="Career" icon={<WorkIcon />}
          value="/career" href="/career"
          component='a'
        />
        <BottomNavigationAction
          label="Cats" icon={<PetsIcon />}
          value="/cats" href="/cats"
          component='a'
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
