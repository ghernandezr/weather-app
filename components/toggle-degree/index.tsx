import React from "react";
import { Degree } from "../../model";

interface ToggleDegreeProps {
  degree: Degree;
  onToggle: () => void;
}

const ToggleDegree = (props: ToggleDegreeProps) => {
  const { degree, onToggle } = props;

  return (
    <div
      className="bg-[#99A4A9] select-none w-[116px] h-[51px] p-[5px] cursor-pointer rounded-full flex items-center relative"
      onClick={onToggle}
      data-testid="toggle"
    >
      <div
        data-testid="circle-toggle"
        className={`bg-white rounded-full w-11 h-11 absolute transition-transform ${
          degree === Degree.F ? "translate-x-16" : "translate-x-1"
        }   hover:bg-gray-50`}
      ></div>
      <span className="text-xl flex-1 text-center">&#8457;</span>
      <span className="text-xl flex-1 text-center">&#8451;</span>
    </div>
  );
};

export default ToggleDegree;
