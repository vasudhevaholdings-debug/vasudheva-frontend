import "../stakeholderlayout.css";

export default function Ethical() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧭</span>
        <h2>PILLAR 4 — ETHICAL GOVERNANCE & ACCOUNTABILITY</h2>
        <span className="subtitle">Integrity as an Operational Standard</span>
      </div>

      <div className="pillar-content">
        <h3>Principle</h3>
        <p>
          Ethical governance, transparency, and accountability are non-negotiable foundations of
          institutional legitimacy and public trust.
        </p>

        <h3>Why It Matters</h3>
        <p>
          Without ethical safeguards, even technically sound interventions can erode trust and
          produce long-term reputational damage.
        </p>

        <h3>How We Operationalise This</h3>
        <ul>
          <li>Conflict-of-interest protocols</li>
          <li>Confidentiality and data protection frameworks</li>
          <li>Ethical review of engagements</li>
          <li>Transparent reporting and evaluation</li>
        </ul>

        <h3>Stakeholder Benefit</h3>
        <ul>
          <li>Trustworthy partnerships</li>
          <li>Risk mitigation</li>
          <li>Compliance with ethical standards</li>
        </ul>

        {/* <div className="cta">
          <a href="/governance/ethics-framework" className="learn-more">
            Click → View Ethics & Governance Framework
            <span className="arrow">👉</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}