import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Socials = ({ icon }) => {
  return (
    <div className="socials">
      <div className="socials-icon-wrapper">{icon}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <Socials icon={<AiFillInstagram />} />
        <Socials icon={<FaFacebookF />} />
        <Socials icon={<FaXTwitter />} />
      </div>
      <div className="footer-text">
        <p>Crafting excellence, one fly at a time - Aba-Fly-Fishing.</p>
      </div>
    </div>
  );
};

export default Footer;
