import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import apiKey from '../apiKey'

firebase.initializeApp({
  apiKey,
  authDomain: "yolior-cbd5a.firebaseapp.com",
  projectId: "yolior-cbd5a",
  storageBucket: "yolior-cbd5a.appspot.com",
  messagingSenderId: "220584793175",
  appId: "1:220584793175:web:60650a3ea5c895e4a27f12",
  measurementId: "G-ZR39J60S6L"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()