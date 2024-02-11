import { Link } from "react-router-dom"
import { HomeContainer } from '../components/home/home.style'
import landing from "../assets/landing.jpg"
import { FaInstagram } from "react-icons/fa";
const Home = () => {
  return <HomeContainer className="flex">
    <div className="flex flex-col basis-1/3 justify-between h-screen p-8 left-pane">
      <div>Moyeo</div>
      <div className="flex flex-col gap-8">
        <div className="text-5xl leading-snug">CREATE UNFORGETABLE EVENTS.</div>
        <div className="dm-sans">
          Become the best host - invite friends, and start making lasting memories today.
        </div>
        <div className="flex">
          <button className="rounded-full grow-0 px-4 py-2 text-black text-sm">
            <Link to="login" className="hover:text-black">Create a New Event</Link>
          </button>
        </div>
      </div>
      <div></div>
    </div>
    <div className="flex flex-col basis-2/3 justify-between h-screen p-8 right-pane">
      <div className="flex gap-4 items-center justify-end">
          <div className="text-sm">Home</div>
          <div className="text-sm">About us</div>
          <button className="rounded-full grow-0 px-4 py-2 text-sm text-black">
            <Link to="login" className="hover:text-black">Sign up / Sign in</Link>
          </button>
      </div>
      <div className="flex justify-center">
        <img className="main-image" src={landing}/>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <div className="text-xs">Pricing</div>
        <div className="text-xs">Contact</div>
        <div className="text-xs">Help</div>
        <FaInstagram/>
        <FaInstagram/>
        <FaInstagram/>
        <FaInstagram/>
      </div>
    </div>
  </HomeContainer>
}

export default Home