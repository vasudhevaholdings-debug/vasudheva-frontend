import { Link } from "react-router-dom";
import Logo from "../assets/hero/Logo.jpeg";  
import {
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1 */}
        <div className="footer-col">
  <div className="footer-brand">
    <img
      src={Logo}
      alt="Vasudheva Holdings Logo"
      className="footer-logo"
    />
    <h3>Vasudheva Holdings Pvt. Ltd.</h3>
  </div>

  <p className="footer-tagline">
    Parent & Holding Company of the Vasudheva Group
  </p>
</div>

        {/* Column 2 */}
      <div className="footer-col">
  <h4>Quick Links</h4>
  <Link to="/philosopy">Group & Philosophy</Link>
  <Link to="/services">Services & Solutions</Link>
  <Link to="/insights">Insights</Link>
  <Link to="/collaborate">Collaborate</Link>
</div>


        {/* Column 3 */}
        <div className="footer-col">
          <h4>Legal & Trust</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/trade">IP & Trademark Policy</Link>
          <Link to="/conduct">Code of Conduct</Link>
          <Link to="/grievance">Grievance Redressal</Link>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
        <a href="mailto:connect@vasudhevaholdings.com" className="footer-email"> connect@vasudhevaholdings.com</a>
        <a href="#connect" className="footer-phone">+91 8576929037</a>
        {/* <Link to="/profile" className="footer-profile">Our Experts</Link> */}
          <a href="https://maps.app.goo.gl/c5DfYzXkLQCGWUxb9?g_st=aw" target="_blank" rel="noopener noreferrer" className="footer-location">
    Samneghat (Jankinagar)<br />
    Varanasi, Uttar Pradesh
  </a>

          {/* <a href ="#social">Social Links</a> */}
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Vasudheva Holdings Pvt. Ltd. ·
          <a href="#"> Privacy Policy</a> ·
          <a href="#"> Terms & Conditions</a>
        </p>

        <div className="footer-social">
          <Link to="https://www.linkedin.com/company/vasudheva-holdings/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Link>
          <a href="https://x.com/Vasudhevagroup" target="_blank" rel="noopener noreferrer"> <FaTwitter /></a>
          
        </div>
      </div>
    </footer>
  );
}
