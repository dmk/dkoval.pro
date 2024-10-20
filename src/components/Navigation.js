import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PetsIcon from '@mui/icons-material/Pets';

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,  
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <CodeIcon className="w-6 h-6" />,  
  },
  {
    label: "Career",
    href: "/career",
    icon: <WorkIcon className="w-6 h-6" />,  
  },
  {
    label: "Cats",
    href: "/cats",
    icon: <PetsIcon className="w-6 h-6" />,  
  },
];

const Navigation = () => {
  const router = useRouter();
  const [value, setValue] = useState(router.pathname);

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  return (
    <nav
      className="
        fixed 
        bg-white 
        rounded-full 
        shadow-md 
        p-3 
        flex 
        space-x-4 
        transition-all
        bottom-4 left-1/2 transform -translate-x-1/2
        md:bottom-auto md:left-4 md:top-32 md:-translate-y-1/3 md:translate-x-0 md:flex-col md:space-x-0 md:space-y-3
      "
    >
      {navItems.map(item => (
        <button
          key={item.label}
          onClick={() => router.push(item.href)}
          className={`flex items-center justify-center p-3 rounded-full transition-all w-12 h-12 
                      ${item.href === value ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}
                      hover:bg-green-500 hover:text-white shadow-sm duration-300`}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
