// combine reducers

import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form'; //calls reducer created by redux-form (change name to specify)
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    // form: formReducer,
});
