import {combineReducers} from 'redux'
import {handleActions} from "redux-actions";
import { reducer as formReducer } from 'redux-form'

const defaultState = {

};

const reducer = handleActions(
    {
        'SET_CURRENT_CITY': (state, {payload}) => {
            return {...state,currentCity: payload}
        }
    }, defaultState);

const rootReducer = combineReducers({
    reducer,
	form: formReducer
});
export default rootReducer;