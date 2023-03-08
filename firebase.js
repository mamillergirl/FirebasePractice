//import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2bvKiwKidpCPgSW3W9Qo2Mu-fZWfx32Y",
  authDomain: "testapp-45ae8.firebaseapp.com",
  databaseURL: "https://testapp-45ae8-default-rtdb.firebaseio.com",
  projectId: "testapp-45ae8",
  storageBucket: "testapp-45ae8.appspot.com",
  messagingSenderId: "647593563492",
  appId: "1:647593563492:web:40b6f47ad49320064e5671",
  
};



const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db}