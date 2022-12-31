import React from "react";
import Temperature from "../../../model/Temperature";

interface TemperatureProps {
  temperature: Temperature;
  divider?: boolean;
}

const TemperatureItem = (props: TemperatureProps) => {
  const { temperature, divider = true } = props;
  return (
    <div className="text-center">
      <h1 className="uppercase sm:text-[28px]">
        {temperature.day} {divider && "|"}
      </h1>
      <div className="sm:text-[28px] mt-3">{temperature.value}&#176;</div>
    </div>
  );
};

export default TemperatureItem;
