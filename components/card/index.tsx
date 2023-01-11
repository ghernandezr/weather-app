import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import WeatherInfo from "../../model/WeatherInfo";
import TemperatureItem from "./components/TemperatureItem";

interface CardProps {
  weather: WeatherInfo;
  isAbove30?: boolean;
  onRemove?: (id: number) => void;
}

const Card = (props: CardProps) => {
  const { weather, isAbove30 = false, onRemove } = props;

  const generateTemperatureItems = () => {
    return weather?.temperatures?.map((temp, index) => (
      <TemperatureItem
        key={temp.day}
        temperature={temp}
        divider={index < weather?.temperatures?.length! - 1}
      />
    ));
  };

  return (
    <div
      data-testid="card"
      className={`group  rounded-3xl w-[500px] h-[425px] transition-colors  ease-in-out delay-75 ${
        isAbove30
          ? "bg-[#FFB703]"
          : "bg-gradient-to-r from-[#000000] to-[#023047]"
      }  text-white`}
    >
      <div className="flex items-center justify-between px-9 py-9">
        <i
          className={`wi ${
            weather.icon
          } transition-colors ease-in-out delay-75 text-4xl sm:text-6xl ${
            isAbove30 ? "text-[#FB8500]" : "text-[#8ECAE6]"
          }`}
        ></i>
        <div>
          <h1 className="text-xl sm:text-[32px]">{weather.city}</h1>
          <p className="text-sm sm:text-2xl mt-3">
            {weather.latitude}&#176; N, {weather.longitude}&#176; W
          </p>
        </div>
      </div>
      <div className="flex px-4 md:px-8 justify-between items-center mt-16">
        {generateTemperatureItems()}
      </div>
      <div className="flex items-center justify-center mt-16 ">
        <TrashIcon
          data-testid="trash-icon"
          className="h-9 w-9 hidden cursor-pointer group-hover:block"
          onClick={() => onRemove?.(weather?.id!)}
        />
      </div>
    </div>
  );
};

export default Card;
