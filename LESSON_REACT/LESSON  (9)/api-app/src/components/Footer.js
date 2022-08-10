import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";
import inLogo from "../icons/in.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-xl-12">
          <div className="footer-img">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={inLogo} alt="inLogo" />
          </div>
          <div className="footer-link">
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
