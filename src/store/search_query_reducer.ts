import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
  name: 'search',
  initialState: { query: '' },
  reducers: {
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    }
  },
});

export const searchQueryActions = searchQuerySlice.actions;
export const searchQueryReducer = searchQuerySlice.reducer;
