import { getWeatherForCity } from "../../../api/weather-service";
import Icons from "../../../constants/icons";
import WeatherInfo from "../../../model/WeatherInfo";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addCard } from "../../card-list/cardListSlice";
import { selectCountry } from "../../country/countrySlice";
import { selectDegree } from "../../toggle/toggleSlice";

export const useSubmit = () => {
  const country = useAppSelector(selectCountry);
  const degree = useAppSelector(selectDegree);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      const response = await getWeatherForCity({
        latitude: country?.latitude,
        longitude: country?.longitude,
        temperatureUnit: degree,
      });

      console.log(response.data);

      if (response.status === 200) {
        const data = response.data;

        const weatherInfo: WeatherInfo = {
          id: country?.id,
          city: country?.name,
          latitude: data?.latitude,
          longitude: data?.longitude,
          icon: Icons[data?.current_weather?.weathercode] as string,
          temperatures: [],
        };

        dispatch(addCard(weatherInfo));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleSubmit };
};
