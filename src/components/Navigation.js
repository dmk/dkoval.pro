  import { useState, useEffect } from 'react';

  import { useRouter } from 'next/router';

  import BottomNavigation from '@mui/material/BottomNavigation';
  import BottomNavigationAction from '@mui/material/BottomNavigationAction';
  import Paper from '@mui/material/Paper';
  import Drawer from '@mui/material/Drawer';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import {  useMediaQuery } from '@mui/material';

  import HomeIcon from '@mui/icons-material/Home';
  import CodeIcon from '@mui/icons-material/Code';
  import WorkIcon from '@mui/icons-material/Work';
  import PetsIcon from '@mui/icons-material/Pets';

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <CodeIcon />,
    },
    {
      label: "Career",
      href: "/career",
      icon: <WorkIcon />,
    },
    {
      label: "Cats",
      href: "/cats",
      icon: <PetsIcon />,
    },
  ]

  const Navigation = () => {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [value, setValue] = useState(router.pathname);

    useEffect(() => {
      setValue(router.pathname);
    }, [router.pathname]);

    return (
      isMobile ? (
        <Paper
          elevation={4}
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigation
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            {navItems.map(item => (
              <BottomNavigationAction
                {...item} value={item.href}
                component='a' key={item.label}
              />
            ))}
          </BottomNavigation>
        </Paper>
      ) : (
        <Paper elevation={4}>
          <Drawer variant="permanent" open={false}>
            <List>
              {navItems.map(item => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <BottomNavigationAction
                    {...item} value={item.href}
                    component='a'
                    sx={{
                      color: item.href === value ? 'primary.main' : 'primary.background',
                      '& .MuiBottomNavigationAction-label': {
                        opacity: 1
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Paper>
      )
    );
  };

  export default Navigation;
