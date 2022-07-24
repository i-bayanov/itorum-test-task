import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IRepo, ISearchResponse, IUserInfo, queryParams } from '../interfaces_and_types';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: build => ({
    search: build.query<ISearchResponse, queryParams>({
      query: (query: queryParams) => ({
        url: 'search/users',
        params: { q: query.q, per_page: 9, page: query.page },
      }),
    }),
    getUser: build.query<IUserInfo, string>({
      query: (login: string) => ({
        url: `users/${login}`,
      }),
    }),
    getRepos: build.query<IRepo[], string>({
      query: (login: string) => ({
        url: `users/${login}/repos`,
      }),
    }),
  }),
});

export const { useSearchQuery, useGetUserQuery, useGetReposQuery } = githubApi;
