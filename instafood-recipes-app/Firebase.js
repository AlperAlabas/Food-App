// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import "firebase/auth";


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZij2_t1bMrOp99SFAGlzfEIAWRBlN4s",
  authDomain: "food-c4c2f.firebaseapp.com",
  projectId: "food-c4c2f",
  storageBucket: "food-c4c2f.appspot.com",
  messagingSenderId: "382952621475",
  appId: "1:382952621475:web:d706cef166504e8e870616"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

//const authent = Auth; 


export {app};