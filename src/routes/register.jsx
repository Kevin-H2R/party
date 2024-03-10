import axios from "axios"
import { useState } from "react"
import { LoginContainer } from "../components/login/login.style"
import Card from "../components/common/card"
import StepOne from "../components/register/StepOne"
import StepTwo from "../components/register/StepTwo"

const Register = () => {
  const [step, setStep] = useState(0)

  return <LoginContainer className="flex h-screen justify-center items-center p-2">
    <Card className="flex flex-col items-center w-full md:w-9/12 lg:w-6/12 xl:w-4/12">
      {step === 0 && <StepOne nextStep={() => {setStep(1)}} />}
      {step === 1 && <StepTwo nextStep={() => {setStep(2)}} />}
    </Card>
  </LoginContainer>
}

export default Register