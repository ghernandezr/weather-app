import { Degree } from "../model";

export const convertCtoF = (value: number) => value * 1.8 + 32;
export const convertFtoC = (value: number) => (value - 32) / 1.8;

export const temperatureConverter = {
  [Degree.F]: convertCtoF,
  [Degree.C]: convertFtoC,
};
