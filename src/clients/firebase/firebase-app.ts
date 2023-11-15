import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSSm0H_g1AUjZFWxSGvCGsLMVQ7l3y81g",
  authDomain: "engineering-hub-api.firebaseapp.com",
  databaseURL: "https://engineering-hub-api-default-rtdb.firebaseio.com",
  projectId: "engineering-hub-api",
  storageBucket: "engineering-hub-api.appspot.com",
  messagingSenderId: "375536364338",
  appId: "1:375536364338:web:b100abfbfd14128d7f852b",
};

// initialize firebase
export const firebaseApp = initializeApp(firebaseConfig);

// initialize and export auth object
export const auth = getAuth(firebaseApp);
