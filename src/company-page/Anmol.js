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
        <img src={anmolPhoto} alt="Anmol Sharma" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Anmol Sharma</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Head – Operations & Information Technology (IT)<br />The Vasudheva Group
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>IIT & IIM Alumni | Strategic AI & Data Science Leader</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Anmol Sharma is a Strategic AI, Data Science, and Technology Leader with over a decade of experience in designing, building, and scaling enterprise-grade digital and AI-driven systems. As the Head – Operations & IT at Vasudheva Group, he leads the development and governance of the group's operational architecture, digital infrastructure, and intelligent systems ecosystem.
        </p>
        <p className="resume-text">
          He plays a pivotal role in translating Vasudheva’s core philosophy — “We don’t give advice. We build systems.” — into scalable, technology-enabled institutional frameworks that drive efficiency, coordination, and long-term impact.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role & Responsibilities at Vasudheva Group</h5>
        <p className="resume-text">
          In his capacity as Head – Operations & IT, Anmol is responsible for designing, integrating, and governing the end-to-end operational and technological backbone of the group.
        </p>

        <h5 className="resume-section-header section-icon">1. Operations & System Architecture</h5>
        <ul className="resume-list diamond-list">
          <li>Designing standardized operational frameworks across all group companies</li>
          <li>Building process systems, SOPs, and execution protocols</li>
          <li>Ensuring efficiency, scalability, and institutional consistency</li>
        </ul>

        <h5 className="resume-section-header section-icon">2. Digital Infrastructure & IT Governance</h5>
        <ul className="resume-list diamond-list">
          <li>Leading development of group-wide digital platforms (CRM, ERP, dashboards, analytics systems)</li>
          <li>Establishing data governance, cybersecurity, and IT compliance frameworks</li>
          <li>Building cloud-native and AI-first infrastructure ecosystems</li>
        </ul>

        <h5 className="resume-section-header section-icon">3. AI & Data Integration</h5>
        <ul className="resume-list diamond-list">
          <li>Embedding Artificial Intelligence, Machine Learning, and Generative AI into business processes</li>
          <li>Designing decision intelligence systems for leadership and governance</li>
          <li>Creating data-driven feedback loops for continuous improvement</li>
        </ul>

        <h5 className="resume-section-header section-icon">4. Product & Platform Development</h5>
        <ul className="resume-list diamond-list">
          <li>Converting research insights into technology products and digital solutions</li>
          <li>Leading development of AI agents, automation tools, and knowledge platforms</li>
          <li>Supporting commercialization through technology-led business models</li>
        </ul>

        <h5 className="resume-section-header section-icon">5. Execution & Scaling</h5>
        <ul className="resume-list diamond-list">
          <li>Driving cross-functional implementation across subsidiaries</li>
          <li>Aligning strategy → systems → execution → outcomes</li>
          <li>Enabling scalable growth and institutionalization of processes</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
        <p className="resume-text">
          Anmol Sharma is an accomplished AI & Data Science leader with 10+ years of experience delivering high-impact, production-grade AI/ML solutions across BFSI, Insurtech, and emerging digital sectors. He has successfully designed and deployed 25+ enterprise solutions, combining deep technical expertise with strong business acumen.
        </p>
        <ul className="resume-list diamond-list">
          <li>Generative AI & Large Language Models (LLMs)</li>
          <li>Predictive Analytics & Forecasting Systems</li>
          <li>Fraud Detection & Risk Intelligence</li>
          <li>Customer Intelligence & Decision Systems</li>
          <li>Data Engineering & ML Ops Infrastructure</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Leadership Experience</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Founder – KRAS AI</strong>: Leading development of AI-powered interviewing and career intelligence platforms, Built advanced Agentic AI systems integrating LLMs and speech technologies</li>
          <li><strong>Assistant Vice President – Data Science, IDFC FIRST Bank</strong>: Led AI programs impacting millions of customers at scale</li>
          <li><strong>Deputy Vice President – Data Science, IndiaFirst Life Insurance</strong>: Managed multiple enterprise AI models across fraud detection, retention, and forecasting</li>
          <li><strong>Senior Associate – Data Analytics, PwC</strong>: Delivered enterprise analytics and consulting solutions across industries</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Core Expertise</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Technology & AI:</strong> Generative AI, LLMs, NLP, Predictive Modeling, AI Agents, Deep Learning</li>
          <li><strong>Engineering & Systems:</strong> Python, PySpark, SQL, Cloud (AWS, Azure, GCP), ML Ops, CI/CD</li>
          <li><strong>Operations & Execution:</strong> Process Design, System Architecture, Digital Transformation, Workflow Optimization</li>
          <li><strong>Leadership & Strategy:</strong> AI Strategy, Product Development, Stakeholder Management, Cross-functional Leadership</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Role within Vasudheva Group Structure</h5>
        <ul className="resume-list diamond-list">
          <li>Vasudheva Strategic Innovations – AI-driven consulting tools & analytics systems</li>
          <li>Vasudheva Eduinnovation – Digital learning platforms & educational systems</li>
          <li>Vasudheva Media – Content technology & distribution analytics</li>
          <li>Vasudheva Publishing – Knowledge systems & digital publishing infrastructure</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Strategic Contribution</h5>
        <ul className="resume-list diamond-list">
          <li>From Ideas to Systems – Converting concepts into implementable architectures</li>
          <li>From Data to Decisions – Building intelligence layers for leadership</li>
          <li>From Operations to Institutions – Creating scalable and repeatable systems</li>
          <li>From Technology to Impact – Aligning digital capabilities with long-term value creation</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Leadership Philosophy</h5>
        <ul className="resume-list diamond-list">
          <li>Technology is a core institutional infrastructure, not just a support function</li>
          <li>Data is the foundation of decision-making systems</li>
          <li>AI is a strategic capability for augmentation and transformation</li>
          <li>Operations are systems of coordination that enable scale and sustainability</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Education</h5>
        <ul className="resume-list diamond-list">
          <li>MBA (Analytics & Finance) – Indian Institute of Management, Udaipur</li>
          <li>B.Tech – Indian Institute of Technology, Delhi</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Closing Statement</h5>
        <p className="resume-text">
          Anmol Sharma leads the operational and technological foundation of Vasudheva Group, ensuring that every strategy is translated into a structured system, every system into execution, and every execution into measurable impact. His work enables the Group to build scalable institutions driven by intelligence, efficiency, and innovation.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}