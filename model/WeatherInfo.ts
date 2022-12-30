import Temperature from "./Temperature";

interface WeatherInfo {
  city?: string;
  weatherCode?: number;
  latitude?: number;
  longitude?: number;
  temperatures?: Temperature[];
}

export default WeatherInfo;
