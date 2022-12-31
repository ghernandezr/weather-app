import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// declaring the types for our state
export type CountryState = {
  value: any;
};

const initialState: CountryState = {
  value: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    updateCountry: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});
export const { updateCountry } = countrySlice.actions;

export const selectCountry = (state: RootState) => state.country.value;

export default countrySlice.reducer;
