import "./Header.css";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a>
          Portfolio Creator<span>.</span>
        </a>
      </div>
      <div className="nav">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#" className="call">
            Book a call <GoArrowRight />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Header;
