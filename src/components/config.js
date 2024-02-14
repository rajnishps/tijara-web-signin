// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnWvoDZGdbUK8YlBjwrw3D4FA-7rpx9Ys",
  authDomain: "tijara-web.firebaseapp.com",
  projectId: "tijara-web",
  storageBucket: "tijara-web.appspot.com",
  messagingSenderId: "1049374554890",
  appId: "1:1049374554890:web:057f9e847e75cf95a158f3",
  measurementId: "G-Q8X21Q7WJ7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
