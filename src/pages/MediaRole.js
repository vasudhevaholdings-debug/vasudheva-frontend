import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function MediaRole() {
  const navigate = useNavigate();

  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🎥</span>
        <h2>Vasudheva Media Pvt. Ltd.</h2>
        <span className="subtitle">
          Domain: Media, Communication & Narrative Systems
        </span>
      </div>

      <div className="pillar-content">
        <h3>Institutional Role</h3>
        <p>
          Develops ethical and strategic communication frameworks that translate
          complex ideas into accessible narratives for diverse audiences.
        </p>

        <h3>Key Functions</h3>
        <ul>
          <li>Narrative strategy</li>
          <li>Public communication systems</li>
          <li>Media production</li>
          <li>Institutional storytelling</li>
        </ul>

        {/* CTA Section */}
        <div className="cta">
          <div className="company-card">
            <strong>Vasudheva Media Pvt. Ltd.</strong>
            <p className="company-description">Content • Media • Communication • Narrative Building</p>

            <div className="company-actions">
              <button
                className="company-btn primary"
                onClick={() => navigate("/mediaservice")}
              >
                Explore Services
              </button>

              <button className="company-btn secondary">
                             <a href="https://www.linkedin.com/company/vasudheva-media-pvt-ltd/"
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