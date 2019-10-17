import {createActions} from "redux-actions";
import {change} from 'redux-form'

export const {
	setCurrentCity,
	setCityWeather,
	saveDailyWeather
} = createActions(
	{
		'SET_CURRENT_CITY': payload => payload,
		'SET_CITY_WEATHER': payload => payload,
		'SAVE_DAILY_WEATHER': payload => payload
	},
);


export const initialization = () => {
	return dispatch => {
		detectCityRequest()
			.then(({city, country_name}) => {
				const fullCityName = `${city},${country_name}`;
				dispatch(change('city', 'city', fullCityName));
				dispatch(setCurrentCity(fullCityName));
				getCityWeatherRequest(fullCityName)
					.then(cityData => dispatch(setCityWeather(cityData)))
				getDaysWeather(city).then(list => dispatch(saveDailyWeather(list)));
			})
	}
};

const detectCityRequest = () => {
	return fetch('http://api.ipstack.com/check?access_key=a1ed31cbc1c7e25105c08430110aab50')
		.then(response => response.json())
};

const getCityWeatherRequest = city => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)
		.then(response => {
			return response.json()
		}).then(data => {
			const {main: {temp}, weather} = data;
			const {icon, description,main} = weather[0];
			return {
				temp: temp.toFixed(1),
				icon, description,main
			}
		});
};

const getDaysWeather = (city) =>{
	return  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)
		.then(response => {
			return response.json()
		}).then(data => data.list)
};