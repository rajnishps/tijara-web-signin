import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "./config"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleEmailSignUp = async (e) => {
    e.preventDefault()
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        signUp.email,
        signUp.password
      )
      console.log(credentials)
      const user = credentials.user
      localStorage.setItem("token", user.accessToken)
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setSignUp({ ...signUp, email: e.target.value })
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setSignUp({ ...signUp, password: e.target.value })
        }}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => {
          setSignUp({ ...signUp, confirmPassword: e.target.value })
        }}
      />
      <button
        disabled={
          !signUp.email ||
          !signUp.password ||
          !signUp.confirmPassword ||
          signUp.password !== signUp.confirmPassword
        }
        onClick={(e) => {
          handleEmailSignUp(e)
        }}
      >
        Sign Up
      </button>
    </div>
  )
}
export default SignUp
