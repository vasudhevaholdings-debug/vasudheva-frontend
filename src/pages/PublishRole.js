import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function PublishRole() {
  const navigate = useNavigate();

  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">📚</span>
        <h2>Vasudheva Publishing Pvt. Ltd.</h2>
        <span className="subtitle">
          Domain: Publishing, Knowledge Production & Intellectual Property Dissemination
        </span>
      </div>

      <div className="pillar-content">
        <h3>Institutional Role</h3>
        <p>
          Ensures the ethical production, preservation, and dissemination of
          knowledge through structured publishing systems and IP stewardship.
        </p>

        <h3>Key Functions</h3>
        <ul>
          <li>Academic & institutional publishing</li>
          <li>Knowledge dissemination systems</li>
          <li>Publication ethics frameworks</li>
          <li>IP management</li>
        </ul>

        {/* CTA Section */}
        <div className="cta">
          <div className="company-card">
            <strong>Vasudheva Publishing Pvt. Ltd.</strong>
            <p className="company-description">Publishing • Knowledge Production • IP Dissemination</p>

            <div className="company-actions">
              <button
                className="company-btn primary"
                onClick={() => navigate("/publishingservice")}
              >
                Explore Services
              </button>

              <button className="company-btn secondary">
                <a href="https://www.linkedin.com/company/vasudheva-publishing-pvt-ltd/"
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