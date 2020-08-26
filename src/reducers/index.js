import { combineReducers } from 'redux';
import { posts } from './postsReducer';

const RootReducer = combineReducers({
    posts,
});

export default RootReducer;