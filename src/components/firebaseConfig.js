
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBd1aXr41EDFR4nNWnVUs4kkEf2nRVuPF8",
  authDomain: "reactauth-13752.firebaseapp.com",
  projectId: "reactauth-13752",
  storageBucket: "reactauth-13752.appspot.com",
  messagingSenderId: "269864762375",
  appId: "1:269864762375:web:5189ea21c5c43ad647fea2",
  measurementId: "G-K6DRVJ94ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };