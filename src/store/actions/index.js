import {createActions} from "redux-actions";
import {change} from 'redux-form'

export const {
	setCurrentCity,
	setCityWeather,
	saveDailyWeather,
	saveCityList
} = createActions(
	{
		'SET_CURRENT_CITY': payload => payload,
		'SET_CITY_WEATHER': payload => payload,
		'SAVE_DAILY_WEATHER': payload => payload,
		'SAVE_CITY_LIST': payload => payload
	},
);


export const initialization = () => {
	return dispatch => {
		detectCityRequest()
			.then(({city}) => {
				const fullCityName = `${city}`;
				dispatch(change('city', 'city', fullCityName));
				dispatch(setCurrentCity(fullCityName));
				getCityWeatherRequest(fullCityName)
					.then(cityData => dispatch(setCityWeather(cityData)));
				getDaysWeather(city).then(list => dispatch(saveDailyWeather(list)));
			})
	}
};

const detectCityRequest = () => {
	return fetch('http://api.ipstack.com/check?access_key=a1ed31cbc1c7e25105c08430110aab50')
		.then(response => response.json());
};

const getCityWeatherRequest = city => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)
		.then(response => {
			return response.json()
		}).then(data => {
			if (data.cod === 200) {
				const {main: {temp}, weather} = data;
				const {icon, description, main} = weather[0];
				return {
					temp: temp.toFixed(1),
					icon, description, main
				}
			}
		});
};

const getDaysWeather = (city) => {
	return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b9c419a5c04ecd308756f920bb6aa987`)
		.then(response => {
			return response.json()
		}).then(data => data.list)
};

export const getCitiesList = ({target}) => {
	return dispatch => {
		const {value} = target;
		if (value) {
			dispatch(saveCityList({loader: true}));
			const cityList = [];
			fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`, {
				"headers": {
					"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
					"x-rapidapi-key": "5dfbe0fb22msh73b75a7c5fb4eb4p14268ajsn2c16ebc4028b"
				}
			})
				.then(response => response.json())
				.then(({data}) => {
					data.forEach((item, i) => {
						const {city} = item;
						getCityWeatherRequest(city)
							.then((response) => {
								if(response){
									cityList.push(item);
									if (i === data.length - 1) {
										dispatch(saveCityList({loader:false,data:cityList}));
									}
								}
							});
					});
				});
		}
	}
};