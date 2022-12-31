import { getWeatherForCity } from "../../../api/weather-service";
import Icons from "../../../constants/icons";
import WeatherInfo from "../../../model/WeatherInfo";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { extractTemperature } from "../../../utils/extractTemperature";
import { addCard } from "../../card-list/cardListSlice";
import { selectCountry, updateCountry } from "../../country/countrySlice";
import { selectDegree } from "../../toggle/toggleSlice";
import { updateSearchTerm } from "../searchSlice";

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

      if (response.status === 200) {
        const data = response.data;

        const temperatures = extractTemperature(
          data?.hourly,
          data?.current_weather?.temperature
        );

        const weatherInfo: WeatherInfo = {
          id: country?.id,
          city: country?.name,
          latitude: parseFloat(data?.latitude?.toFixed(4)),
          longitude: parseFloat(data?.longitude?.toFixed(4)),
          icon: Icons[data?.current_weather?.weathercode] as string,
          temperatures: temperatures,
        };

        dispatch(addCard(weatherInfo));
        dispatch(updateSearchTerm(""));
        dispatch(updateCountry(null));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { handleSubmit };
};
