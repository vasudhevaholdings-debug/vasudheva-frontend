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
              <p className="highlight">connect@vasudhevaholdings.com</p>
              <p className="note">
                Primary channel for formal and institutional correspondence
              </p>
            </div>

            <div className="contact-item">
              <h3>🌐 Website</h3>
              <p className="highlight">www.vasudheva.org</p>
              <p className="note">
                Group-level website of Vasudheva Holdings Pvt. Ltd.
              </p>
            </div>

            <div className="contact-item">
              <h3>📍 Registered / Operating Location</h3>
              <p className="highlight">
                Samneghat (Jankinagar)<br />
                Varanasi, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTACT BY PURPOSE */}
        <section className="purpose-routing">
          <h2>Contact by Purpose</h2>
          <p>
            For structured or specific requests, we recommend using the most appropriate channel.
          </p>

          <div className="purpose-table">
            <div className="purpose-row">
              <div className="purpose-label">Client / Project Enquiry</div>
              <div className="purpose-channel">Collaborate Page</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Partnership Proposal</div>
              <div className="purpose-channel">Collaborate Page</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Publishing / Author Query</div>
              <div className="purpose-channel">Collaborate → Authors & Creators</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Careers / Fellowship</div>
              <div className="purpose-channel">Collaborate → Talent</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Media / Press</div>
              <div className="purpose-channel">Email with subject: Media Query</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Legal / Compliance</div>
              <div className="purpose-channel">Email with subject: Legal & Compliance</div>
            </div>
            <div className="purpose-row">
              <div className="purpose-label">Grievance / Ethics</div>
              <div className="purpose-channel">Email with subject: Grievance / Ethics</div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GENERAL CONTACT FORM */}
        {/* <section className="general-form-section">
          <h2>General Enquiry</h2>
          <p>
            For matters not covered by structured collaboration paths.
          </p> */}

          {/* This is placeholder markup – implement actual form with your preferred library
          <form className="general-contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="organisation">Organisation / Affiliation (optional)</label>
              <input type="text" id="organisation" name="organisation" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select subject</option>
                <option value="general">General Enquiry</option>
                <option value="media">Media / Press</option>
                <option value="legal">Legal / Compliance</option>
                <option value="grievance">Grievance / Ethics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="primary">
                Submit Enquiry
              </button>
            </div>
          </form>

          <p className="response-note">
            We review all messages carefully and respond where appropriate. 
            Please allow reasonable time for response.
          </p>
        </section> */}

        {/* SECTION 4: GOVERNANCE, ETHICS & COMPLIANCE */}
        <section className="governance-trust">
          <h2>Governance & Ethical Communication</h2>
          <p>
            Vasudheva Holdings Pvt. Ltd. is committed to:
          </p>
          <ul>
            <li>Ethical conduct</li>
            <li>Transparency</li>
            <li>Accountability</li>
            <li>Responsible data handling</li>
            <li>Fair grievance redressal</li>
          </ul>

          <h3>Specific Matters</h3>
          <ul className="specific-matters">
            <li><strong>Conflict of Interest / Ethics</strong> → Subject line: Ethics Disclosure</li>
            <li><strong>Grievance Redressal</strong> → Subject line: Grievance</li>
          </ul>

          <p className="confidential-note">
            All such communications are handled confidentially and reviewed at the appropriate governance level.
          </p>
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

        {/* SECTION 6: SOCIAL & PUBLIC PRESENCE (OPTIONAL) */}
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
            {/* Add actual links when available */}
            {/* <li>YouTube / Media Channels (if applicable)</li> */}
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