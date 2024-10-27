import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import { Project } from '@/utils/github';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 hover:shadow-xl hover:scale-102 duration-300">
      <div className="mb-4">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-800 hover:text-green-600 transition-color duration-300"
        >
          <h5 className="text-xl font-bold mb-1">{project.name}</h5>
        </a>
        <p className="text-sm text-slate-600 mb-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.keys(project.languages).map((language) => (
            <span key={language} className="bg-slate-200 text-slate-800 text-xs font-semibold px-2 py-1 rounded">
              {language}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <StarRateRoundedIcon sx={{ mt: -0.3 }} />
            {project.stargazers_count}
          </div>
          <div className="flex items-center gap-1">
            <RestaurantIcon fontSize='small' />
            {project.forks_count}
          </div>
        </div>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 hover:text-green-600 transition-colors"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
