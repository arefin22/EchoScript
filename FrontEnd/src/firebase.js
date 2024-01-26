// firebase.js
"use client"
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD98DDe8F-nSVI-zd9T5wIr8fOYTw14Ov8',
  authDomain: 'echoscript-749f8.firebaseapp.com',
  projectId: 'echoscript-749f8',
  storageBucket: 'echoscript-749f8.appspot.com',
  messagingSenderId: '11234000401',
  appId: '1:11234000401:web:21caf85ec23f28dee5fbb0',
  measurementId: 'G-0S370YG5VV',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
