const Home = () => {
  const handleSignOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <div>
      You are logged in
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
export default Home
