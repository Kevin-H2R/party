import { useState } from "react"
import { Button } from "../common/button";
import Select from 'react-select';

const StepTwo = ({nextStep}) => {
  const [countryCode, setCountryCode] = useState({value: "+ 82", label: "+ 82"})
  const [phone, setPhone] = useState("")

  const countryOptions = [
    {value: "+ 82", label: "+ 82"}
  ]
  return <>
    <div className="flex p-6 w-full title justify-center">Add your phone number</div>
    <div className="flex">
      <Select options={countryOptions} value={countryCode} 
        onChange={(e) => {setCountryCode(e)}}
        components={{
          IndicatorSeparator: () => null
        }}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            flexBasis: '33%'
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: 0
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            border: 'none',
            flexBasis: "33%",
            boxShadow: 'none',
            '&:hover': {
              border: 0
            }
          }),
          dropdownIndicator: base => ({
            ...base,
            color: "black",
            '&:hover': {
              color: 'black'
            },
            '& > svg': {
              width: '15px',
              height: '15px'
            }
          })
        }}
        />
      <input className="login-input" type="phone" placeholder="Phone"
          value={phone} onChange={e => setPhone(e.target.value)}/>
    </div>
    <Button $primary type="submit" onClick={e => {e.preventDefault(); nextStep()}}>
        Next
    </Button>
  </>
}

export default StepTwo