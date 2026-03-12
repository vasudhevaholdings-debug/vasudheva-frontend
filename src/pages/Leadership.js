import { useState } from 'react';
import { Link } from "react-router-dom";
import "../stakeholderlayout.css";
import pattern from "../assets/hero/pattern.png";

// Photo imports (adjust paths as needed)
import shashankPhoto from "../assets/hero/shashank.jpeg";
import gauravPhoto from "../assets/hero/gaurav.jpeg";
import vivekPhoto from "../assets/hero/vivek.jpeg";
import amulPhoto from "../assets/hero/amul.jpeg";
import surajPhoto from "../assets/hero/suraj.jpeg";

export default function Leadership() {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="leadership-container">
      <header className="leadership-header">
        <h1>Leadership & Founding Team</h1>
        <p className="leadership-tagline">
          Stewards of Governance, Knowledge & Institutional Integrity
        </p>
      </header>

      <section
  className="team-overview"

>
        {/* ============================================= */}
        {/* Shashank Singh */}
        {/* ============================================= */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={shashankPhoto} alt="Shashank Singh" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Shashank Singh</h3>
            <p className="member-title">Principal Founder, Chief Architect & Lead Strategist</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">IIM Alumni | Economics & Public Policy | Systems thinker & institution builder</p>
             <Link to="/Shashank" className="details-toggle">
              Read more →
            </Link>
            
          </div>
        </div>

        {/* ============================================= */}
        {/* Gaurav Dwivedi */}
        {/* ============================================= */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={gauravPhoto} alt="Gaurav Dwivedi" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Gaurav Dwivedi</h3>
            <p className="member-title">Co-Founder</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">Tech Graduate | Entrepreneur & Independent Researcher | Social Equity Advocate</p>
             <Link to="/Gaurav" className="details-toggle">
              Read more →
            </Link>
           
          </div>
        </div>

        {/* ============================================= */}
        {/* Vivek Kumar Ojha */}
        {/* ============================================= */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={vivekPhoto} alt="Vivek Kumar Ojha" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Mr. Vivek Kumar Ojha</h3>
            <p className="member-title">Founding Team Member & National Spokesperson</p>
            <p className="member-subtitle">Head — Cultural & Spiritual Consulting</p>
             <Link to="/Vivek" className="details-toggle">
              Read more →
            </Link>
            
          </div>
        </div>

        {/* ============================================= */}
        {/* Amul Patel */}
        {/* ============================================= */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={amulPhoto} alt="Amul Patel" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Mr. Amul Patel</h3>
            <p className="member-title">Founding Team Member & Head – Operations & IT</p>
            <p className="member-subtitle">The Vasudheva Group</p>
             <Link to="/Amul" className="details-toggle">
              Read more →
            </Link>
            
          </div>
        </div>

        {/* ============================================= */}
        {/* Suraj Mishra */}
        {/* ============================================= */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={surajPhoto} alt="Suraj Mishra" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Suraj Mishra</h3>
            <p className="member-title">Founding Team Member, Strategic Associate and Head—People & Culture</p>
            <p className="member-subtitle">Institutional Vision & Social Development</p>
             <Link to="/Suraj" className="details-toggle">
              Read more →
            </Link>
            
          </div>
        </div>
     
      </section>
      <div className="cards-footer-buttons">
    <Link 
      to="/parentcompanies" 
      className="action-button secondary"
    >
      Explore Group Structure →
    </Link>
    
    <Link 
      to="/Contact" 
      className="action-button primary"
    >
      Route a Request →
    </Link>
  </div>

     
    </div>
  );
}