import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// declaring the types for our state
export type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { updateSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state: RootState) => state.search.value;

export default searchSlice.reducer;
