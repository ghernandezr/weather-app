import { useState } from "react";
import { Degree } from "../../model";

type DegreeToggleChangeType = (value: Degree) => void;

export const useDegreeToggle = (
  onDegreeToggleChange?: DegreeToggleChangeType
) => {
  const [degree, setDegree] = useState(Degree.F);

  const handleToggle = () => {
    const nextDegree = degree === Degree.F ? Degree.C : Degree.F;
    setDegree(nextDegree);
    onDegreeToggleChange?.(nextDegree);
  };

  return {
    degree,
    handleToggle,
  };
};
