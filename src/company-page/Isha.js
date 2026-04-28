import { Link } from "react-router-dom";
import ishaPhoto from "../assets/hero/isha_photo.jpg";
import "../stakeholderlayout.css";

export default function IshaBharati() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={ishaPhoto} alt="Isha Bharati" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Isha Bharati</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Associate – Operations & Information Technology (IT)
          </h2>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Isha Bharati is a Technology and Operations Associate with a strong foundation in Computer Science and Engineering. She supports the development, management, and continuous improvement of the group's technology systems and digital infrastructure.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          She manages IT infrastructure, supports web platform development, ensures system reliability, and assists in operational workflow implementation.
        </p>

        <h5 className="resume-section-header section-icon">◆ Technical Skills</h5>
        <ul className="resume-list diamond-list">
          <li>Frontend Development (HTML, CSS, JavaScript, React.js)</li>
          <li>Backend Integration & Database Handling</li>
          <li>System Optimization and Performance Enhancement</li>
        </ul>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}