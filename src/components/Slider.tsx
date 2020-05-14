import React, {useEffect} from "react";
import styled from "styled-components";
import RcSlider, { Marks } from "rc-slider";
import "rc-slider/assets/index.css";
import { sliderData } from "./WeatherScreen";
import { weatherScreenData } from "App";
import { DailyInterface } from "services/getDaysWeather";
const Container = styled.div<{ width: number }>`
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
  const slider = sliderData.get();
  const { hoursCount, data, step } = MarksData(slider);
  useEffect(()=>{
    weatherScreenData.set(slider[0]);
  },[slider]);
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
          const mainScreenData = slider[splitedCount / step - 1];
          weatherScreenData.set(mainScreenData);
        }}
      />
    </Container>
  );
};

type MarksType = (
  slider: DailyInterface[]
) => {
  hoursCount: number;
  step: number;
  data: Marks;
};

const MarksData: MarksType = (slider) => {
  let hoursCount = slider.length;
  let data: Marks = {};
  let step: number = 0;
  for (let i = 0; i < hoursCount; i++) {
    step = 100 / hoursCount;
    const { hour } = slider[i];

    data[step * (i + 1)] = {
      style: markStyle,
      label: (
        <span>
          {parseInt(hour)}
          <strong style={markStyle.strong}>
            {hour.split(parseInt(hour).toString())[1]}
          </strong>{" "}
        </span>
      ),
    };
  }
  return { hoursCount, step, data };
};
