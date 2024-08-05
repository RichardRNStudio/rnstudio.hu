import { APIOptions, callAPI } from './api';
import { transformGithubRepositories } from './mutators/github';

export const githubApiClient = <Response, Data>(
  options: APIOptions<Response, Data>
) => {
  console.log(process.env.GITHUB_USER);
  return callAPI({
    url: `https://api.github.com/users/${process.env.GITHUB_USER}${options.url}`,
    mutator: options.mutator,
    requestOptions: {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  });
};

export const fetchRepositories = () =>
  githubApiClient({
    url: '/repos',
    mutator: transformGithubRepositories,
  });
