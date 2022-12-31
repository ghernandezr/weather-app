import { useAppDispatch } from "../../../store/hooks";
import { updateCountry } from "../../country/countrySlice";

export const useCountry = () => {
  const dispatch = useAppDispatch();

  const handleSelectCountry = (sugg: any) => {
    dispatch(updateCountry(sugg));
  };

  return { handleSelectCountry };
};
