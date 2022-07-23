import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from './store';
import { searchQueryActions } from './search_query_reducer';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAction = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(searchQueryActions, dispatch);
};