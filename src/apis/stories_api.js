import _stories from './stories.json';

const TIMEOUT = 100;

export default {
    getStroies: (cb, timeout) => setTimeout(() => cb(_stories), timeout || TIMEOUT)
}

// {
//     "id": 2, 
//     "title": "Story 2",
//     "description": "Do you know story 2?",
//     "habits": [
//         {
//             "id": 4,
//             "title": "habit 4"
//         }
//     ]
// },
// {
//     "id": 3, 
//     "title": "Story 3",
//     "description": "Do you know story 3?",
//     "habits": [
//         {
//             "id": 5,
//             "title": "habit 5"
//         },
//         {
//             "id": 6,
//             "title": "habit 6"
//         }
//     ]
// }