import axios from "axios"
import { useState } from "react"
import AddPackage from "../components/add-package"

const NewParty = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [maxGuest, setMaxGuest] = useState(0)
  const [packages, setPackages] = useState([])

  const createParty = () => {
    if (!name || !date || !location || !maxGuest) {
      return
    }
    axios.post(import.meta.env.VITE_API_URL + '/parties', {
      name, start_date: date, location, capacity: maxGuest
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  const addPackage = (name, description, price) => {
    setPackages([...packages, {name, description, price}])
  }

  return <>
    <h1 className="text-8xl font-bold underline">New party</h1>
    <form className="flex flex-col gap-2">
      <input type="text" placeholder="Event name" required 
        value={name} onChange={e => setName(e.target.value)}/>
      <input type="datetime-local" value={date} required
        onChange={e => setDate(e.target.value)}/>
      <input type="text" placeholder="Location" required
        value={location} onChange={e => setLocation(e.target.value)}/>
      <input type="number" placeholder="Max guest number" required
        value={maxGuest} onChange={e => setMaxGuest(e.target.value)}/>
      <h3 className="text-2xl">Packages</h3>
      {packages.map((p, index) => <div className="flex gap-2" key={'package_' + index}>
        <div className="text-xl">{p.name}</div>
        <div className="text-lg">{p.description}</div>
        <div className="text-2xl font-bold">{p.price}</div>
      </div>)}
      <AddPackage validate={addPackage}/>
      <button type="submit" onClick={e => {e.preventDefault(); createParty()}}>
        Create
      </button>
    </form>
  </>
}

export default NewParty