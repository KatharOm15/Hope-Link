import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCtXV1ViFDv0OgFXsXY0L1Iuylj0O94T4A",
  authDomain:"hopelink-photo.firebaseapp.com",
  projectId:"hopelink-photo",
  storageBucket:"hopelink-photo.appspot.com",
  messagingSenderId:"545394986062",
  appId:"1:545394986062:web:aa35434712f04866b4871f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);