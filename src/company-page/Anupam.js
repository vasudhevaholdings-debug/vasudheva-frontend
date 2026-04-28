import { Link } from "react-router-dom";
import anupamPhoto from "../assets/hero/anupam-photo.jpeg";
import "../stakeholderlayout.css";

export default function AnupamKumari() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={anupamPhoto} alt="Anupam Kumari" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Anupam Kumari</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Associate – Operations & Information Technology (IT)
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Front-End Developer (React.js)</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Anupam Kumari is a Front-End Developer and Digital Systems Associate with strong expertise in web development and user interface design.
        </p>

        <h5 className="resume-section-header section-icon">◆ Technical Skills</h5>
        <ul className="resume-list diamond-list">
          <li>React.js, JavaScript, HTML, CSS</li>
          <li>Responsive Web Design & UI/UX Development</li>
          <li>Basic Backend Integration</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Contribution to Vasudheva Group</h5>
        <p className="resume-text">
          She develops responsive web interfaces, supports digital platform implementation, and helps build user-friendly operational tools.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}