//import { initializeApp } from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCI7-IdjISnv9fGiKTf0hAPalYeEqnJpgI",
  authDomain: "air-quality-visualizatio-ac5e3.firebaseapp.com",
  databaseURL: "https://air-quality-visualizatio-ac5e3-default-rtdb.firebaseio.com",
  projectId: "air-quality-visualizatio-ac5e3",
  storageBucket: "air-quality-visualizatio-ac5e3.appspot.com",
  messagingSenderId: "1021489029158",
  appId: "1:1021489029158:web:bc412300b0e46ec80406e7",
  //measurementId: "G-BRETGGY0NT"
};
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database();
