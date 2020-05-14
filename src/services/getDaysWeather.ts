import * as moment from "moment";

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface DailyInterface {
  dayName: string;
  main: string;
  icon: string;
  hour: string;
  description: string;
  temp: number;
}

type GetDaysWeatherRequest = (city: string) => Promise<DailyInterface | any>;

interface GetDaysWeatherResponse {
  dt: number;
  main: Main;
  weather: [{ id: number; main: string; description: string; icon: string }];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  sys: { pod: string };
  dt_txt: string;
}

export const getDaysWeather: GetDaysWeatherRequest = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`
  )
    .then((response) => response.json())
    .then(({ list }) => formDailyWeather(list));
};

export interface FormDailyWeatherResponse{
  day: string;
  hourly: [DailyInterface];
}

type formDailyWeatherType = (
  days: GetDaysWeatherResponse[]
) => FormDailyWeatherResponse[];

export const formDailyWeather: formDailyWeatherType = (days) => {
  let dayFlag: any;
  let dailyCollection: any[] = [];
  days.forEach((item) => {
    const date = moment.unix(item.dt);
    const day = date.day();
    const dayName = date.format("dddd");
    const hour = date.format("hha");

    if (day !== dayFlag) {
      dailyCollection.push({ day: dayName, hourly: [] });
      dayFlag = day;
    }
    if (day === dayFlag) {
      const { description, icon, main } = item.weather[0];
      const some = dailyCollection.filter((item) => item.day === dayName)[0];

      some.hourly.push({
        dayName,
        main,
        icon,
        hour,
        description,
        temp: item.main.temp.toFixed(1),
      });
    }
  });
  return dailyCollection;
};
