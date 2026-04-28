import { Link } from "react-router-dom";
import anmolPhoto from "../assets/hero/anmol.jpeg";
import "../stakeholderlayout.css";

export default function AnmolSharma() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img 
          src={anmolPhoto} 
          alt="Anmol Sharma" 
          style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
        />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Anmol Sharma</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Head – Operations & Information Technology (IT)
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>IIT & IIM Alumni | Strategic AI & Data Science Leader</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Anmol Sharma is a Strategic AI, Data Science, and Technology Leader with over a decade of experience in designing, building, and scaling enterprise-grade digital and AI-driven systems.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          As Head – Operations & IT, he leads the development and governance of the group's operational architecture, digital infrastructure, and intelligent systems ecosystem.
        </p>

        <h5 className="resume-section-header section-icon">◆ Core Expertise</h5>
        <ul className="resume-list diamond-list">
          <li>Generative AI & Large Language Models</li>
          <li>Predictive Analytics & Decision Intelligence</li>
          <li>Digital Infrastructure & ML Ops</li>
          <li>System Architecture & Process Design</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Leadership Philosophy</h5>
        <p className="resume-text">
          Technology is a core institutional infrastructure, not just a support function. Data is the foundation of decision-making systems.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}