import {combineReducers} from 'redux'

import {handleActions} from "redux-actions";

const defaultState = {

};

const reducer = handleActions(
    {
        'SET_CURRENT_CITY': (state, action) => {
            return state
        }
    }, defaultState);

const rootReducer = combineReducers({
    reducer
});
export default rootReducer;