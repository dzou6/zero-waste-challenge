import * as firebase from "firebase";
import { FirebaseConfig} from './keys';

//initialize firebase
firebase.initializeApp(FirebaseConfig);

//create firebase db ref, and read stories from DB
const databaseRef = firebase.database().ref();
export const storiesRef = databaseRef.child('Stories');