import "./Education.css";
import { GoArrowUpRight } from "react-icons/go";
import { PiRocketBold, PiMusicNoteFill, PiCrownLight } from "react-icons/pi";

const Education = () => {
  return (
    <div className="edu">
      <div className="edu-header">
        <h1>📚 Education</h1>
        <h1>💼 Work Experience</h1>
      </div>

      <div className="edu-cart">
        <div className="carts1">
          <div className="cart1">
            <div className="cart-heat">
              <h2>Stanford University</h2>
              <GoArrowUpRight className="right-icon" />
            </div>
            <div className="cart-foot">
              <h4>MSc (Human Computer Interaction)</h4>
              <h4>• 2013-2015</h4>
            </div>
          </div>
          <div className="cart1">
            <div className="cart-heat">
              <h2>MIT Summer School</h2>
              <GoArrowUpRight className="right-icon" />
            </div>
            <div className="cart-foot">
              <h4>UX Training Bootcamp</h4>
              <h4>• 2013-2014</h4>
            </div>
          </div>
          <div className="cart1">
            <div className="cart-heat">
              <h2>California State University</h2>
              <GoArrowUpRight className="right-icon" />
            </div>
            <div className="cart-foot">
              <h4>BSc in Software Engineering</h4>
              <h4>• 2009-2012</h4>
            </div>
          </div>
        </div>
        <div className="carts1">
          <div className="cart2">
            {/* <div className="cart-icon">
              <PiRocketBold />
            </div> */}
            <div className="cartsgroup">
              <div className="cart-heat">
                <h2>SpaceFleet</h2>
                <GoArrowUpRight className="right-icon" />
              </div>
              <div className="cart-foot">
                <h4>Senior Product Designer</h4>
                <h4>• April 2019 - Current</h4>
              </div>
            </div>
          </div>
          <div className="cart2">
            {/* <div className="cart-icon">
              <PiMusicNoteFill />
            </div> */}
            <div className="cartsgroup">
              <div className="cart-heat">
                <h2>MusicMash</h2>
                <GoArrowUpRight className="right-icon" />
              </div>
              <div className="cart-foot">
                <h4>Information Architect</h4>
                <h4>• April 2016 - May 2017</h4>
              </div>
            </div>
          </div>
          <div className="cart2">
            {/* <div className="cart-icon">
              <PiCrownLight />
            </div> */}
            <div className="cartsgroup">
              <div className="cart-heat">
                <h2>Kingdom</h2>
                <GoArrowUpRight className="right-icon" />
              </div>
              <div className="cart-foot">
                <h4>UI Designer</h4>
                <h4>• April 2016 - May 2017</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
