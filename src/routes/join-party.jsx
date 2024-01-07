import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const JoinParty = () => {
  const {salt} = useParams() 
  const [party, setParty] = useState(null)
  useEffect(() => {
    const fetchParty = async () => {
      const party = await axios.get(import.meta.env.VITE_API_URL + '/parties/' + salt)
      setParty(party.data)
    }
    fetchParty()
  }, [])

  useEffect(() => {
    console.log(party)
  }, [party])
  return <></>
}

export default JoinParty