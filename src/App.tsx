import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { WeatherScreen } from "components/WeatherScreen";
import { detectCity } from "services/detectCity";
import { getCityWeather } from "services/getCityWeather";
import { createState } from "store/createState";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import { GetCityWeatherRequestCallBack } from "services/getCityWeather";
import { getDaysWeather } from "services/getDaysWeather";
import { daysWeather } from "components/CityField";

const GlobalStyle = createGlobalStyle`
  body{
  	@font-face {
		src: url('./fonts/OpenSans-Regular.ttf');
		font-family: 'OpenSans';
	}
    @font-face {
		src: url('./fonts/OpenSans-Bold.ttf');
		font-family: 'OpenSansBold';
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "OpenSans", sans-serif;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 70px;
  text-align: center;
  font-family: "OpenSansBold", sans-serif;
`;

const EdgeBackground = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  background: url("./images/background.jpg") no-repeat;
  background-size: cover;
  filter: contrast(0.7);
`;
const Background = styled.div`
  width: 66%;
  margin: auto;
  min-height: 100vh;
  background: url("./images/background.jpg") no-repeat;
  background-size: cover;
  filter: brightness(0.6);
  border-right: solid rgba(255, 255, 255, 0.5);
  border-left: solid rgba(255, 255, 255, 0.5);
`;

const initialization = async () => {
  const cityName = await detectCity().then(({ city }) => city);
  const cityWeatherData = await getCityWeather(cityName).then((data) => data);
  getDaysWeather(cityName).then((response) => daysWeather.set(response));

  if (cityWeatherData) {
    return { ...cityWeatherData, city: cityName };
  }
};

export const weatherScreenData = createState<GetCityWeatherRequestCallBack | null>(
  null
);

export const App = () => {
  const dispatch = useDispatch();
  initialization().then((response) => {
    if (response) {
      const { city } = response;
      weatherScreenData.set(response);
      dispatch(change("city", "city", city));
    }
  });

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <EdgeBackground />
      <Background />
      <Container>
        <Title>Bundle Up!</Title>
        <WeatherScreen />
      </Container>
    </>
  );
};
