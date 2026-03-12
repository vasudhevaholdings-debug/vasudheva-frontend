
import { Link } from "react-router-dom";
import "../stakeholderlayout.css"; 
import surajPhoto from "../assets/hero/suraj.jpeg";

export default function Suraj() {
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
          src={surajPhoto} 
          alt="Suraj Mishra" 
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
            Suraj Mishra
          </h1>
          <h2 style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#475569",
            fontWeight: "500"
          }}>
            Founding Team Member, Strategic Associate and Head—People & Culture<br />
            Institutional Vision & Social Development, The Vasudheva Group
          </h2>
        </div>
      </div>

      {/* Full Content – your original text preserved exactly */}
      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
        <p className="resume-text">
          Institutional transformation is not only a technical process; it is a human process that
          requires coordination, facilitation, and sustained stakeholder engagement. My role within the
          Vasudheva Group centres on supporting systems implementation and facilitating
          collaboration among diverse stakeholders.
          In complex engagements, progress often depends on effective communication, timely
          coordination, and the ability to align multiple perspectives. By supporting implementation
          teams, coordinating stakeholders, and ensuring that communication flows smoothly, I
          contribute to creating an environment where systems can function as intended.
          As a founding member, I believe that sustainable change emerges when people feel heard,
          processes are inclusive, and collaboration is prioritised. Vasudheva’s strength lies in its
          ability to integrate expertise with empathy — ensuring that institutional systems remain
          responsive to the people they serve.
          Through facilitation and systems support, we strive to make transformation processes
          participatory, transparent, and resilient.
        </p>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Suraj Mishra is an emerging strategic thinker and socially conscious professional associated
          with The Vasudheva Group, contributing to its mission of building knowledge-driven,
          ethical, and socially responsive institutions. Rooted in classical scholarship and guided by
          modern strategic frameworks, he represents a new generation of professionals committed to
          inclusive development and institutional transformation.
          With an academic foundation from Sampurnanand Sanskrit University, Suraj integrates
          Indic intellectual traditions with contemporary policy and systems thinking. His work reflects
          a deep commitment to equity, ethical governance, and sustainable societal progress.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group </h5>
        <p className="resume-text">
          Strategic Associate — Institutional Vision & Social Development 
        </p>
        <p className="resume-text">
          In this role, Suraj supports the group’s long-term mission by contributing to: 
        </p>
        <ul className="resume-list diamond-list">
          <li> Institutional research and systems thinking </li>
          <li> Strategic planning for socio-economic initiatives </li>
          <li> Development of inclusive and equitable frameworks </li>
          <li> Knowledge synthesis from classical and contemporary sources </li>
          <li> Community-centric program design </li>
        </ul>
        <p className="resume-text">
          His contributions strengthen the group’s vision of “Thinking From The Scratch… Towards 
          Joyful Coexistence.” 
        </p>

        <h5 className="resume-section-header section-icon">◆ Professional Philosophy </h5>
        <p className="resume-text">
          Suraj’s work is guided by the belief that sustainable development requires: 
        </p>
        <ul className="resume-list diamond-list">
          <li> Ethical leadership </li>
          <li> Inclusive social systems </li>
          <li> Evidence-based policy thinking </li>
          <li> Cultural and philosophical grounding </li>
          <li> Human dignity at the center of institutional design </li>
        </ul>
        <p className="resume-text">
          He views institutions not merely as structures, but as living systems that shape human 
          potential and societal harmony. 
        </p>

        <h5 className="resume-section-header section-icon">◆ Core Strengths </h5>
        <h5 className="resume-section-header section-icon">Strategic & Institutional Thinking </h5>
        <ul className="resume-list diamond-list">
          <li> Systems analysis and institutional design </li>
          <li> Policy orientation and socio-economic awareness </li>
          <li> Long-term planning and vision development </li>
        </ul>
        <h5 className="resume-section-header section-icon">Intellectual & Analytical Orientation </h5>
        <ul className="resume-list diamond-list">
          <li> Philosophical reasoning </li>
          <li> Critical and interdisciplinary thinking </li>
          <li> Cultural and historical contextualization </li>
        </ul>
        <h5 className="resume-section-header section-icon">Social & Ethical Commitment </h5>
        <ul className="resume-list diamond-list">
          <li> Inclusive development mindset </li>
          <li> Equity and social justice orientation </li>
          <li> Community-centric approach </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Areas of Interest </h5>
        <ul className="resume-list diamond-list">
          <li> Institutional development and governance </li>
          <li> Social equity and inclusive growth </li>
          <li> Policy and socio-economic systems </li>
          <li> Cultural knowledge systems and modern applications </li>
          <li> Ethical leadership and public reasoning </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Professional Narrative </h5>
        <p className="resume-text">
          Suraj Mishra’s journey reflects the evolution of a thoughtful professional shaped by classical 
          education and inspired by contemporary institutional challenges. His association with The 
          Vasudheva Group places him at the intersection of knowledge, systems, and society — 
          where he contributes to designing frameworks that promote inclusive growth and ethical 
          governance. 
        </p>
        <p className="resume-text">
          He embodies a quiet yet powerful leadership ethos: to build systems that serve humanity 
          with dignity, balance, and foresight. 
        </p>

        <h5 className="resume-section-header section-icon">◆ Personal Ethos </h5>
        <p className="resume-text">
          “Institutions must evolve as instruments of human dignity, equity, and collective progress.” 
        </p>

        <h5 className="resume-section-header section-icon">◆ Connect & Collaborate </h5>
        <p className="resume-text">
          Suraj welcomes collaboration with educators, policymakers, entrepreneurs, researchers, and 
          institutions committed to building a more equitable and sustainable future. 
        </p>
        <p className="resume-text">
          Together, we can design systems that enable joyful coexistence. 
        </p>
      </div>

      {/* Footer buttons */}
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