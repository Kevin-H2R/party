import { Link } from "react-router-dom"
import { HomeContainer } from '../components/home/home.style'

const Home = () => {
  return <HomeContainer className="flex flex-col p-8">
    <div className="flex justify-between">
      <div>Eventful</div>
      <div className="flex gap-4 items-center">
        <div className="text-sm">Main</div>
        <div className="text-sm">About us</div>
        <button className="rounded-full grow-0 px-4 py-2 text-sm text-black">
          <Link to="login" className="hover:text-black">Sign up / Sign in</Link>
        </button>
      </div>
    </div>
    <div className="flex grow">
    <div className="flex grow-0 flex-col justify-center basis-6/12 gap-8">
      <div className="text-5xl">CREATE UNFORGETABLE EVENTS.</div>
      <div className="dm-sans">
        Become the best host - invite friends, and start making lasting memories today.
      </div>
      <div className="flex">

      <button className="rounded-full grow-0 px-4 py-2 text-black text-sm">
        <Link to="login" className="hover:text-black">Create a New Event</Link>
      </button>
      </div>
    </div>
    </div>
    <div className="flex justify-end">Toto</div>
  </HomeContainer>
}

export default Home