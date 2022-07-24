import { configureStore } from '@reduxjs/toolkit';

import { githubApi } from './githubApi';
import { searchQueryReducer } from './search_query_reducer';
import { pageReducer } from './page_reducer';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    search: searchQueryReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
