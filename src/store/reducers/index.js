import {combineReducers} from 'redux'
import {handleActions} from "redux-actions";
import {reducer as formReducer} from 'redux-form'

const defaultState = {
	weather: {
		city: null,
		temp: null,
		description: null,
		icon: null
	},
	cityList: null,
	slider: null
};

const reducer = handleActions(
	{
		'SET_CURRENT_CITY': (state, {payload}) => {
			return {...state, currentCity: payload}
		},
		'SET_CITY_WEATHER': (state, {payload}) => {
			return {...state, weather: payload}
		},
		'SAVE_DAILY_WEATHER': (state, {payload}) => {
			return {...state,dailyWeather: payload}
		},
		'SAVE_CITY_LIST': (state, {payload}) => {
			return {...state,cityList: payload}
		},
		'SET_SLIDER': (state, {payload}) => {
			return {...state,slider: payload}
		}
	}, defaultState);

const rootReducer = combineReducers({
	reducer,
	form: formReducer
});
export default rootReducer;