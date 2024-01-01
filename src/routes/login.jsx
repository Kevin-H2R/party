import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    console.log(email, password)
    axios.post(import.meta.env.VITE_API_URL + '/security/login', 
      {email, password}).then(response => {
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
      }).catch(err => {
        console.log(err)
      })
  }
  return <>
    <h1>Login</h1>
    <Link to="/register">register</Link>
    <form >
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
      <button type="submit" onClick={e => {e.preventDefault(); login()}}>Login</button>
    </form>
  </>
}

export default Login