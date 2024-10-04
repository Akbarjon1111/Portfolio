import "./Blogs.css"
import { GoArrowRight } from "react-icons/go";


const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-info">
        <h2>BLOGS</h2>
        <h1>Latest Blogs</h1>
        <a href="/">View all <GoArrowRight /></a>
      </div>
      <div className="blogs-carts">
        <div className="b-carts">
            <p>April 16, 2021 .6mins</p>
            <h1>Design tips for designers, that cover <br /> everything you need</h1>
            <a href="/">Read the article <GoArrowRight /></a>
        </div>
        <div className="b-carts">
            <p>April 16, 2021 .5mins</p>
            <h1>How to build rapport with your web design <br /> clients</h1>
            <a href="/">Read the article <GoArrowRight /></a>
        </div>
        <div className="b-carts">
            <p>April 16, 2021 .5mins</p>
            <h1>Top 6 free website mockup tools 2021</h1>
            <a href="/">Read the article <GoArrowRight /></a>
        </div>
        <div className="b-carts">
            <p>April 16, 2021 .7mins</p>
            <h1>Logo design trends to avoid in 2021</h1>
            <a href="/">Read the article <GoArrowRight /></a>
        </div>
        <div className="b-carts">
            <p>April 16, 2021 .7mins</p>
            <h1>22 best UI design tools</h1>
            <a href="/">Read the article <GoArrowRight /></a>
        </div>
      </div>
    </div>
  )
}

export default Blogs
