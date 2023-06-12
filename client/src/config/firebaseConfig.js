import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCN1TQWi6_PaipLQAJgDmZ1izGveYsDupM",
    authDomain: "firstauth-e6642.firebaseapp.com",
    projectId: "firstauth-e6642",
    storageBucket: "firstauth-e6642.appspot.com",
    messagingSenderId: "514824542711",
    appId: "1:514824542711:web:86a97eac833ca9600f36f2"
};

const app = initializeApp(firebaseConfig);
const googleAuth = getAuth(app)
export default googleAuth