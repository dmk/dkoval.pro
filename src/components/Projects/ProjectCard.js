import RestaurantIcon from '@mui/icons-material/Restaurant';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="mb-4">
        <h5 className="text-xl font-bold mb-1">{project.name}</h5>
        <p className="text-sm text-gray-600 mb-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.keys(project.languages).map((language) => (
            <span key={language} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
              {language}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <StarRateRoundedIcon sx={{mt: -.3}} />
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
          className="text-gray-600 hover:text-green-600 transition-colors"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
