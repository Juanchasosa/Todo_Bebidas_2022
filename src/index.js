import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/CartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHQa2YRJ65eDmE-homJ5FcMtYCX7JNhA",
  authDomain: "todo-bebidas-ecommerce.firebaseapp.com",
  projectId: "todo-bebidas-ecommerce",
  storageBucket: "todo-bebidas-ecommerce.appspot.com",
  messagingSenderId: "298248373788",
  appId: "1:298248373788:web:b2bf1b2491993677df41d9",
  measurementId: "G-XD0TJTRVQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CartContextProvider>
    <App />
  </CartContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
