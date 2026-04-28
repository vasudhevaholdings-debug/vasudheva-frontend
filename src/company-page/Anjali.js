import { Link } from "react-router-dom";
import anjaliPhoto from "../assets/hero/anjalipathak.jpeg";
import "../stakeholderlayout.css";

export default function AnjaliPathak() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={anjaliPhoto} alt="Ms. Anjali Pathak" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Ms. Anjali Pathak</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Associate – Scientific Advisory
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Physics, Chemistry & Biology</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Ms. Anjali Pathak serves as an Associate within the Scientific Advisory function at the Vasudheva Group. With a strong foundation in Physics, Chemistry, and Biology, she contributes to research support, knowledge systems, and scientific documentation.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role within the Scientific Advisory Office</h5>
        <p className="resume-text">
          She supports literature reviews, concept mapping, scientific learning, and project documentation while being nurtured as a future researcher and scientific contributor.
        </p>

        <h5 className="resume-section-header section-icon">◆ Areas of Interest</h5>
        <ul className="resume-list diamond-list">
          <li>Biological Sciences & Life Processes</li>
          <li>Human Health, Nutrition & Physiology</li>
          <li>Environmental & Ecological Systems</li>
          <li>Scientific Research & Inquiry-based Learning</li>
        </ul>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}