type getCityWeatherRequestType = (
  city: string
) => Promise<GetCityWeatherRequestCallBack | undefined>;

export interface GetCityWeatherRequestCallBack {
  countryCode?: string;
  temp: string;
  icon: string;
  description: string;
  main: string;
  city: string;
}

interface Fetch {
  cod: 200 | 404;
  temp: string;
  icon: string;
  description: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  name: string;
}
export const getCityWeatherRequest: getCityWeatherRequestType = async city => {
  const respond: Fetch = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`
  ).then(response => response.json());

  const { cod } = respond;
  if (cod === 200) {
    const {
      main: { temp },
      weather,
      name
    } = respond;
    const { icon, description, main } = weather[0];

    return {
      temp: temp.toFixed(1),
      icon,
      description,
      main,
      city: name
    };
  }
};
