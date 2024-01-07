import { useParams } from "react-router-dom"

const JoinParty = () => {
  const {salt} = useParams() 
  console.log(salt)
  return <></>
}

export default JoinParty