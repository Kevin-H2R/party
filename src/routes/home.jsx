import { Link } from "react-router-dom"
import { HomeContainer, HomeContainerMobile } from '../components/home/home.style'
// import landing from "../assets/landing.jpg"
import { FaInstagram } from "react-icons/fa";
import { Button } from "../components/common/button";
import { useEffect, useState } from "react";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener("resize", handleResize)
  })

  return isMobile ? <HomeContainerMobile className="flex flex-col p-4 h-screen">
    <div className="flex justify-between items-center mb-6">
      <div>Logo</div>
      <Button $primary $rounded>
        <Link to="login" className="hover:text-black">Sign in</Link>
      </Button>
    </div>
    <div className="flex text-3xl">CREATE</div>
    <div className="flex text-3xl">UNFORGETTABLE</div>
    <div className="flex text-3xl text-gradient mb-4">EVENTS.</div>
    <div className="flex dm-sans font-normal mb-4">Invite friends over and start making lasting memories today.</div>
    <div className="flex justify-center mb-10">
      <Button $primary $rounded>
        <Link to="login" className="hover:text-black">Create a New Event</Link>
      </Button> </div>
    <img className="gather-image" src="/gather.jpg"/>
    <div className="grow"></div>
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div>Pricing</div>
        <div>Help</div>
      </div>
      <div className="flex gap-3">
        <FaInstagram/>
        <FaInstagram/>
        <FaInstagram/>
      </div>
    </div>
  </HomeContainerMobile> :
  <HomeContainer className="flex">
    <div className="flex flex-col w-2/5 justify-between h-screen p-8 left-pane">
      <div>Moyeo</div>
      <div className="flex flex-col gap-8">
        <div className="text-5xl leading-snug">CREATE UNFORGETABLE <span className="text-gradient">EVENTS.</span></div>
        <div className="dm-sans font-normal">
          Become the best host - invite friends, and start making lasting memories today.
        </div>
        <div className="flex">
          <Button $primary $rounded>
            <Link to="login" className="hover:text-black">Create a New Event</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="text-xs">Pricing</div>
          <div className="text-xs">Help</div>
        </div>
        <div className="flex gap-4">
          <FaInstagram/>
          <FaInstagram/>
          <FaInstagram/>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-3/5 justify-between h-screen p-8 right-pane">
      <div className="flex gap-4 items-center justify-end">
          <div className="text-sm">About us</div>
          <div className="text-sm">Contact</div>
          <Button $primary $rounded>
            <Link to="login" className="hover:text-black">Sign up / Sign in</Link>
          </Button>
      </div>
    </div>
  </HomeContainer>
}

export default Home