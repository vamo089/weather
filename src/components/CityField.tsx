import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from "./Loader";
import { getCitiesList } from "services/getCitiesList";
import { useSelector } from "store";

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

interface CityListProps {
  city: string;
  countryCode: string;
}

let CityField = () => {
  const cityList = useSelector<CityListProps[]>(state => state.cityList);
  return (
    <Container>
      <InputWrapper>
        <Field
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
            console.debug(getCitiesList(target.value));
          }}
          placeholder="city"
          name="city"
          component="input"
          autoComplete="off"
        />
      </InputWrapper>
      <CityList>
        {cityList && !cityList.length && <Loader />}
        {cityList &&
          cityList.map((item, i) => {
            const { city, countryCode } = item;
            return (
              <CityListItem
                key={i}
                onClick={() => {
                  // setWeatherFromList(i);
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
    form: "city"
  })(CityField)
);
