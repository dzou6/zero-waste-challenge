import _stories from './stories.json';

const TIMEOUT = 100;

export default {
    //get all stoires from stories.json file
    getStroies: (cb, timeout) => setTimeout(() => cb(_stories), timeout || TIMEOUT)
}

