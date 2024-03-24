import axios from "axios"
import { useEffect, useState } from "react"
import { LoginContainer } from "../components/login/login.style"
import Card from "../components/common/card"
import StepOne from "../components/register/StepOne"
import StepTwo from "../components/register/StepTwo"

const Register = () => {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (step !== 2) return
    register()
  }, [step])

  const register = async () => {
    const response = await axios.post("http://localhost:3000/security/register", {email, password, firstname, lastname, phone})
    console.log(response)
  }

  const finishFirstStep = ({email, firstname, lastname, password}) => {
    setEmail(email)
    setFirstname(firstname)
    setLastname(lastname)
    setPassword(password)
    setStep(1)
  }

  const finishSecondStep = (phoneNumber) => {
    setPhone(phoneNumber)
    setStep(2)
  }

  return <LoginContainer className="flex h-screen justify-center items-center p-2">
    <Card className="flex flex-col items-center w-full md:w-9/12 lg:w-6/12 xl:w-4/12">
      {step === 0 && <StepOne nextStep={finishFirstStep} />}
      {step === 1 && <StepTwo nextStep={finishSecondStep} />}
    </Card>
  </LoginContainer>
}

export default Register