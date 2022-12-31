import { useState } from "react";
import {
  selectSearchTerm,
  updateSearchTerm,
} from "../../../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export const useSearchTerm = () => {
  const searchTerm = useAppSelector(selectSearchTerm);
  const dispatch = useAppDispatch();

  const setSearchTerm = (term: string) => {
    dispatch(updateSearchTerm(term));
  };

  const handleValueChange = (value: string) => {
    setSearchTerm(value);
  };

  return {
    searchTerm,
    handleValueChange,
    setSearchTerm,
  };
};
