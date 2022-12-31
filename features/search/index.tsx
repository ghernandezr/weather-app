import React from "react";
import ClickAwayListener from "react-click-away-listener";

import SearchInput from "../../components/search-input";
import { useCountry } from "./hooks/useCountry";
import { useSearchTerm } from "./hooks/useSearchTerm";
import { useSubmit } from "./hooks/useSubmit";
import { useSuggestions } from "./hooks/useSuggestions";

const Search = () => {
  const { searchTerm, setSearchTerm, handleValueChange } = useSearchTerm();
  const { suggestions, openSugg, setOpenSugg } = useSuggestions(searchTerm);
  const { handleSelectCountry } = useCountry();
  const { handleSubmit } = useSubmit();

  const handleSuggestionClick = (sugg: any) => {
    handleSelectCountry(sugg);
    setOpenSugg(false);
    setSearchTerm(sugg?.name);
  };

  const handleClickAway = () => {
    setOpenSugg(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SearchInput
        value={searchTerm}
        onValueChange={handleValueChange}
        suggestions={suggestions}
        openSugg={openSugg}
        onSuggestionClick={handleSuggestionClick}
        onSubmit={handleSubmit}
      />
    </ClickAwayListener>
  );
};

export default Search;
