import {FETCH_POSTS} from '../actions/index.js';
import {FETCH_IND_POST} from '../actions/index.js';

const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return {...state, all: action.payload.data}
		case FETCH_IND_POST:
			return {...state, post: action.payload.data}
		default:
			return state;
	}
}