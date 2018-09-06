import _stories from './stories.json';

const TIMEOUT = 100;

export default {
    getStroies: (cb, timeout) => setTimeout(() => cb(_stories), timeout || TIMEOUT)
}

