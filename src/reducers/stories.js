import { RECEIVE_STORIES } from '../constants/action_types';

//story reducer to fectch stories on receive story action.
const byId = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STORIES:
            return {
                ...state, 
                ...action.stories.reduce((obj, story) => {
                    obj[story.id] = story;
                    return obj;
                }, {})
            };
        default:
            return state;
    }
}

export default byId;