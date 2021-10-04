// this file combines all the reducers into one file

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;