import React, { useState } from "react";
import { change, Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import Loader from "./Loader";
import { getCitiesList } from "services/getCitiesList";
import { GetCityWeatherRequestCallBack } from "services/getCityWeatherRequest";
import { getDaysWeather } from "services/getDaysWeather";

const Container = styled.div`
  margin: auto;
  position: relative;
`;

const InputWrapper = styled.div`
  input {
    font-size: 36px;
    text-align: center;
    border: none;
    background: transparent;
    line-height: normal;
    &:focus {
      outline: none;
    }
  }
`;

const CityList = styled.ul`
  top: 66px;
  z-index: 1;
  margin: 0;
  padding-right: 10px;
  padding-left: 10px;
`;
const CityListItem = styled.li`
  font-size: 20px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  display: block;
  &:first-child {
    border-top: 2px solid rgba(255, 255, 255, 0.5);
  }
  &:hover {
    background: #ccc;
  }
`;

let CityField = () => {
  const dispatch = useDispatch();
  const [cityList, setCityList] = useState<
    GetCityWeatherRequestCallBack[] | null
  >([]);
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <Container>
      <InputWrapper>
        <Field
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
            setLoader(true);
            getCitiesList(target.value).then((respond: any) => {
              setCityList(respond);
              setLoader(false);
            });
          }}
          placeholder="city"
          name="city"
          component="input"
          autoComplete="off"
        />
      </InputWrapper>
      <CityList>
        {loader && <Loader />}

        {Array.isArray(cityList) &&
          cityList.map((item, i) => {
            const { city, countryCode } = item;
            return (
              <CityListItem
                key={i}
                onClick={() => {
                  dispatch(change("city", "city", city));
                  setCityList(null);
                  getDaysWeather(city).then((response) =>
                    console.debug(response)
                  );
                }}
              >
                {city}, {countryCode}
              </CityListItem>
            );
          })}
      </CityList>
    </Container>
  );
};

export default connect(
  null,
  null
)(
  reduxForm({
    form: "city",
  })(CityField)
);
