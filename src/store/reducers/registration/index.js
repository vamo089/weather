import {handleActions} from 'redux-actions';

const defaultState = {

};

const reducer = handleActions(
    {
        'REGISTRATION/ORGANIZATION_VALIDATION': (state, action) => {
            // some
        }
    }, defaultState);

export default reducer;