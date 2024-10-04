import "./Footer.css";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Ready to make something kickass?</h1>
        <h2>Let's get on a call.</h2>
      </div>
      <div className="footer-info">
        <div className="info-div">
          <h2>
            Portfolio Creator<span>.</span>
          </h2>
          <a href="https://maps.google.com" target="blank">
            4353 Delaware Avenue, San Francisco, USA
          </a>
          <a href="https://mail.google.com" target="blank" className="email">
            <MdEmail />
            hi@thefolio.com
          </a>
        </div>

        <div className="info-divs">
          <div className="info-div1">
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Dribbble</a>
          </div>
          <div className="info-div1">
            <a href="/">Services</a>
            <a href="/">Blog</a>
            <a href="/">Instagram</a>
          </div>
          <div className="info-div1">
            <a href="/">Experience</a>
            <a href="/">Projects</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © All rights reserved. Sumit Hegde . Powered by Webflow / Image
          License Info / Instructions / Changelog / Style Guide
        </p>
      </div>
    </div>
  );
};

export default Footer;
