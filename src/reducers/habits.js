import { RECEIVE_HABITS } from '../constants/action_types';
import _ from 'lodash';

//habit reducer to fecth data with receve habit action type
const byId = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_HABITS:
            return {
                ...state,
                ..._.flatMap(action.habits).reduce((obj, habit) => {
                    obj[habit.id] = habit;
                    return obj;
                }, {})
            };
        default:
            return state;
    }
}

export default byId;
        