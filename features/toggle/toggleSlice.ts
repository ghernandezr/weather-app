import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Degree } from "../../model";
import type { RootState } from "../../store";

// declaring the types for our state
export type ToggleState = {
  value: Degree;
};

const initialState: ToggleState = {
  value: Degree.F,
};

export const toggleSlice = createSlice({
  name: "degree",
  initialState,
  reducers: {
    updateDegree: (state, action: PayloadAction<Degree>) => {
      state.value = action.payload;
    },
  },
});
export const { updateDegree } = toggleSlice.actions;

export const selectDegree = (state: RootState) => state.degree.value;

export default toggleSlice.reducer;
