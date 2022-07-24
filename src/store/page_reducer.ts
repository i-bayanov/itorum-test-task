import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: 'page',
  initialState: { num: 1 },
  reducers: {
    updatePage(state, action: PayloadAction<number>) {
      state.num = action.payload;
    }
  },
});

export const pageActions = pageSlice.actions;
export const pageReducer = pageSlice.reducer;