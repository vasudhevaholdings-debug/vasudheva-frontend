import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/hero/Logo.jpeg";
import { IoMdContact } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // refresh to update header
  };

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
        <Link to="/Leadership">Our Teams</Link>
        <Link to="/Services">Services & Solutions</Link>
        <Link to="/Parentcompanies">Companies</Link>
        <Link to="/Insights">Insights</Link>
        <Link to="/Collaborate">Collaborate</Link>
        
      </nav>

      {/* Right */}
      <nav className="header-nav desktop-nav">
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        )}

        <Link to="/contact">
          Contact Us <IoMdContact className="contact-icon" />
        </Link>
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
          <Link to="/Leadership" onClick={()=> setMenuOpen(false)}>Our Teams</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services & Solutions</Link>
          <Link to="/parentcompanies" onClick={() => setMenuOpen(false)}>Companies</Link>
          <Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link to="/collaborate" onClick={() => setMenuOpen(false)}>Collaborate</Link>

          {!user ? (
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              style={{ background: "none", border: "none" }}
            >
              Logout
            </button>
          )}

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us <IoMdContact className="contact-icon" />
          </Link>
        </div>
      )}
    </header>
  );
}