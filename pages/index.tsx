import Head from "next/head";
import { Card, EmptyList, Search, Toggle } from "../components";
import WeatherInfo from "../model/WeatherInfo";

const testModel: WeatherInfo = {
  city: "Washintong DC",
  longitude: 38.9,
  latitude: 77.0369,
  icon: "wi-day-thunderstorm",
  temperatures: [
    {
      day: "TODAY",
      value: 32,
    },
    {
      day: "SUN",
      value: 32,
    },
    {
      day: "MON",
      value: 32,
    },
    {
      day: "TUE",
      value: 32,
    },
    {
      day: "WED",
      value: 32,
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="flex justify-end p-4 md:py-12 md:px-32">
          <Toggle />
        </div>
        <div className="flex justify-center px-2 mt-4">
          <div className="min-w-full md:min-w-[784px]">
            <Search />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center my-48 px-4">
          <Card weather={testModel} />
        </div>
      </main>
    </>
  );
}
