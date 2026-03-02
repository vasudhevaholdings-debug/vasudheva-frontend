import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function StrategicRole() {
  const navigate = useNavigate();

  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🧠</span>
        <h2>Vasudheva Strategic Innovations Pvt. Ltd.</h2>
        <span className="subtitle">
          Domain: Research, Consulting, Strategy & Systems Design
        </span>
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

        {/* CTA Section */}
        <div className="cta">
          <div className="company-card">
            <strong>Vasudheva Strategic Innovations Pvt. Ltd.</strong>
            <p className="company-description">Research • Consulting • Strategy • Systems Design</p>

            <div className="company-actions">
              <button
                className="company-btn primary"
                onClick={() => navigate("/StrategicService")}
              >
                Explore Services
              </button>

              <button className="company-btn secondary">
                <a href="https://www.linkedin.com/company/vasudheva-strategic-innovations-pvt-ltd/"
  target="_blank"
  rel="noopener noreferrer"
  className="company-btn secondary">  Visit company Website </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}