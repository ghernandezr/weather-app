import { Degree } from "../../model";
import Temperature from "../../model/Temperature";
import { useAppSelector } from "../../store/hooks";
import { temperatureConverter } from "../../utils/temperatureConverter";
import { selectDegree } from "../toggle/toggleSlice";

export const isAbove30 = () => {
  const degree = useAppSelector(selectDegree);

  const calculateAverage = (temperatures: Temperature[]) => {
    const conversor = temperatureConverter[Degree.C];
    const sumTemp =
      temperatures
        ?.map((temp) => {
          const convertToCelcius =
            degree === Degree.F ? conversor(temp.value!) : temp.value;
          return {
            ...temp,
            value: convertToCelcius,
          };
        })
        ?.reduce((acc, curr) => acc + curr.value!, 0) || 0;
    return sumTemp / temperatures?.length!;
  };

  return { calculateAverage };
};
