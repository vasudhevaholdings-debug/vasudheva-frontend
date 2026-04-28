import { Link } from "react-router-dom";
import suryaPhoto from "../assets/hero/doctor.jpeg";   // Update path
import "../stakeholderlayout.css";

export default function SuryaBansiSingh() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={suryaPhoto} alt="Dr. Surya Bansi Singh" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Dr. Surya Bansi Singh</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Scientific Advisor & Head – Research & Development
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Biotechnology Researcher | Alumnus NCCS & NDRI</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Dr. Surya Bansi Singh is a biotechnology researcher, scientific systems thinker, and translational innovation specialist serving as the Scientific Advisor to the Vasudheva Group and Head of Research & Development.
        </p>

        <h5 className="resume-section-header section-icon">◆ Academic & Research Background</h5>
        <p className="resume-text">
          PhD in Biotechnology – National Centre for Cell Science (NCCS), Pune<br />
          M.Sc in Animal Biotechnology – National Dairy Research Institute (NDRI), Karnal
        </p>

        <h5 className="resume-section-header section-icon">◆ Areas of Expertise</h5>
        <ul className="resume-list diamond-list">
          <li>Molecular Biology & Gene Editing (CRISPR)</li>
          <li>Cell Biology & Mechanobiology</li>
          <li>Translational Biotechnology & Health Systems</li>
          <li>Agro-Tech & Nutrition Systems</li>
        </ul>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}