import "../stakeholderlayout.css";

export default function LongTerm() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧭</span>
        <h2>PILLAR 3 — LONG-TERM INSTITUTIONAL VIEW</h2>
        <span className="subtitle">Sustainability Over Short-Term Gains</span>
      </div>

      <div className="pillar-content">
        <h3>Principle</h3>
        <p>
          Institutional resilience requires long-term thinking that prioritises sustainability, adaptability,
          and continuity over immediate outputs.
        </p>

        <h3>Why It Matters</h3>
        <p>
          Short-term interventions often create dependency, erode institutional capacity, and fail to
          address root causes.
        </p>

        <h3>How We Operationalise This</h3>
        <ul>
          <li>Governance frameworks that outlast projects</li>
          <li>Institutional capacity building</li>
          <li>Documentation and knowledge preservation</li>
          <li>Adaptive learning systems</li>
        </ul>

        <h3>Stakeholder Benefit</h3>
        <ul>
          <li>Durable outcomes</li>
          <li>Reduced future uncertainty</li>
          <li>Institutional continuity</li>
        </ul>

        {/* <div className="cta">
          <a href="/approach/institutional-memory" className="learn-more">
            Click → Learn About Institutional Memory
            <span className="arrow">👉</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}