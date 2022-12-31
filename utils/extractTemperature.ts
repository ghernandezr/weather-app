import moment from "moment";
import Temperature from "../model/Temperature";

export const extractTemperature = (hourly: any, today: number) => {
  const temperatures: Temperature[] = [];
  temperatures.push({
    day: "TODAY",
    value: today,
  });

  const { time, temperature_2m } = hourly;

  const summary: { [key: string]: number[] } = {};

  const todayDay = moment().format("ddd").toLocaleUpperCase();

  for (let i = 0; i < time?.length; i++) {
    const weekDay: string = moment(time[i]).format("ddd")?.toLocaleUpperCase();
    if (weekDay !== todayDay) {
      summary[weekDay] = [...(summary[weekDay] || []), temperature_2m[i]];
    }
  }

  for (let key of Object.keys(summary)) {
    const sum = summary[key]?.reduce((acc, curr) => acc + curr, 0);
    temperatures.push({
      day: key,
      value: parseFloat((sum / summary[key]?.length).toFixed(1)),
    });
  }

  return temperatures;
};
