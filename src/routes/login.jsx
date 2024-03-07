import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginContainer } from "../components/login/login.style"
import { Button } from "../components/common/button"

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
  return <LoginContainer className="flex h-screen justify-center items-center p-2">
    <div className="card flex flex-col items-center w-full md:w-9/12 lg:w-6/12">
      <div className="flex p-6 w-full title justify-center">Welcome back!</div>
      <form className="flex flex-col p-6 gap-2 w-full">
        <input type="email" className="login-input placeholder:text-sm placeholder:font-medium"
          value={email} placeholder="Email"
          onChange={e => setEmail(e.target.value)}/>
        <input type="password" className="login-input placeholder:text-sm placeholder:font-medium"
          value={password} placeholder="Password"
          onChange={e => setPassword(e.target.value)}/>
        <Link to="/register" className="register-link text-center">Signup</Link>
        <Button $primary type="submit" onClick={e => {e.preventDefault(); login()}}>
          Login
        </Button>
      </form>
    </div>
    </LoginContainer>
}

export default Login