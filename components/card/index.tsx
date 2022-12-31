import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import WeatherInfo from "../../model/WeatherInfo";
import TemperatureItem from "./components/TemperatureItem";

interface CardProps {
  weather: WeatherInfo;
}

const Card = (props: CardProps) => {
  const { weather } = props;

  const generateTemperatureItems = () => {
    return weather?.temperatures?.map((temp, index) => (
      <TemperatureItem
        temperature={temp}
        divider={index < weather?.temperatures?.length! - 1}
      />
    ));
  };

  return (
    <div
      className={`rounded-3xl w-[500px] h-[425px] bg-gradient-to-r from-[#000000] to-[#023047] text-white`}
    >
      <div className="flex items-center justify-between px-9 py-9">
        <i
          className={`wi ${weather.icon} text-4xl sm:text-6xl text-[#8ECAE6]`}
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
      <div>
        <TrashIcon />
      </div>
    </div>
  );
};

export default Card;
