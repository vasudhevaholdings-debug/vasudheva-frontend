import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/hero/Logo.jpeg";
import { IoMdContact } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      {/* Left */}
      <div className="header-left">
        <Link to="/">
          <img
            src={Logo}
            alt="Vasudheva Holdings Logo"
            className="header-logo"
          />
        </Link>

        <div className="brand-block">
          <div className="brand-name">VASUDHEVA</div>
          <div className="brand-entity">HOLDINGS PVT. LTD.</div>
          <div className="brand-tagline">
            Towards Joyful Coexistence
          </div>
        </div>
      </div>

      {/* Center Nav */}
      <nav className="header-center-nav desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/Philosopy">Group & Philosophy</Link>
        <Link to="/Services">Services & Solutions</Link>
        <Link to="/Parentcompanies">Companies</Link>
        <Link to="/Insights">Insights</Link>
        <Link to="/Collaborate">Collaborate</Link>
      </nav>

      {/* Right */}
      <nav className="header-nav desktop-nav">
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us <IoMdContact className="contact-icon" /></Link>
        {/* <a href="/#contact">
          Contact Us <IoMdContact className="contact-icon" />
        </a> */}
      </nav>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/philosopy" onClick={() => setMenuOpen(false)}>Group & Philosophy</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services & Solutions</Link>
          <Link to="/parentcompanies" onClick={() => setMenuOpen(false)}>Companies</Link>
          <Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link to="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
         <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us <IoMdContact className="contact-icon" />
          </Link>
          
        </div>
      )}
    </header>
  );
}
