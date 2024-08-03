const token = process.env.GITHUB_TOKEN;

const fetcher = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = res.statusText;
      error.status = res.status;
      throw error;
    }
    return res.json();
  });
};

export const fetchGitHubData = async (username, repoNames) => {
  const repoPromises = repoNames.map((repo) =>
    fetcher(`https://api.github.com/repos/${username}/${repo}`)
  );

  const languagePromises = repoNames.map((repo) =>
    fetcher(`https://api.github.com/repos/${username}/${repo}/languages`)
  );

  const repos = await Promise.all(repoPromises);
  const languages = await Promise.all(languagePromises);

  return repos.map((repo, index) => ({
    ...repo,
    languages: languages[index],
  }));
};
