import { GITHUB_API_URL, GITHUB_TOKEN, GITHUB_USER } from '../config';
import { APIOptions, callAPI } from './api';
import { transformGithubRepositories } from './mutators/github';

export const githubApiClient = <Response, Data>(
  options: APIOptions<Response, Data>
) =>
  callAPI({
    url: `${GITHUB_API_URL}/users/${GITHUB_USER}${options.url}`,
    mutator: options.mutator,
    requestOptions: {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    },
  });

export const fetchRepositories = () =>
  githubApiClient({
    url: '/repos',
    mutator: transformGithubRepositories,
  });
