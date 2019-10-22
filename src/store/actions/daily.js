import moment from 'moment';
import {saveDailyWeather} from "./index";

export const formDailyWeather = (days) => {
	return dispatch => {
		let dayFlag;
		let dailyCollection = [];

		days.forEach(item => {
			const date = moment.unix(item.dt);
			const day = date.day();
			const dayName = date.format('dddd');
			const hour = date.format('hha');

			if (day !== dayFlag) {
				dailyCollection.push({day: dayName, hourly: []});
				dayFlag = day;
			}

			if (day === dayFlag) {
				const {description, icon, main} = item.weather[0];
				const some = dailyCollection.filter(item => item.day === dayName)[0];

				some.hourly.push({
					dayName,
					main, icon,
					hour, description,
					temp: item.main.temp.toFixed(1)
				});
			}
		});
		dispatch(saveDailyWeather(dailyCollection))
	}
};