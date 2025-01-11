import React from 'react';
import { useRouter } from 'next/router';

import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PetsIcon from '@mui/icons-material/Pets';
import MapIcon from '@mui/icons-material/Map';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
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

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav
      className="
        fixed rounded-full
        p-2 flex space-x-4
        transition-all
        bottom-4 left-1/2 transform -translate-x-1/2
        bg-white shadow-lg

        md:bottom-auto md:left-4 md:top-32 md:-translate-y-1/3 md:translate-x-0
        md:flex-col md:space-x-0 md:space-y-3 md:shadow-none md:bg-none
      "
    >
      {navItems.map(item => (
        <div key={item.label} className="relative group">
          <a
            onClick={() => router.push(item.href)}
            className={`flex items-center justify-center p-3 rounded-full transition-all w-12 h-12 
                        ${item.href === router.pathname ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}
                        hover:bg-green-500 hover:text-white shadow-sm duration-300
                        cursor-pointer`}
            id={item.label}
            data-tooltip-target={`#nav-item-${item.label}`}
          >
            {item.icon}
          </a>
          <div
            className="absolute w-max px-2 py-1 bg-gray-800 text-white duration-200
                       text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity
                       bottom-full left-1/2 -translate-x-1/2 mb-3
                       md:top-1/4 md:left-full md:ml-3 md:bottom-0 md:bottom-0 md:translate-x-0"
            role="tooltip"
            id={`nav-item-${item.label}`}
          >
            {item.label}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
