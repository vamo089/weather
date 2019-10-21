import {createActions} from "redux-actions";

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
		dispatch(setSlider(hourly))
	}
};