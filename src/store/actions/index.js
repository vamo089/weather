import {createActions} from "redux-actions";
import {change} from 'redux-form'
export const {
	setCurrentCity
} = createActions(
	{
		'SET_CURRENT_CITY': payload => payload
	},
);


export const initialization = () => {
	return dispatch => {
		detectCity().then(({city,country_name})=>{
			const fullCityName = `${city},${country_name}`;
			dispatch(change('city','city',fullCityName));
			dispatch(setCurrentCity(fullCityName))
		})
	}
};
const detectCity = () => {
	return fetch('http://api.ipstack.com/check?access_key=a1ed31cbc1c7e25105c08430110aab50')
		.then(response => {
			return response.json()
		})
};