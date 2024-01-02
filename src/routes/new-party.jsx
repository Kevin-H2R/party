import axios from "axios"
import { useState } from "react"

const NewParty = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [maxGuest, setMaxGuest] = useState(0)

  const createParty = () => {
    axios.post(import.meta.env.VITE_API_URL + '/parties', {
      name, start_date: date, location, capacity: maxGuest
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  return <>
    <h1>New party</h1>
    <form>
      <input type="text" placeholder="Event name" required 
        value={name} onChange={e => setName(e.target.value)}/>
      <input type="datetime-local" value={date} required
        onChange={e => setDate(e.target.value)}/>
      <input type="text" placeholder="Location" required
        value={location} onChange={e => setLocation(e.target.value)}/>
      <input type="number" placeholder="Max guest number" required
        value={maxGuest} onChange={e => setMaxGuest(e.target.value)}/>
      <button type="submit" onClick={e => {e.preventDefault(); createParty()}}>Create</button>
    </form>
  </>
}

export default NewParty