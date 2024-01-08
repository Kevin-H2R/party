import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const JoinParty = () => {
  const {salt} = useParams() 
  const [party, setParty] = useState(null)
  const [loading, setLoading] = useState(true)

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  useEffect(() => {
    const fetchParty = async () => {
      const party = await axios.get(import.meta.env.VITE_API_URL + '/parties/' + salt)
      setParty(party.data)
      setLoading(false)
    }
    fetchParty()
  }, [salt])

  const joinParty = async () => {
    await axios.post(import.meta.env.VITE_API_URL + '/parties/join', {firstname, lastname, email, phoneNumber, partyId: party.id})
  }

  return <>
    {!loading && <>
      <div>{party.name}</div>
      <div>{party.start_date}</div>
      <div>{party.location}</div>
      <div>{party.capacity}</div>
      <div>{party.name}</div>

      <form>
        <input type="text" placeholder="Firstname" 
          value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        <input type="text" placeholder="Lastname" 
          value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        <input type="email" placeholder="Email" 
          value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="phone" placeholder="Phone" 
          value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <button type="submit" onClick={(e) => {e.preventDefault(); joinParty()}}>
          Join
        </button>
      </form>
      </>
    }
  </>
}

export default JoinParty