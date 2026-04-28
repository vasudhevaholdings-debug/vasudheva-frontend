import { Link } from "react-router-dom";
import asmitaPhoto from "../assets/hero/asmita.jpeg";   // Update path as needed
import "../stakeholderlayout.css";

export default function AshmitaSingh() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img 
          src={asmitaPhoto} 
          alt="Ashmita Singh" 
          style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
        />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Mrs. Ashmita Singh</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Head – European Strategy & Market Development<br />
            Vasudheva Holdings Pvt. Ltd.
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Sociologist, Research Scholar & Global Strategy Leader</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Professional Overview</h5>
        <p className="resume-text">
          Mrs. Ashmita Singh is a Sociologist, Research Scholar, and Global Strategy Leader, and a member of the founding team of the Vasudheva Group. She leads the Group's European Strategy & Market Development, anchoring its expansion across European markets through a research-driven, institutionally grounded, and culturally sensitive approach.
        </p>

        <h5 className="resume-section-header section-icon">◆ Academic Foundation & Research Orientation</h5>
        <p className="resume-text">
          Mrs. Singh holds her Graduation and Post-Graduation in Sociology from Banaras Hindu University. She is currently pursuing her Ph.D. in Sociology with a focused research specialization on "The Institution of Marriage: Structure, Evolution, and Socio-Economic Transformation".
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          As Head – European Strategy & Market Development, she is responsible for market entry strategies, institutional partnerships, cultural intelligence, and building Vasudheva’s presence in Europe.
        </p>

        <h5 className="resume-section-header section-icon">◆ Core Competencies</h5>
        <ul className="resume-list diamond-list">
          <li>Sociological Research & Institutional Analysis</li>
          <li>Cross-Cultural Strategy & Global Market Development</li>
          <li>Social Systems & Behavioral Understanding</li>
          <li>Stakeholder Engagement & Strategic Communication</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Personal Philosophy</h5>
        <p className="resume-text">
          “Enduring systems are built through an understanding of people, relationships, and institutions—not just markets and metrics.”
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}