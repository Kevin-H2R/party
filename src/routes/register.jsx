import axios from "axios"
import { useState } from "react"
import { LoginContainer } from "../components/login/login.style"
import Card from "../components/common/card"
import { Link } from "react-router-dom"
import { Button } from "../components/common/button"

const Register = () => {
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const register = () => {
    if (password !== confirm) return
    axios.post(import.meta.env.VITE_API_URL + '/security/register', {
      email, firstname, lastname, phone, password
    }).then(() => {
      console.log("YEAH")
      window.location.href = '/login'
    }).catch(err => {
      console.log(err)
    })
  }

  return <LoginContainer className="flex h-screen justify-center items-center p-2">
    <Card className="flex flex-col items-center w-full md:w-9/12 lg:w-6/12 xl:w-4/12">
      <div className="flex p-6 w-full title justify-center">Welcome to Moyeo</div>
      <form className="flex flex-col p-6 gap-4 w-full">
        <div>
          <input className="login-input grouped-input-top" type="email" placeholder="Email"
            value={email} onChange={e => setEmail(e.target.value)}/>
          <input className="login-input grouped-input-bottom" type="text" placeholder="Firstname"
            value={firstname} onChange={e => setFirstname(e.target.value)}/>
        </div>
        <input className="login-input" type="text" placeholder="Lastname"
          value={lastname} onChange={e => setLastname(e.target.value)}/>
        <input className="login-input" type="phone" placeholder="Phone"
          value={phone} onChange={e => setPhone(e.target.value)}/>
        <input className="login-input" type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)}/>
        <input className="login-input" type="password" placeholder="Confirm password"
          value={confirm} onChange={e => setConfirm(e.target.value)}/>
        <Button $primary type="submit" onClick={e => {e.preventDefault(); register()}}>
          Create a new account
        </Button>
      </form>
      <Link to="/register" className="text-sm">Don&apos;t have an account? Sign up</Link>
    </Card>
  </LoginContainer>
}

export default Register