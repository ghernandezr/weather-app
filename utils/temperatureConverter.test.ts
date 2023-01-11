import { convertCtoF, convertFtoC } from "./temperatureConverter";

describe("Testing Temperature Converter", () => {
  test("should convert from Celcius to faraday", () => {
    expect(convertFtoC(86)).toBeCloseTo(30);
  });

  test("should convert from Faraday to Celcius", () => {
    expect(convertCtoF(30)).toBeCloseTo(86);
  });
});
