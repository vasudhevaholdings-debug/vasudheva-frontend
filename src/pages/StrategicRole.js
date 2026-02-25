import "../stakeholderlayout.css";

export default function StrategicRole() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧠</span>
        <h2>Vasudheva Strategic Innovations Pvt. Ltd.</h2>
        <span className="subtitle">Domain: Research, Consulting, Strategy & Systems Design</span>
      </div>

      <div className="pillar-content">
        <h3>Institutional Role</h3>
        <p>
          Addresses complex organisational, economic, and policy challenges
          through evidence-based research, systems thinking, and strategic design.
        </p>

        <h3>Key Functions</h3>
        <ul>
          <li>Economic & policy analysis</li>
          <li>Institutional diagnostics</li>
          <li>Strategy and systems design</li>
          <li>Governance frameworks</li>
        </ul>

        <div className="cta">
          <a href="/companies/strategic-innovations/role" className="learn-more">
            Click → Deep Page
            <span className="arrow">👉</span>
          </a>
        </div>
      </div>
    </div>
  );
}