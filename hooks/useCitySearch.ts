import { useQuery } from "@tanstack/react-query";
import { searchCityByName } from "../api/weather-service";

const useCitySearch = (cityName: string) => {
  return useQuery({
    queryKey: ["search", cityName],
    queryFn: () => {
      return searchCityByName(cityName);
    },
    keepPreviousData: true,
  });
};

export default useCitySearch;
