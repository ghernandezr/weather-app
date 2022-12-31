import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Degree } from "../../model";
import WeatherInfo from "../../model/WeatherInfo";
import type { RootState } from "../../store";
import { temperatureConverter } from "../../utils/temperatureConverter";

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
    convertToDegree: (state, action: PayloadAction<Degree>) => {
      const degreeConversor = temperatureConverter[action.payload];

      state.value = state.value.map((card) => {
        return {
          ...card,
          temperatures: card.temperatures?.map((temp) => {
            return {
              ...temp,
              value: parseFloat(degreeConversor(temp.value!).toFixed(1)),
            };
          }),
        };
      });
    },
  },
});
export const { addCard, remoceCard, convertToDegree } = cardListSlice.actions;

export const selectCards = (state: RootState) => state.cards.value;

export default cardListSlice.reducer;
