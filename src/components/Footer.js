import { Link } from "react-router-dom";
import Logo from "../assets/hero/Logo.jpeg";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
          <Link to="/leadership">Our Teams</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/collaborate">Collaborate</Link>
          <Link to="/parentcompanies">Parent Companies</Link>
          
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

          <a
            href="mailto:connect@vasudhevaholdings.com"
            className="footer-email"
          >
            connect@vasudheva.com
          </a>

          <a href="tel:+917523099113" className="footer-phone">
            +91 7523099113
          </a>
          <a href="tel:+91 8576929037" className="footer-phone">
            +91 8576929037
          </a>

          <a 
            href="https://maps.app.goo.gl/c5DfYzXkLQCGWUxb9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-location"
            style={{ color: "#13decd" }}
          >
            N 1/2 A-K, near Sant Ravidas Ghat Road, Dumraon Colony,
            <br />
            Varanasi, Uttar Pradesh 221005
          </a>
           {/* <div className="footer-map">
    <iframe
      src="https://www.google.com/maps?q=25.284315,83.0075528&z=15&output=embed"
      width="100%"
      height="200"
      style={{ border: 0, marginTop: "10px", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Vasudheva Location"
    ></iframe>
  </div> */}
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom Bar */}
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Vasudheva Holdings Pvt. Ltd. ·{" "}
          <Link to="/privacy">Privacy Policy</Link> ·{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </p>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/vasudheva-holdings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/Vasudhevagroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}