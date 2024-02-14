import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "./config"
import { useState, useEffect } from "react"
import Home from "./Home"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [googleValue, setGoogleValue] = useState()

  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setGoogleValue(result.user.email)
        localStorage.setItem("user", JSON.stringify(result.user.email))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const userGoogle = JSON.parse(localStorage.getItem("user"))
    if (userGoogle) {
      setGoogleValue(userGoogle)
    }
  }, [])

  return (
    <>
      {googleValue ? (
        <Home />
      ) : (
        <div>
          <button onClick={handleGoogleAuth}>Sign In with Google</button>
          <Link to="/signup">Sign In with Email</Link>
        </div>
      )}
    </>
  )
}
export default SignIn
