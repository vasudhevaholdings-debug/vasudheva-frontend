import "../stakeholderlayout.css";

export default function Commitment() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧭</span>
        <h2>PILLAR 5 — SOCIETY & ECOLOGY FIRST</h2>
        <span className="subtitle">Public Value & Ecological Responsibility</span>
      </div>

      <div className="pillar-content">
        <h3>Principle</h3>
        <p>
          Institutional decisions must consider their broader impact on society, communities, and
          ecological systems.
        </p>

        <h3>Why It Matters</h3>
        <p>
          Development that ignores social equity or environmental sustainability undermines long-term
          prosperity and institutional legitimacy.
        </p>

        <h3>How We Operationalise This</h3>
        <ul>
          <li>Social impact assessment</li>
          <li>Ecological considerations in design</li>
          <li>Inclusive stakeholder engagement</li>
          <li>Responsible knowledge dissemination</li>
        </ul>

        <h3>Stakeholder Benefit</h3>
        <ul>
          <li>Sustainable and socially responsible outcomes</li>
          <li>Alignment with global sustainability goals</li>
        </ul>

        {/* <div className="cta">
          <a href="/governance/sustainability" className="learn-more">
            Click → Explore Sustainability Approach
            <span className="arrow">👉</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}