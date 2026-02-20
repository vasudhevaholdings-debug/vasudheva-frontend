import parentLogo from "../assets/logos/parentLogo.png";
import siLogo from "../assets/logos/siLogo.png";
import eduLogo from "../assets/logos/eduLogo.png";
import mediaLogo from "../assets/logos/mediaLogo_transparent.png";
import publishLogo from "../assets/logos/publishLogo.png";

export default function Companies() {
  return (
    <section id="companies" className="group-showcase">
      <div className="container">

        {/* Main Heading */}
        <h2 className="group-title">Vasudheva Group Structure</h2>

        {/* Parent Company */}
        <div className="group-parent">
          <img src={parentLogo} alt="Vasudheva Holdings" />
          <h3>Vasudheva Holdings</h3>
          <span>Governance & IP</span>
        </div>

        {/* Subsidiaries */}
        <div className="subsidiary-grid">
          <div className="subsidiary-card">
            <img src={siLogo} alt="Strategic Innovations" />
            <p>Strategic Innovations</p>
          </div>

          <div className="subsidiary-card">
            <img src={eduLogo} alt="EduInnovation" />
            <p>EduInnovation</p>
          </div>

          <div className="subsidiary-card">
            <img src={mediaLogo} alt="Media" />
            <p>Media</p>
          </div>

          <div className="subsidiary-card">
            <img src={publishLogo} alt="Publishing" />
            <p>Publishing</p>
          </div>
        </div>

      </div>
    </section>
  );
}
