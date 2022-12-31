import { useEffect, useState } from "react";
import { useCitySearch, useDebounce } from "../../../hooks";

export const useSuggestions = (searchTerm: string) => {
  const [suggestions, setSuggestions] = useState([]);
  const debouncedValue = useDebounce<string>(searchTerm, 500);
  const [openSugg, setOpenSugg] = useState(false);

  const { data: response, isSuccess } = useCitySearch(debouncedValue);

  useEffect(() => {
    if (isSuccess) {
      const results = response?.data?.results;
      setOpenSugg(results?.length > 0);
      setSuggestions(results || []);
    }
  }, [isSuccess, response?.data?.results]);

  return {
    suggestions,
    openSugg,
    setOpenSugg,
  };
};
