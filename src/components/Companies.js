import siLogo from "../assets/logos/siLogo.png";
import eduLogo from "../assets/logos/eduLogo.png";
import mediaLogo from "../assets/logos/mediaLogo_transparent.png";
import publishLogo from "../assets/logos/publishLogo.png";

export default function Companies() {
  return (
    <section id="companies">
      <div className="container">
        <h2>The Vasudheva Group</h2>

        <ul className="companies-list">
          <li
            className="company-card"
            style={{ "--company-logo": `url(${siLogo})` }}
          >
            <strong>Vasudheva Strategic Innovations Pvt. Ltd.</strong>
            <p>Research • Consulting • Strategy • Systems Design</p>

            <div className="company-actions">
              <button className="company-btn primary">
                Explore Services
              </button>
              <button className="company-btn primary">
                Visit Company Website
              </button>
            </div>
          </li>

          <li
            className="company-card"
            style={{ "--company-logo": `url(${eduLogo})` }}
          >
            <strong>Vasudheva EduInnovation Pvt. Ltd.</strong>
            <p>Education • Learning Platforms • Skills • Institutions</p>

            <div className="company-actions">
              <button className="company-btn primary">
                Explore Services
              </button>
              <button className="company-btn primary">
                Visit Company Website
              </button>
            </div>
          </li>

          <li
            className="company-card"
            style={{ "--company-logo": `url(${mediaLogo})` }}
          >
            <strong>Vasudheva Media Pvt. Ltd.</strong>
            <p>Content • Media • Communication • Narrative Building</p>

            <div className="company-actions">
              <button className="company-btn primary">
                Explore Services
              </button>
              <button className="company-btn primary">
                Visit Company Website
              </button>
            </div>
          </li>

          <li
            className="company-card"
            style={{ "--company-logo": `url(${publishLogo})` }}
          >
            <strong>Vasudheva Publishing Pvt. Ltd.</strong>
            <p>Publishing • Knowledge Production • IP Dissemination</p>

            <div className="company-actions">
              <button className="company-btn primary">
                Explore Services
              </button>
              <button className="company-btn primary">
                Visit Company Website
              </button>
            </div>
          </li>
        </ul>

        <p className="note">
          Each company operates independently, with shared governance,
          values, and strategic alignment.
        </p>
      </div>
    </section>
  );
}
