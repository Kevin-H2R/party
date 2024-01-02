import { useState } from "react"

const AddPackage = ({validate}) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const addPackage = () => {
    if (!name || !description || !price) {
      return
    }
    validate(name, description, price)
  }
  return <div className="flex">
    <input type="text" placeholder="Name" 
      value={name} onChange={e => setName(e.target.value)}/>
    <input type="text" placeholder="Description" 
      value={description} onChange={e => setDescription(e.target.value)}/>
    <input type="number" placeholder="Price"
      value={price} onChange={e => setPrice(e.target.value)}/>
    <button onClick={e => {e.preventDefault(); addPackage()}}>Add</button>
  </div>
}

export default AddPackage