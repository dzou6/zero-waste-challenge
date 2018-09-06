import * as types from '../constants/action_types';
import {storiesRef} from '../config/firebase';
import StoriesAPI from '../apis/stories_api';

//receive stories from redux thunk dispatch
const receiveStories = stories => ({
    type: types.RECEIVE_STORIES,
    stories
});

//handle action to fectch all stroies from firebase DB
export const getAllStories = () => dispatch => {
    //StoriesAPI.getStroies(stories => {
        //dispatch(receiveStories(stories))
    //})

    storiesRef.on("value", snapshot => {
         console.log(snapshot.val());
         dispatch(receiveStories(snapshot.val()));
     })
}

//receive habits from redux thunk dispatch
const receiveHabits = habits => ({
    type: types.RECEIVE_HABITS,
    habits
});

//handle action to fetch all habits from firebase DB
export const getAllHabits = () => dispatch => {
    //StoriesAPI.getStroies(stories => {
       // dispatch(receiveHabits(stories.map(story => story.habits)))
    //})

    storiesRef.on("value", snapshot => {
         dispatch(receiveHabits(snapshot.val().map(story => story.habits)))
     })
}