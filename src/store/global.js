import { combineReducers } from 'redux';
import Reducers from '../reducers';
import initialState from './initialState';

const appReducer = combineReducers({
	...Reducers,
});

const rootReducer = (state, action) => {
	if (action.type === 'GLOBAL_RESET') {
		return initialState;
	}
	if (action.type === 'LOCATION_CHANGE') {
		return state;
	}
	return appReducer(state, action);
};

export default rootReducer;