import {createActions} from "redux-actions";

export const {
	setCurrentCity
} = createActions(
	{
		'SET_CURRENT_CITY': payload => payload
	},
);



export const initialization = () => {
	return (dispatch,getState) =>{
		dispatch(setCurrentCity())
	}
};