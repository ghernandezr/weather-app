import React from "react";
import { Card, EmptyList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { remoceCard, selectCards } from "./cardListSlice";
import { isAbove30 } from "./useIsAbove30";

const CardList = () => {
  const weatherList = useAppSelector(selectCards);
  const { calculateAverage } = isAbove30();
  const dispatch = useAppDispatch();

  const handleRemoveCard = (id: number) => {
    dispatch(remoceCard(id));
  };

  const generateCards = () => {
    return weatherList?.map((weather) => {
      const averageTemp = calculateAverage(weather?.temperatures || []);
      return (
        <Card
          key={weather?.id}
          isAbove30={averageTemp > 30}
          weather={weather}
          onRemove={handleRemoveCard}
        />
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
