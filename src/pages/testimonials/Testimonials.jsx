import "./Testimonials.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="test-head">
        <h3>Testimonials</h3>
        <h1>Word on the street</h1>
      </div>
      <div className="test-info">
        <div className="info-img">
          <img src="../../../src/assets/odam.png" alt="" />
        </div>
        <div className="info-text">
          <img src="../../../src/assets/quote.png" alt="" />
          <h2>
            Jade helped us build a software so intuitive that it didn't need a
            walkthrough. He solved complex problems with brilliant design.
          </h2>

          <div className="text-div">
            <div className="div-info">
              <h4>John Frankin</h4>
              <p>Founder, Double Bunch</p>
            </div>
            <div className="div-btn">
              <button>
                <FaAngleLeft />
              </button>
              <button>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
