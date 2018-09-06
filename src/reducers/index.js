import { combineReducers } from 'redux';
import stories from './stories';
import habits from './habits';

export default combineReducers({
    stories,
    habits
})