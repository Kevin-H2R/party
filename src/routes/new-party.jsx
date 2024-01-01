import { useState } from "react"

const NewParty = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [maxGuest, setMaxGuest] = useState(0)
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
      <button type="submit" onClick={e => {e.preventDefault();}}>Create</button>
    </form>
  </>
}

export default NewParty