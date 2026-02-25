import "../stakeholderlayout.css";

export default function Evidence() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧭</span>
        <h2>PILLAR 2 — EVIDENCE BEFORE OPINION</h2>
        <span className="subtitle">Research-Driven Decision-Making</span>
      </div>

      <div className="pillar-content">
        <h3>Principle</h3>
        <p>
          Decisions must be grounded in reliable evidence, rigorous analysis, and contextual
          understanding rather than assumptions or ideological preferences.
        </p>

        <h3>Why It Matters</h3>
        <p>
          Policies and strategies based on incomplete or biased information often produce unintended
          consequences, resource misallocation, and loss of public trust.
        </p>

        <h3>How We Operationalise This</h3>
        <ul>
          <li>Structured diagnostic processes</li>
          <li>Data triangulation and validation</li>
          <li>Systems mapping and stakeholder analysis</li>
          <li>Continuous evaluation and feedback loops</li>
        </ul>

        <h3>Stakeholder Benefit</h3>
        <ul>
          <li>Reduced risk of misaligned interventions</li>
          <li>Credible and defensible decision frameworks</li>
        </ul>

        {/* <div className="cta">
          <a href="/approach/research-diagnosis" className="learn-more">
            Click → Explore Diagnostic Methods
            <span className="arrow">👉</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}