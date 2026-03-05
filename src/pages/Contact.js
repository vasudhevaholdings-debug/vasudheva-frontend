import "../stakeholderlayout.css";

export default function Contact() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO */}
        <div className="hero-section">
          <h2>Contact Vasudheva Holdings</h2>
          <p className="subheading">
            For general enquiries, formal communication, compliance matters, or institutional correspondence.
          </p>
          <p className="supporting-line">
            Clear communication. Responsible engagement. Institutional integrity.
          </p>
        </div>

        {/* SECTION 1: OFFICIAL CONTACT INFORMATION */}
        <section>
          <h2>Official Communication Channels</h2>
          <p className="instruction">
            These channels are monitored by the Group Secretariat.
          </p>

          <div className="contact-info-grid">

            <div className="contact-item">
              <h3>📧 Email</h3>
              <a
                href="mailto:connect@vasudhevaholdings.com"
                className="footer-email"
              >
                connect@vasudhevaholdings.com
              </a>
            </div>

            <div className="contact-item">
              <h3>🌐 Website</h3>
              <a
                href="https://www.vasudheva.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-website"
              >
                www.vasudheva.org
              </a>
            </div>

            <div className="contact-item">
              <h3>📍 Registered / Operating Location</h3>
              <a
                href="https://maps.app.goo.gl/c5DfYzXkLQCGWUxb9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-location"
              >
                Samneghat (Jankinagar)
                <br />
                Varanasi, Uttar Pradesh
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 5: LEGAL & POLICY LINKS */}
        <section className="legal-links">
          <h2>Legal & Policy Information</h2>
          <ul className="policy-list">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/trade">Intellectual Property & Trademark Policy</a></li>
            <li><a href="/conduct">Code of Conduct</a></li>
            <li><a href="/grievance">Grievance Redressal Policy</a></li>
          </ul>
        </section>

        {/* SECTION 6: SOCIAL */}
        <section className="social-presence">
          <h2>Public Presence</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/vasudheva-holdings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn (Group Page)
              </a>
            </li>
          </ul>
          <p className="social-note">
            Social channels are used for public communication, not formal correspondence.
          </p>
        </section>

        {/* FOOTNOTE */}
        <div className="final-footnote">
          <p>
            Vasudheva Holdings Pvt. Ltd. does not engage in unsolicited commercial communication.
            All interactions are governed by our values, principles, and policies.
          </p>
        </div>

      </div>
    </section>
  );
}