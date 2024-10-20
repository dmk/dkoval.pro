import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Links() {
  return (
    <div className="flex justify-center">
      <a href="https://github.com/dmk" target="_blank" rel="noopener noreferrer" aria-label="Link to Dmytro's GitHub"
        className="p-3 rounded-full hover:bg-gray-100 transition-colors h-12 w-12">
        <GitHubIcon className="text-slate-800 h-6 w-6" />
      </a>
      <a href="https://linkedin.com/in/dmk" target="_blank" rel="noopener noreferrer" aria-label="Link to Dmytro's LinkedIn"
        className="p-3 rounded-full hover:bg-gray-100 transition-colors h-12 w-12">
        <LinkedInIcon className="text-sky-700 h-6 w-6" />
      </a>
      <a href="https://twitter.com/dmkov41" target="_blank" rel="noopener noreferrer" aria-label="Link to Dmytro's Twitter"
       className="p-3 rounded-full hover:bg-gray-100 transition-colors h-12 w-12">
        <TwitterIcon className="text-sky-400 h-6 w-6" />
      </a>
    </div>
  );
}
