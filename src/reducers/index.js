import {combineReducers} from 'redux';
import reducer_post from './reducer_post.js';

const rootReducer = combineReducers({
	posts: reducer_post
});

export default rootReducer;