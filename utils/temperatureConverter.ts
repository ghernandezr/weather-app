import { Degree } from "../model";

export const temperatureConverter = {
  [Degree.F]: (value: number) => value * 1.8 + 32,
  [Degree.C]: (value: number) => (value - 32) / 1.8,
};
