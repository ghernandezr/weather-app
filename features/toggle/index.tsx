import React from "react";
import ToggleDegree from "../../components/toggle-degree";
import { useDegreeToggle } from "./hooks";

const Toggle = () => {
  const { degree, handleToggle } = useDegreeToggle();

  return <ToggleDegree degree={degree} onToggle={handleToggle} />;
};

export default Toggle;
