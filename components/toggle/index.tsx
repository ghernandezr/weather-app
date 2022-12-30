import React, { useState } from "react";
import { Degree } from "../../model";
import { useDegreeToggle } from "./hooks";

interface ToggleProps {
  onDegreeToggleChange?: (value: Degree) => void;
}

const Toggle = (props: ToggleProps) => {
  const { onDegreeToggleChange } = props;
  const { degree, handleToggle } = useDegreeToggle(onDegreeToggleChange);

  return (
    <div
      className="bg-[#99A4A9] select-none w-[116px] h-[51px] p-[5px] cursor-pointer rounded-full flex items-center relative"
      onClick={handleToggle}
    >
      <div
        className={`bg-white rounded-full w-11 h-11 absolute transition-transform ${
          degree === Degree.F ? "translate-x-16" : "translate-x-1"
        }   hover:bg-gray-50`}
      ></div>
      <span className="text-xl flex-1 text-center">&#8457;</span>
      <span className="text-xl flex-1 text-center">&#8451;</span>
    </div>
  );
};

export default Toggle;
