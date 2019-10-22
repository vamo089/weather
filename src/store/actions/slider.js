import {createActions} from "redux-actions";
import {setCityWeather} from "./index";

export const {
	setSlider,
} = createActions(
	{
		'SET_SLIDER': payload => payload,
	},
);

export const openHourlySlider  = id =>{
	return (dispatch,getState) =>{
		const {dailyWeather} = getState().reducer;
		const {hourly} = dailyWeather[id];
		dispatch(setSlider(hourly));
		const {slider} = getState().reducer;
		dispatch(setCityWeather(slider[0]));
	}
};

export const sliderWasChange = (splitedCount,step) =>{
	return  (dispatch,getState) =>{
		const stepNumber = splitedCount/step;
		const {slider} = getState().reducer;

		dispatch(setCityWeather(slider[stepNumber - 1]));
	}
};