import Head from 'next/head';

import ProjectList from '@/components/Projects/ProjectList';
import { fetchGitHubData, Project } from '@/utils/github';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Dmytro Koval | DevOps Engineer | Projects</title>
        <meta name="description" content="Welcome to my personal website. I am Dima, a DevOps Engineer
        based in Kyiv, Ukraine. I work in game development, am passionate about automation,
        and enjoy web development for fun. Connect with me on GitHub, LinkedIn, and Twitter." />
      </Head>

      <div className="w-full mt-4 px-2">
        <h2 className="text-2xl font-bold text-center my-6">Open-Source Projects</h2>
        <div className="flex justify-center items-center">
          <div className="max-w-screen-lg">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const username = 'dmk';
  const repoNames = [
    'fastsheet',
    'jenkins-testbed',
    'temp-alert',
    'dkoval.pro',
    'react-ua-map',
    'fastai-course-notebooks',
  ];

  const projects = await fetchGitHubData(username, repoNames);

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
