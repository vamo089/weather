import {
  getCityWeatherRequest,
  GetCityWeatherRequestCallBack
} from "./getCityWeatherRequest";

type GetCitiesListType = (city: string) => Promise<GetCityWeatherRequestCallBack>

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

let getCitiesListDelay: number;

export const getCitiesList: GetCitiesListType = async value => {
  const SUGGESTION_DELAY_TIME = 1000;
  if (value) {
    if (!getCitiesListDelay) {
      getCitiesListDelay = await setTimeout(async () => {
        return await getCitiesListRequest(value);
      }, SUGGESTION_DELAY_TIME);
    } else {
      clearTimeout(getCitiesListDelay);
      getCitiesListDelay = await setTimeout(async () => {
        return await getCitiesListRequest(value);
      }, SUGGESTION_DELAY_TIME);
    }
  }

  // const { slider } = getState().reducer;
  // if (slider) {
  //   dispatch(setSlider(null));
  // }
};

const getCitiesListRequest: GetCitiesListRequestType = async value => {
  const cityList: GetCityWeatherRequestCallBack[] = [];

  const response: GetCitiesListRequestAnswer = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`,
    {
      headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "5dfbe0fb22msh73b75a7c5fb4eb4p14268ajsn2c16ebc4028b"
      }
    }
  ).then(response => response.json());
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
