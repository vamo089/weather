import moment from 'moment'
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
	cityList: null
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
			return {...state,dailyWeather: saveDailyWeather(payload)}
		},
		'SAVE_CITY_LIST': (state, {payload}) => {
			return {...state,cityList: payload}
		}
	}, defaultState);


const saveDailyWeather = (days) => {
	let dayFlag;
	let dailyCollection = [];

	days.forEach((item, i) => {
		const date = moment.unix(item.dt);
		const day = date.day();
		const dayName = date.format('dddd');
		const hour = date.format('hha');

		if (day !== dayFlag) {
			dailyCollection.push({day: dayName, hourly: []});
			dayFlag = day;
		}

		if(day === dayFlag){
			const {description,icon,main} = item.weather[0];
			const some = dailyCollection.filter(item => item.day === dayName)[0];

			some.hourly.push({
				main, icon,
				hour, description,
				temp: item.main.temp.toFixed(1)
			});
		}
	});
	return dailyCollection
};

const rootReducer = combineReducers({
	reducer,
	form: formReducer
});
export default rootReducer;