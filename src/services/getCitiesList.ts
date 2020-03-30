import {
  getCityWeatherRequest,
  GetCityWeatherRequestCallBack,
} from "./getCityWeatherRequest";
import { debounce } from "helpers/debounce";

type GetCitiesListType = (city: string) => Promise<any>;

type GetCitiesListRequestType = (value: string) => Promise<any>;

interface GetCitiesListRequestAnswer {
  data: [
    {
      id: number;
      wikiDataId: string;
      type: string;
      city: string;
      name: string;
      country: string;
      countryCode: string;
      region: string;
      regionCode: string;
      latitude: number;
      longitude: number;
    }
  ];
}

export const getCitiesList: GetCitiesListType = debounce((value) => {
  return getCitiesListRequest(value).then((response) => response);
}, 1000);

const getCitiesListRequest: GetCitiesListRequestType = async (value) => {
  const cityList: GetCityWeatherRequestCallBack[] = [];

  const response: GetCitiesListRequestAnswer = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`,
    {
      headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "5dfbe0fb22msh73b75a7c5fb4eb4p14268ajsn2c16ebc4028b",
      },
    }
  ).then((response) => response.json());
  const { data } = response;
  if (data.length) {
    for (const item of data) {
      const { city, region } = item;
      const response = await getCityWeatherRequest(city);

      const lastRequest =
        data[data.length - 1].city === city &&
        data[data.length - 1].region === region;
      if (response) {
        response.countryCode = item.countryCode;
        cityList.push(response);
      }
      if (lastRequest) {
        return cityList;
      }
    }
  }
};
