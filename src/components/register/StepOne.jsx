import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../common/button"

const StepOne = ({nextStep}) => {
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")

  const validate = () => {
    setError("")
    if (confirm !== password) {
      setError("Password and confirmation do not match")
      return
    }
    nextStep({email, firstname, lastname, password})
  }

  return <>
    <div className="flex p-6 w-full title justify-center">Welcome to Moyeo</div>
    <form className="flex flex-col p-6 gap-4 w-full">
      <div>
        <input className="login-input grouped-input-top" type="text" placeholder="Firstname"
          value={firstname} onChange={e => setFirstname(e.target.value)}/>
      <input className="login-input grouped-input-bottom" type="text" placeholder="Lastname"
        value={lastname} onChange={e => setLastname(e.target.value)}/>
      </div>
      <input className="login-input" type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)}/>

      {/* <input className="login-input" type="phone" placeholder="Phone"
        value={phone} onChange={e => setPhone(e.target.value)}/> */}
      <div>
        <input className="login-input grouped-input-top" type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)}/>
        <input className="login-input grouped-input-bottom" type="password" placeholder="Confirm password"
          value={confirm} onChange={e => setConfirm(e.target.value)}/>
      </div>
      {error && <div className="text-red-600 text-sm font-normal">{ error }</div>}
      <Button $primary type="submit" onClick={e => {e.preventDefault(); validate()}}>
        Create a new account
      </Button>
      <Link to="/register" className="text-sm self-start">Already have an account? Log in</Link>
    </form>
  </>
}

export default StepOne