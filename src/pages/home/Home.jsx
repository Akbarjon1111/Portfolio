import "./Home.css"
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="home">
      <div className="home-info">
        <h1><span>I design products</span> that delight and inspire people.</h1>
        <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
        <div className="info-btns">
            <button>Book a call</button>
            <a href="/">Download CV <GoArrowRight /></a>
        </div>
      </div>
      <div className="home-img">
        <img src="../../../src/assets/person.png" alt="" />
      </div>
    </div>
  )
}

export default Home
