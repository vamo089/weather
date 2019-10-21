import {getCityWeatherRequest,getDaysWeather, saveDailyWeather, setCityWeather} from "./index";
import {createActions} from "redux-actions";
import {change} from "redux-form";


export const {
	saveCityList
} = createActions(
	{
		'SAVE_CITY_LIST': payload => payload
	},
);

let getCitiesListDelay;

export const getCitiesList = ({target}) => {
	return dispatch => {
		const {value} = target;
		const SUGGESTION_DELAY_TIME = 500;

		if (value) {
			dispatch(saveCityList([]));

			if (!getCitiesListDelay) {
				getCitiesListDelay = setTimeout(() => {
					dispatch(getCitiesListRequest(value))
				}, SUGGESTION_DELAY_TIME);
			} else {
				clearTimeout(getCitiesListDelay);
				getCitiesListDelay = setTimeout(() => {
					dispatch(getCitiesListRequest(value))
				}, SUGGESTION_DELAY_TIME);
			}
		}
	}
};

const getCitiesListRequest = (value) =>{
	return dispatch =>{
		const cityList = [];
		fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}`, {
			"headers": {
				"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
				"x-rapidapi-key": "5dfbe0fb22msh73b75a7c5fb4eb4p14268ajsn2c16ebc4028b"
			}
		})
			.then(response => response.json())
			.then(({data}) => {
				if(data.length){
					data.forEach((item, i) => {
						const {city} = item;
						getCityWeatherRequest(city)
							.then((response) => {
								const lastRequest = data[data.length - 1].city === city;
								if (response) {
									response.countryCode = item.countryCode;
									cityList.push(response);
								}
								if (lastRequest) {
									dispatch(saveCityList(cityList));
								}
							})
					});
				}else{
					dispatch(saveCityList(null));
				}
			});
	}
};

export const setWeatherFromList = (id) => {
	return (dispatch,getState) => {
		const {cityList} = getState().reducer;
		const cityName = cityList[id].city;
		dispatch(change('city', 'city', cityName));
		dispatch(setCityWeather(cityList[id]));
		dispatch(saveCityList(null));
		getDaysWeather(cityName).then(list => dispatch(saveDailyWeather(list)))
	}
};