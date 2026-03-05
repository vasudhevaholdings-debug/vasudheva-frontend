import "../stakeholderlayout.css"
export default function Institution() {
  return (
    <section className="page-wrapper">
      <div className="institution-container">

        {/* Hero Section */}
        <div className="institution-hero">
          <h2 className="section-heading">
            Solutions for Institutions & Universities
          </h2>

          <h3 className="hero-subheading">
            Institutional governance, academic quality, learning systems, and long-term reform architecture.
          </h3>

          <p className="hero-description">
            Universities and institutions are not “service organisations”. They are social systems that create knowledge, shape capability, and transmit culture. Reform requires careful institutional diagnosis, governance design, pedagogic architecture, and implementation discipline.
          </p>

          <div className="button-group">
            <button className="primary-btn">
              Describe Your Institutional Challenge
            </button>
            <button className="secondary-btn">
              Request a Guided Institutional Diagnosis
            </button>
          </div>
        </div>

        {/* Institutional Reality */}
        <div className="institution-block">
          <h2 className="section-heading">The Institutional Reality</h2>

          <p className="section-text">
            Educational institutions and universities typically operate under conditions of:
          </p>

          <ul className="styled-list">
            <li>Multiple stakeholders (students, faculty, management, regulators, society)</li>
            <li>Complex governance structures and committee systems</li>
            <li>Legacy processes and institutional memory</li>
            <li>Regulatory and accreditation constraints</li>
            <li>Tensions between academic autonomy and administrative control</li>
            <li>Resource and capacity limitations</li>
            <li>Rapid change pressures (technology, employability, research expectations)</li>
          </ul>

          <p className="section-text">
            Many institutional problems persist not due to lack of intent, but due to weak system design and misaligned incentives.
          </p>
        </div>

        {/* Institutional Struggles */}
        <div className="institution-block">
          <h2 className="section-heading">
            Where Institutions Typically Struggle
          </h2>

          <div className="sub-block">
            <h3 className="sub-heading">A. Governance & Accountability</h3>
            <ul className="styled-list">
              <li>Role ambiguity between governing body, administration, and departments</li>
              <li>Weak feedback loops and decision documentation</li>
              <li>Compliance overload without quality improvement</li>
            </ul>
          </div>

          <div className="sub-block">
            <h3 className="sub-heading">B. Academic Quality & Pedagogic Systems</h3>
            <ul className="styled-list">
              <li>Curriculum drift from learning outcomes</li>
              <li>Weak assessment design</li>
              <li>Teaching-learning processes not systematised</li>
            </ul>
          </div>

          <div className="sub-block">
            <h3 className="sub-heading">C. Student Experience & Capability Formation</h3>
            <ul className="styled-list">
              <li>Misalignment between education and real capability</li>
              <li>Weak mentorship systems</li>
              <li>Ineffective career pathways and placements architecture</li>
            </ul>
          </div>

          <div className="sub-block">
            <h3 className="sub-heading">D. Research Ecosystem & Knowledge Production</h3>
            <ul className="styled-list">
              <li>Research as a compliance activity, not a knowledge mission</li>
              <li>Weak publication ethics, authorship clarity</li>
              <li>Lack of structured research pipelines</li>
            </ul>
          </div>

          <div className="sub-block">
            <h3 className="sub-heading">E. Institutional Communication & Trust</h3>
            <ul className="styled-list">
              <li>Internal mistrust between stakeholders</li>
              <li>External reputation unmanaged or over-managed</li>
              <li>Fragmentation in identity and narrative</li>
            </ul>
          </div>
        </div>

        {/* Engagement Start */}
        <div className="institution-block">
          <h2 className="section-heading">
            Start an Institutional Conversation
          </h2>

          <div className="button-group">
            <button className="primary-btn">
              Describe Your Institutional Challenge
            </button>
            <button className="secondary-btn">
              Request a Guided Institutional Diagnosis
            </button>
          </div>

          <p className="section-text small-text">
            A short description helps us route your request responsibly. We review messages carefully and respond where appropriate.
          </p>
        </div>

        {/* Footer Note */}
        <div className="institution-footer">
          <p>
            Vasudheva Holdings Pvt. Ltd. serves as the governance and integration nucleus of the Vasudheva Group. All external engagements are undertaken by the relevant subsidiary company under formal agreement.
          </p>
        </div>

      </div>
    </section>
  );
}
