import "../stakeholderlayout.css";

export default function MediaRole() {
  return (
    <div className="pillar-section">
      <div className="pillar-header">
        <span className="emoji">🎥</span>
        <h2>Vasudheva Media Pvt. Ltd.</h2>
        <span className="subtitle">Domain: Media, Communication & Narrative Systems</span>
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

        <div className="cta">
          <a href="/companies/media/role" className="learn-more">
            Click → Deep Page
            <span className="arrow">👉</span>
          </a>
        </div>
      </div>
    </div>
  );
}