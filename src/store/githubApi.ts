import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ISearchResponse } from '../interfaces_and_types';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: build => ({
    search: build.query<ISearchResponse, string>({
      query: (q: string) => ({
        url: 'search/users',
        params: { q, per_page: 9 },
      }),
    }),
  }),
});

export const { useSearchQuery } = githubApi;
