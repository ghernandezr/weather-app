import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Degree } from "../../model";
import WeatherInfo from "../../model/WeatherInfo";
import type { RootState } from "../../store";

// declaring the types for our state
export type CardListState = {
  value: WeatherInfo[];
};

const initialState: CardListState = {
  value: [],
};

export const cardListSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<WeatherInfo>) => {
      const filtered = state.value.filter(
        (item) => item.id !== action.payload.id
      );
      filtered.push(action.payload);
      state.value = filtered;
    },
    remoceCard: (state, action: PayloadAction<number>) => {
      const filtered = state.value.filter((item) => item.id !== action.payload);
      state.value = filtered;
    },
  },
});
export const { addCard, remoceCard } = cardListSlice.actions;

export const selectCards = (state: RootState) => state.cards.value;

export default cardListSlice.reducer;
