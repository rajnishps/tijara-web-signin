import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth"

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
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const emailProvider = new EmailAuthProvider()
export { auth, googleProvider, emailProvider }
// const analytics = getAnalytics(app)
