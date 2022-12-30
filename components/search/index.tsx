import React, { useState } from "react";
import { useSubmitSearch } from "./hooks";

interface SearchProps {
  onSubmit?: (country: string) => void;
}

const Search = (props: SearchProps) => {
  const { onSubmit } = props;
  const { country, handleValueChange, handleSubmit } =
    useSubmitSearch(onSubmit);

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1 rounded-md">
        <input
          type="text"
          name="price"
          id="price"
          value={country}
          onChange={handleValueChange}
          className="block w-full rounded-2xl border-gray-300 px-4 sm:text-lg h-14 outline-none"
          placeholder="Enter a city name"
        />
      </div>
      <button
        className="bg-[#219EBC] min-w-[220px] h-14 rounded-full text-center text-white text-xl"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
};

export default Search;
