import React from "react";
import { Card, EmptyList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { remoceCard, selectCards } from "./cardListSlice";

const CardList = () => {
  const weatherList = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  const handleRemoveCard = (id: number) => {
    dispatch(remoceCard(id));
  };

  const generateCards = () => {
    return weatherList?.map((weather) => {
      return (
        <Card key={weather?.id} weather={weather} onRemove={handleRemoveCard} />
      );
    });
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        {weatherList?.length > 0 && generateCards()}
      </div>
      {weatherList?.length === 0 && <EmptyList />}
    </>
  );
};

export default CardList;
