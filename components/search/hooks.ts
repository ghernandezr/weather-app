import { useState } from "react";

type OnSubmitType = (country: string) => void;

export const useSubmitSearch = (onSubmit?: OnSubmitType) => {
  const [country, setCountry] = useState("");

  const handleValueChange = (e: any) => {
    setCountry(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit?.(country);
  };

  return {
    country,
    handleValueChange,
    handleSubmit,
  };
};
