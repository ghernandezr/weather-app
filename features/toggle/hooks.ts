import { Degree } from "../../model";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { convertToDegree } from "../card-list/cardListSlice";
import { selectDegree, updateDegree } from "./toggleSlice";

export const useDegreeToggle = () => {
  const degree = useAppSelector(selectDegree);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    const nextDegree = degree === Degree.F ? Degree.C : Degree.F;
    dispatch(updateDegree(nextDegree));
    dispatch(convertToDegree(nextDegree));
  };

  return {
    degree,
    handleToggle,
  };
};
