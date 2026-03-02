import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function InnovationRole() {
  const navigate = useNavigate();

  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🎓</span>
        <h2>Vasudheva EduInnovation Pvt. Ltd.</h2>
        <span className="subtitle">
          Domain: Education Systems, Learning Platforms & Institutional Development
        </span>
      </div>

      <div className="pillar-content">
        <h3>Institutional Role</h3>
        <p>
          Designs and strengthens learning ecosystems that foster critical thinking,
          institutional capacity, and equitable access to knowledge.
        </p>

        <h3>Key Functions</h3>
        <ul>
          <li>Education system design</li>
          <li>Curriculum & pedagogy innovation</li>
          <li>Institutional capacity building</li>
          <li>Digital learning platforms</li>
        </ul>

        {/* CTA Card */}
        <div className="cta">
          <div className="company-card">
            <strong>Vasudheva EduInnovation Pvt. Ltd.</strong>
            <p className="company-description">Education • Learning Platforms • Skills • Institutions</p>

            <div className="company-actions">
              <button
                className="company-btn primary"
                onClick={() => navigate("/EduInnovationService")}
              >
                Explore Services
              </button>

              <button className="company-btn secondary">
                <a href="https://www.linkedin.com/company/vasudhevaeduinnovation-pvt-ltd/"
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