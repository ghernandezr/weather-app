import axios from "axios";
import moment from "moment";

import { Degree } from "../model";

export const searchCityByName = (cityName: string) => {
  return axios.get(`${process.env.NEXT_PUBLIC_GEOCODING_API_URL}/search`, {
    params: {
      name: cityName,
    },
  });
};

interface GetWeatherForCityProps {
  latitude?: number;
  longitude?: number;
  temperatureUnit?: Degree;
}

export const getWeatherForCity = (data: GetWeatherForCityProps) => {
  const { latitude, longitude, temperatureUnit } = data;
  return axios.get(`${process.env.NEXT_PUBLIC_FORECAST_API_URL}/forecast`, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      temperature_unit: temperatureUnit,
      hourly: "temperature_2m",
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().add(4, "d").format("YYYY-MM-DD"),
    },
  });
};
