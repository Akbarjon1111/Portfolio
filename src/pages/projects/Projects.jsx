import "./Projects.css";
import { GoArrowRight } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-info">
        <div className="info">
          <h2>PROJECTS</h2>
          <h1>
            I bring results. <br /> My clients are proof.
          </h1>
        </div>
        <div className="btn">
          <button>View all projects</button>
        </div>
      </div>
      <div className="project-carts">
        <div className="carts">
          <div className="cart-img">
            <img src="../../../src/assets/cart-img4.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Branding</h3>
            <h2>Soulful Rebrand</h2>
            <a href="/">View Project <GoArrowRight /></a>
          </div>
        </div>
        <div className="carts">
          <div className="cart-img">
            <img src="../../../src/assets/cart-img5.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Product Design</h3>
            <h2>Datadash Product design</h2>
            <a href="/">View Project <GoArrowRight /></a>
          </div>
        </div>
        <div className="carts">
          <div className="cart-img">
            <img src="../../../src/assets/cart-img4.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Web Design</h3>
            <h2>Maize Website Design</h2>
            <a href="/">View Project <GoArrowRight /></a>
          </div>
        </div>
      </div>
      <div className="left-right">
        <button><FaAngleLeft /></button>
        <button><FaAngleRight /></button>
      </div>
    </div>
  );
};

export default Projects;
