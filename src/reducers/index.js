import { combineReducers } from 'redux';
import stories from './stories';
import habits from './habits';
import quiz from './quiz';

export default combineReducers({
    stories,
    habits,
    quiz
})