import axios from "axios"
import { useEffect, useState } from "react"

const Dashboard = () => {
  const [coming, setComing] = useState([])
  const [past, setPast] = useState([])
  useEffect(() => {
    const fetchDashboard = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/dashboard')
      const coming = []
      const past = []
      const today = new Date()
      response.data.forEach(p => {
        const date = new Date(p.start_date)
        date < today ? past.push(p) : coming.push(p)
      })
      setComing(coming)
      setPast(past)
    }
    fetchDashboard()
  }, [])
  return <div>
    <div>Coming</div>
    {coming.map(c => <>
      <div>{c.name}</div>
      <div>{c.start_date}</div>
      <div>{c.capacity}</div>
    </>)}
    <div>Past</div>
    
    {past.map(p => <>
      <div>{p.name}</div>
      <div>{p.start_date}</div>
      <div>{p.capacity}</div>
    </>)}
  </div>
}

export default Dashboard