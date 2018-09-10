import { RECEIVE_QUIZ } from '../constants/action_types';
import _ from 'lodash';

//quiz reducer to fecth data with receive quiz action type
const byId = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_QUIZ:
            return [
                ...state,
                ..._.flatMap(action.quiz)
            ];
        default:
            return state;
    }
}

export default byId;
        