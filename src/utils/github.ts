const token: string | undefined = process.env.NEXT_APP_GITHUB_TOKEN;

const fetcher = async (url: string): Promise<any> => {
  if (!token) {
    throw new Error('GitHub token is missing from environment variables.');
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    const error: any = new Error('An error occurred while fetching the data.');
    error.info = response.statusText;
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export interface GitHubLanguage {
  [language: string]: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

export type Project = GitHubRepo & { languages: GitHubLanguage };

export const fetchGitHubData = async (
  username: string,
  repoNames: string[]
): Promise<Project[]> => {
  const repoPromises = repoNames.map((repo) =>
    fetcher(`https://api.github.com/repos/${username}/${repo}`)
  );

  const languagePromises = repoNames.map((repo) =>
    fetcher(`https://api.github.com/repos/${username}/${repo}/languages`)
  );

  const repos: GitHubRepo[] = await Promise.all(repoPromises);
  const languages: GitHubLanguage[] = await Promise.all(languagePromises);

  return repos.map((repo, index) => ({
    ...repo,
    languages: languages[index],
  }));
};
