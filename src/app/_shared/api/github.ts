import { cache } from 'react';
import { APIOptions, callAPI } from './api';
import { transformGithubRepositories } from './mutators/github';

export const githubApiClient = <Response, Data>(
  options: APIOptions<Response, Data>
) =>
  callAPI({
    url: `https://api.github.com${options.url}`,
    mutator: options.mutator,
    requestOptions: {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.G_TOKEN}`,
      },
    },
  });

export const fetchRepositories = cache(async () =>
  githubApiClient({
    url: `/users/${process.env.G_USER}/repos`,
    mutator: transformGithubRepositories,
  })
);
