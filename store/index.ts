import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  CardsReducer,
  CountryReducer,
  SearchReducer,
  ToggleReducer,
} from "../features";

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    country: CountryReducer,
    degree: ToggleReducer,
    cards: CardsReducer,
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
