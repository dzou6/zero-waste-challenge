import * as types from '../constants/action_types';
import {storiesRef} from '../config/firebase';

const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
});

export const getAllStories = () => dispatch => {
    storiesRef.on("value", snapshot => {
        console.log(snapshot.val());
        dispatch(receiveStories(snapshot.val()));
    })
}

const receiveHabits = habits => ({
    type: types.RECEIVE_HABITS,
    habits
});

export const getAllHabits = () => dispatch => {
    storiesRef.on("value", snapshot => {
        dispatch(receiveHabits(snapshot.val().map(story => story.habits)))
    })
}