import {combineReducers} from 'redux';
import reducer_post from './reducer_post.js';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
	reducer_post, 
	formReducer
});

export default rootReducer;