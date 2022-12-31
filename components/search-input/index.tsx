import React from "react";

interface SearchProps {
  value: string;
  openSugg?: boolean;
  suggestions?: any[];
  onSubmit?: () => void;
  onSuggestionClick?: (sugg: any) => void;
  onValueChange: (value: string) => void;
}

const SearchInput = React.forwardRef<HTMLDivElement, SearchProps>(
  (props, ref) => {
    const {
      value,
      openSugg,
      suggestions,
      onValueChange,
      onSubmit,
      onSuggestionClick,
    } = props;

    const generateSuggestions = () => {
      return suggestions?.map((sugg: any) => {
        return (
          <div
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
            key={sugg?.id}
            onClick={(e: any) => {
              onSuggestionClick?.(sugg);
            }}
          >{`${sugg?.name} - ${sugg?.admin1 || ""} - ${sugg?.country}`}</div>
        );
      });
    };

    return (
      <div className="flex items-center gap-3 sm:flex-row flex-col" ref={ref}>
        <div className="relative w-full flex-1 rounded-md">
          <input
            type="text"
            name="price"
            id="price"
            value={value}
            autoComplete="off"
            onChange={(e: any) => onValueChange?.(e?.target?.value)}
            className="block w-full rounded-2xl border-gray-300 px-4  sm:text-lg h-14 outline-none"
            placeholder="Enter a city name"
          />
          {openSugg && (
            <div className="absolute bg-white w-full mt-1 rounded-lg p-5 max-h-36 overflow-auto">
              {generateSuggestions()}
            </div>
          )}
        </div>
        <button
          className="bg-[#219EBC] min-w-[220px] h-14 rounded-full text-center text-white text-xl"
          onClick={() => {
            onSubmit?.();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
);

export default SearchInput;
