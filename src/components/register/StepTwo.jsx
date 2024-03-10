import { useState } from "react"
import { Button } from "../common/button";

const StepTwo = ({nextStep}) => {
  const [phone, setPhone] = useState("")
  return <>
    <div className="flex p-6 w-full title justify-center">Add your phone number</div>
    <div className="flex">
      <div>+ 82</div>
      <input className="login-input" type="phone" placeholder="Phone"
          value={phone} onChange={e => setPhone(e.target.value)}/>
    </div>
    <Button $primary type="submit" onClick={e => {e.preventDefault(); nextStep()}}>
        Next
    </Button>
  </>
}

export default StepTwo