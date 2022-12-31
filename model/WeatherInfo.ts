import Temperature from "./Temperature";

interface WeatherInfo {
  city?: string;
  icon?: string;
  latitude?: number;
  longitude?: number;
  temperatures?: Temperature[];
}

export default WeatherInfo;
