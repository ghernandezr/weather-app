import { Degree } from "../../model";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectDegree, updateDegree } from "./toggleSlice";

export const useDegreeToggle = () => {
  const degree = useAppSelector(selectDegree);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    const nextDegree = degree === Degree.F ? Degree.C : Degree.F;
    dispatch(updateDegree(nextDegree));
  };

  return {
    degree,
    handleToggle,
  };
};
