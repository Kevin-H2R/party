import { Link } from "react-router-dom"
import { HomeContainer } from '../components/home/home.style'

const Home = () => {
  return <HomeContainer className="flex flex-col p-8">
    <div className="flex justify-between">
      <div>Eventful</div>
      <div className="flex gap-4">
        <div>Main</div>
        <div>About us</div>
        <Link to="login">Sign up / Sign in</Link>
      </div>
    </div>
    <div className="flex grow flex-col justify-center">
      <div>CREATE UNFORGETABLE EVENTS.</div>
      <div>Become the best host - invite friends, and start making lasting memories today.</div>
      <Link to="login">Create a New Event</Link>
    </div>
    <div className="flex">Toto</div>
  </HomeContainer>
}

export default Home