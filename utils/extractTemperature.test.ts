import { extractTemperature } from "./extractTemperature";
import { hourly } from "./test-data";

describe("Testing Temperature Extractor", () => {
  test("Should extract data from", () => {
    const result = [
      { day: "TODAY", value: 6.1 },
      { day: "WED", value: 6.2 },
      { day: "THU", value: 7.2 },
      { day: "FRI", value: 8.2 },
      { day: "SAT", value: 6.3 },
      { day: "SUN", value: 4.5 },
      { day: "MON", value: 4 },
    ];
    expect(extractTemperature(hourly, 6.1)).toEqual(result);
  });
});
