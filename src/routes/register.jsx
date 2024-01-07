import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

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

  return <>
    <h1>Register</h1>
    <Link to="/login">Login</Link>
    <form>
      <input type="email" placeholder="Email"
        value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="text" placeholder="Firstname"
        value={firstname} onChange={e => setFirstname(e.target.value)}/>
      <input type="text" placeholder="Lastname"
        value={lastname} onChange={e => setLastname(e.target.value)}/>
      <input type="phone" placeholder="Phone"
        value={phone} onChange={e => setPhone(e.target.value)}/>
      <input type="password" placeholder="Password"
        value={password} onChange={e => setPassword(e.target.value)}/>
      <input type="password" placeholder="Confirm password"
        value={confirm} onChange={e => setConfirm(e.target.value)}/>
      <button type="submit" onClick={e => {e.preventDefault(); register()}}>Register</button>
    </form>
  </>
}

export default Register