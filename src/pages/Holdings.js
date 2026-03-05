import "../stakeholderlayout.css";

export default function Holdings() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <h2>Vasudheva Holdings Pvt. Ltd.</h2>
        <span className="subtitle">Role: Governance, Strategic Oversight & IP Stewardship</span>
      </div>

      <div className="pillar-content">
        <h3>Core Responsibilities</h3>
        <ul>
          <li>Governance architecture and compliance</li>
          <li>Strategic integration across subsidiaries</li>
          <li>Intellectual property stewardship</li>
          <li>Ethical and conflict-of-interest oversight</li>
          <li>Routing and coordination of engagements</li>
        </ul>

        <div className="cta">
          <a href="/group/holdings-role" className="learn-more">
            Click → Deep Page
            <span className="arrow">👉</span>
          </a>
        </div>

        {/* Optional: hint about deep page content – can be removed or styled differently */}
        <div className="deep-page-info" style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#4a5568' }}>
          <em>Deep page includes:</em>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>Decision rights framework</li>
            <li>Governance protocols</li>
            <li>Oversight mechanisms</li>
            <li>Conflict resolution systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}