import { useState } from 'react';
import { Link } from "react-router-dom";
import "../stakeholderlayout.css";
import pattern from "../assets/hero/pattern.png";

// Photo imports (adjust paths as needed)
import shashankPhoto from "../assets/hero/shashank.jpeg";
import asmitaPhoto from "../assets/hero/asmita.jpeg";        // Ashmita Singh
import anmolPhoto from "../assets/hero/anmol.jpeg";
import doctorPhoto from "../assets/hero/doctor.jpeg";       // Possibly Dr. Surya Bansi Singh
import gauravPhoto from "../assets/hero/gaurav.jpeg";
import anjaliPhoto from "../assets/hero/anjalipathak.jpeg";
import surajPhoto from "../assets/hero/suraj.jpeg";
import ishaPhoto from "../assets/hero/isha_photo.jpg";
import vivekPhoto from "../assets/hero/vivek.jpeg";
import anupamPhoto from "../assets/hero/anupam-photo.jpeg";

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

      <section className="team-overview">
        
        {/* Shashank Singh */}
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
           {/* Mrs. Ashmita Singh - Head European Strategy */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={asmitaPhoto} alt="Ashmita Singh" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Mrs. Ashmita Singh</h3>
            <p className="member-title">Head – European Strategy & Market Development</p>
            <p className="member-subtitle">Vasudheva Holdings Pvt. Ltd.</p>
            <p className="member-teaser">Sociologist, Research Scholar & Global Strategy Leader | Founding Team Member</p>
            <Link to="/AshmitaSingh" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>
          {/* Anmol Sharma - Head of Operations & IT */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={anmolPhoto} alt="Anmol Sharma" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Anmol Sharma</h3>
            <p className="member-title">Head – Operations & Information Technology (IT)</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">IIT & IIM Alumni | Strategic AI & Data Science Leader</p>
            <Link to="/AnmolSharma" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>
          {/* Dr. Surya Bansi Singh - Scientific Advisor */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={doctorPhoto} alt="Dr. Surya Bansi Singh" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Dr. Surya Bansi Singh</h3>
            <p className="member-title">Scientific Advisor & Head – Research & Development</p>
            <p className="member-subtitle">Vasudheva Holdings Pvt. Ltd.</p>
            <p className="member-teaser">Biotechnology Researcher | Alumnus NCCS & NDRI | Scientific Systems Thinker & Translational Innovation Specialist</p>
            <Link to="/SuryaBansiSingh" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>

        {/* Gaurav Dwivedi */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={gauravPhoto} alt="Gaurav Dwivedi" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Gaurav Dwivedi</h3>
            <p className="member-title">Co-Founder</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">Tech Graduate | Entrepreneur & Independent Researcher | Social Equity Advocate & Institutional Design</p>
            <Link to="/Gaurav" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>
  {/* Ms. Anjali Pathak - Associate Scientific Advisory */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={anjaliPhoto} alt="Anjali Pathak" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Ms. Anjali Pathak</h3>
            <p className="member-title">Associate – Scientific Advisory</p>
            <p className="member-subtitle">Vasudheva Holdings Pvt. Ltd.</p>
            <p className="member-teaser">Physics, Chemistry & Biology | Emerging Scientific Talent</p>
            <Link to="/AnjaliPathak" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>
       
        {/* Suraj Mishra */}
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

        {/* Isha Bharati - Associate Operations & IT */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={ishaPhoto} alt="Isha Bharati" className="member-photo" style={{ objectPosition: 'center' }} />
          </div>
          <div className="member-info">
            <h3 className="member-name">Isha Bharati</h3>
            <p className="member-title">Associate – Operations & Information Technology (IT)</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">Web Developer | Full-Stack Exposure | Technology & Operations Associate</p>
            <Link to="/IshaBharati" className="details-toggle">
              Read more →
            </Link>
          </div>
        </div>
 {/* Vivek Kumar Ojha */}
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
        {/* Anupam Kumari - Associate Operations & IT */}
        <div className="team-member-card">
          <div className="member-photo-wrapper">
            <img src={anupamPhoto} alt="Anupam Kumari" className="member-photo" />
          </div>
          <div className="member-info">
            <h3 className="member-name">Anupam Kumari</h3>
            <p className="member-title">Associate – Operations & Information Technology (IT)</p>
            <p className="member-subtitle">The Vasudheva Group</p>
            <p className="member-teaser">Front-End Developer (React.js) | UI/UX Specialist</p>
            <Link to="/AnupamKumari" className="details-toggle">
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