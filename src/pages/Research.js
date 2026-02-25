import "../stakeholderlayout.css";

export default function Research() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🔷</span>
        <h2>STEP 1: RESEARCH & DIAGNOSIS</h2>
        <span className="subtitle">Convert Confusion into Clarity</span>
      </div>

      <div className="pillar-content">
        <h3>Purpose</h3>
        <p>
          To understand the real problem, not just its symptoms, by identifying root causes,
          constraints, stakeholders, and feasible levers for change.
        </p>

        <h3>Why This Step Matters</h3>
        <p>
          Most institutional failures occur due to premature action without diagnosis. Acting without
          understanding leads to misaligned solutions, resource waste, and unintended consequences.
        </p>

        <h3>What We Examine</h3>
        <ul>
          <li>Root causes vs surface symptoms</li>
          <li>Institutional constraints and incentives</li>
          <li>Stakeholder dynamics and power structures</li>
          <li>Existing systems and failure points</li>
          <li>Data gaps and evidence reliability</li>
        </ul>

        <h3>Methods Used</h3>
        <ul>
          <li>Systems mapping</li>
          <li>Stakeholder analysis</li>
          <li>Policy and institutional review</li>
          <li>Field observations & interviews</li>
          <li>Data triangulation</li>
        </ul>

        <h3>Outputs</h3>
        <ul>
          <li>Diagnostic note</li>
          <li>System map</li>
          <li>Decision options</li>
          <li>Risk assessment</li>
        </ul>

        <div className="cta">
          <a href="/approach/research-diagnosis" className="learn-more">
            Click → Deep Page
            <span className="arrow">👉</span>
          </a>
        </div>
      </div>
    </div>
  );
}