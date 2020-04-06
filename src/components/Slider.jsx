import React from "react";
import styled from "styled-components";
import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";
import {sliderData} from "./WeatherScreen";
const Container = styled.div`
  display: flex;
  width: ${(props) => `${props.width}0%`};
  padding: 50px;
  margin: auto;
  .rc-slider-mark {
    left: -33px;
  }
`;

const railStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
const trackStyle = {
  backgroundColor: "#000",
};
const dotStyle = {
  border: "2px solid #000",
};
const markStyle = {
  color: "#000",
  fontFamily: "OpenSans,sans-serif",
  fontSize: "23px",
  strong: {
    fontSize: "16px",
    marginLeft: "2px",
  },
};

export const Slider = () => {
  const slider = sliderData.get() ? sliderData.get(): [];

  let hoursCount = slider.length;
  let data = {};
  let step;
  for (let i = 0; i < hoursCount; i++) {
    step = 100 / hoursCount;
    const { hour } = slider[i];

    data[step * (i + 1)] = {
      style: markStyle,
      label: (
        <span>
          {parseFloat(hour)}
          <strong style={markStyle.strong}>
            {hour.split(parseFloat(hour))[1]}
          </strong>{" "}
        </span>
      ),
    };
  }

  return (
    <Container width={hoursCount}>
      <RcSlider
        handleStyle={dotStyle}
        dotStyle={dotStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        marks={data}
        step={null}
        onAfterChange={(splitedCount) => {
          // sliderWasChange(splitedCount, step);
        }}
      />
    </Container>
  );
};
