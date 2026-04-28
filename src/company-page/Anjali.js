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
            Associate – Scientific Advisory<br />Vasudheva Holdings Pvt. Ltd.
          </h2>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Ms. Anjali Kumari serves as an Associate within the Scientific Advisory function at the Vasudheva Group, where she contributes to the development of research-oriented, knowledge-driven, and scientifically grounded systems across the organization.
        </p>
        <p className="resume-text">
          With a disciplined academic foundation in Physics, Chemistry, and Biology, she represents an emerging cohort of scientifically oriented learners being nurtured within the Vasudheva ecosystem to evolve into future researchers, thinkers, and contributors to institutional development.
        </p>
        <p className="resume-text">
          Her role reflects the Group’s long-term commitment to building intellectual capital alongside institutional systems, ensuring continuity between learning, research, and application.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role within the Scientific Advisory Office</h5>
        <p className="resume-text">
          Working under the guidance of the Scientific Advisor, Ms. Kumari supports the Scientific Advisory Office in strengthening the research, knowledge, and analytical backbone of the Group.
        </p>

        <h5 className="resume-section-header section-icon">A. Research Support & Knowledge Systems</h5>
        <ul className="resume-list diamond-list">
          <li>Assists in literature reviews, concept mapping, and academic synthesis</li>
          <li>Supports preparation of research notes, briefs, and structured documentation</li>
          <li>Contributes to building internal knowledge repositories and reference frameworks</li>
        </ul>

        <h5 className="resume-section-header section-icon">B. Scientific Learning & Conceptual Development</h5>
        <ul className="resume-list diamond-list">
          <li>Engages in guided learning across biological sciences and interdisciplinary domains</li>
          <li>Develops conceptual understanding of: Life sciences and biological systems, Health, nutrition, and environmental interactions, Scientific methods, logic, and evidence-based reasoning</li>
        </ul>

        <h5 className="resume-section-header section-icon">C. Project & Institutional Support</h5>
        <ul className="resume-list diamond-list">
          <li>Assists in research and consulting assignments related to: Education systems, Health and lifestyle frameworks, Knowledge and content development</li>
          <li>Contributes to the development of content, models, and analytical structures used in institutional projects</li>
        </ul>

        <h5 className="resume-section-header section-icon">D. Research Culture & Academic Engagement</h5>
        <ul className="resume-list diamond-list">
          <li>Participates in internal academic discussions, study circles, and knowledge sessions</li>
          <li>Supports initiatives aimed at promoting scientific temperament and inquiry-driven learning</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Academic Foundation</h5>
        <ul className="resume-list diamond-list">
          <li>Physics – Analytical thinking and conceptual reasoning</li>
          <li>Chemistry – Understanding of molecular structures and processes</li>
          <li>Biology – Core area of interest, forming the basis for her future academic and professional direction</li>
        </ul>
        <p className="resume-text">
          Her academic journey reflects consistency and sincerity in foundational sciences, strong inclination toward biological sciences and life systems, and a developing interest in research-based and application-oriented learning.
        </p>

        <h5 className="resume-section-header section-icon">◆ Areas of Interest</h5>
        <ul className="resume-list diamond-list">
          <li>Biological sciences and life processes</li>
          <li>Human health, nutrition, and physiology</li>
          <li>Environmental and ecological systems</li>
          <li>Scientific research and inquiry-based learning</li>
          <li>Application of science in real-world problem-solving and system design</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Role in the Vasudheva Ecosystem</h5>
        <ul className="resume-list diamond-list">
          <li>An early-stage scientific associate in training</li>
          <li>A knowledge contributor supporting research and documentation functions</li>
          <li>A participant in the Group’s long-term human capital development and research ecosystem</li>
        </ul>
        <p className="resume-text">
          Her role is designed as a structured developmental pathway, enabling a transition from: Learning → Understanding → Contribution → Specialization
        </p>

        <h5 className="resume-section-header section-icon">◆ Developmental Pathway</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Stage 1: Foundation</strong> – Exposure to scientific concepts, research methods, and institutional processes</li>
          <li><strong>Stage 2: Applied Learning</strong> – Active participation in research documentation and project support</li>
          <li><strong>Stage 3: Advanced Development</strong> – Specialization in biological sciences or related fields and transition into research, consulting, or academic roles</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Personal Attributes & Strengths</h5>
        <ul className="resume-list diamond-list">
          <li>Strong discipline and sincerity in academic pursuit</li>
          <li>Curiosity-driven scientific mindset</li>
          <li>Ability to engage with conceptual and interdisciplinary ideas</li>
          <li>Commitment to continuous learning and intellectual growth</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Alignment with Vasudheva Philosophy</h5>
        <ul className="resume-list diamond-list">
          <li>Building knowledge systems alongside institutional systems</li>
          <li>Promoting scientific thinking and evidence-based approaches</li>
          <li>Nurturing future researchers and contributors to society</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Closing Statement</h5>
        <p className="resume-text">
          Ms. Anjali Kumari represents the emerging intellectual foundation of the Vasudheva Group, embodying the transition from curiosity to capability and from learning to contribution. Through structured mentorship, institutional exposure, and guided scientific engagement, she is being developed to contribute meaningfully to the Group’s mission of delivering scientific, innovative, and system-oriented solutions for society.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}