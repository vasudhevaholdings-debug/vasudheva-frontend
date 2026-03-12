import { Link } from "react-router-dom";
import shashankPhoto from "../assets/hero/shashank.jpeg";
import "../stakeholderlayout.css";

export default function Shashank() {
  return (
    <div className="leadership-detail-page">
      {/* Back link */}
      <div style={{ marginBottom: "40px" }}>
        <Link 
          to="/leadership" 
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "1.1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          ← Back to Leadership Team
        </Link>
      </div>

      {/* Profile Header */}
      <div className="profile-header" style={{
        display: "flex",
        alignItems: "center",
        gap: "32px",
        flexWrap: "wrap",
        marginBottom: "48px"
      }}>
        <img 
          src={shashankPhoto} 
          alt="Shashank Singh" 
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
        <div>
          <h1 style={{
            margin: "0 0 8px",
            fontSize: "2.8rem",
            color: "#0a2540"
          }}>
            Shashank Singh
          </h1>
          <h2 style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#475569",
            fontWeight: "500"
          }}>
            Principal Founder, Chief Architect & Lead Strategist<br />
            The Vasudheva Group
          </h2>
        </div>
      </div>

      {/* Full Content – exactly your original text */}
      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
        <blockquote className="resume-quote">
          “Institutions shape societies. Systems shape institutions. Ideas shape systems.”<br />
          — Shashank Singh
        </blockquote>
        <p className="resume-text">
          The idea of the Vasudheva Group emerged from a simple but profound observation: many
          institutional failures are not due to lack of intent or resources, but due to fragmented
          systems, weak governance, and the absence of integrated thinking. Across public
          institutions, educational systems, enterprises, and communities, I witnessed a recurring
          pattern — solutions were implemented in isolation, knowledge remained siloed, and
          long-term sustainability was rarely embedded in design.
          Vasudheva was conceptualised as a governance-led institutional ecosystem to address this
          systemic gap. Our model integrates research, education, communication, and knowledge
          stewardship under a unified framework so that institutions can design, implement, and
          sustain solutions with clarity, accountability, and public trust.
          As Founder, my role is not to centralise authority but to steward governance principles that
          ensure ethical integrity, evidence-based decision-making, and long-term societal benefit. The
          strength of this Group lies in its collective leadership — professionals who bring field
          intelligence, engagement governance, operational discipline, and technical expertise into a
          coherent institutional architecture.
          We are committed to building systems that outlast individuals — systems that preserve
          knowledge, strengthen institutions, and contribute to a more just, informed, and resilient
          society
        </p>

        <h5 className="resume-section-header section-icon">◆ About the Founder</h5>
        <p className="resume-text">
          Shashank Singh is an entrepreneur, systems thinker, and institution builder dedicated to
          designing knowledge-driven enterprises that address complex socio-economic challenges.
          As the Principal Founder and Chief Architect of The Vasudheva Group, he leads a
          multidisciplinary ecosystem focused on research-led consulting, education innovation,
          media, and publishing.
          He is driven by the philosophy of “Thinking From The Scratch…”, emphasizing
          foundational thinking, ethical leadership, and sustainable development. His work integrates
          economics, governance, technology, and human development to create scalable and
          socially responsible institutional models.
        </p>

        <h5 className="resume-section-header section-icon">◆ Vision & Purpose</h5>
        <p className="resume-vision">
          <strong>Vision:</strong> To build institutions that harmonize knowledge, systems, and society—advancing sustainable prosperity and human dignity.
        </p>
        <ul className="resume-list diamond-list">
          <li>Strengthen institutional capacity in emerging economies</li>
          <li>Democratize access to knowledge and strategic thinking</li>
          <li>Enable organizations to solve complex challenges sustainably</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ The Founding Philosophy</h5>
        <p className="resume-text">
          The Vasudheva Group is built on a systems-thinking doctrine that views knowledge as
          infrastructure and institutions as engines of societal progress.
        </p>

        <h5 className="resume-section-header section-icon">◆ Guiding Principles</h5>
        <ul className="resume-list diamond-list">
          <li>Systems Thinking: Integrated solutions over fragmented approaches</li>
          <li>Knowledge as Infrastructure: Research as the foundation of progress</li>
          <li>Ethical Enterprise: Profit with purpose and responsibility</li>
          <li>Local Roots, Global Relevance: Contextual solutions with universal value</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Building the Vasudheva Group</h5>
        <p className="resume-text">
          Shashank Singh conceptualized The Vasudheva Group as an integrated ecosystem of
          specialized entities working in synergy:
        </p>
        <ul className="resume-list diamond-list">
          <li>Strategic Research & Consulting — enabling informed decision-making</li>
          <li>Education Innovation — transforming learning systems</li>
          <li>Media & Knowledge Dissemination — amplifying ideas and insights</li>
          <li>Publishing & Intellectual Property — preserving and sharing knowledge</li>
        </ul>
        <p className="resume-text">
          This architecture enables cross-sectoral collaboration and scalable impact
        </p>

        <h5 className="resume-section-header section-icon">◆ Leadership Approach</h5>
        <p className="resume-text">
          Shashank’s leadership style combines analytical rigor with human-centric values.
        </p>

        <h5 className="resume-section-header section-icon">◆ Leadership Traits</h5>
        <ul className="resume-list diamond-list">
          <li>Vision-driven and mission-focused</li>
          <li>Research-led decision making</li>
          <li>Ethical and socially conscious</li>
          <li>Collaborative ecosystem builder</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Core Belief</h5>
        <ul className="resume-list diamond-list">
          <li>Institutions create enduring impact</li>
          <li>Knowledge empowers societies</li>
          <li>Sustainable development requires systems thinking</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Areas of Focus</h5>
        <ul className="resume-list diamond-list">
          <li>Institutional design & governance</li>
          <li>Socio-economic research & policy analysis</li>
          <li>Education systems transformation</li>
          <li>Knowledge dissemination & media strategy</li>
          <li>Sustainable and inclusive development</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Commitment to Society</h5>
        <p className="resume-text">
          The Vasudheva Group reflects Shashank’s commitment to building enterprises that contribute to:
        </p>
        <ul className="resume-list diamond-list">
          <li>Inclusive economic development</li>
          <li>Institutional strengthening in Tier-2 and Tier-3 regions</li>
          <li>Ethical and responsible business practices</li>
          <li>Knowledge accessibility and empowerment</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Personal Philosophy</h5>
        <ul className="resume-list diamond-list">
          <li>Build institutions,not just businesses</li>
          <li>Knowledge must serve society</li>
          <li>Sustainability begins with systems thinking</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ The Road Ahead</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Short Term:</strong> Establish Vasudheva as a regional knowledge and consulting hub; Develop scalable frameworks for education and MSME transformation</li>
          <li><strong>Medium Term:</strong> Expand integrated consulting services across India; Build digital platforms for knowledge dissemination</li>
          <li><strong>Long Term:</strong> Create globally relevant institutional models from India; Position Vasudheva as a civilizational enterprise rooted in Indian values</li>
        </ul>
      </div>

      {/* Footer buttons – same as main page */}
      <div className="detail-buttons" style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        marginTop: "64px",
        flexWrap: "wrap"
      }}>
        <Link to="/parentcompanies" className="action-button secondary">
          Explore Group Structure →
        </Link>
        <Link to="/Contact" className="action-button primary">
          Route a Request →
        </Link>
      </div>
    </div>
  );
}