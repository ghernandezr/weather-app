import React from "react";

const EmptyList = () => {
  return (
    <div className="flex items-center justify-center gap-3 text-[#9FAAAE] ">
      <i className="wi wi-day-cloudy text-4xl md:text-7xl"></i>
      <p className="text-xl md:text-4xl">Submit a city to fill up this space</p>
    </div>
  );
};

export default EmptyList;
