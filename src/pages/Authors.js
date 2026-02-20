import "../stakeholderlayout.css";

export default function Authors() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* Hero Section */}
        <h2 className="hero-title">
          Support for Authors, Researchers & Creators
        </h2>

        <h3 className="hero-subtitle">
          Ethical publishing, research integrity, editorial systems,
          intellectual-property stewardship, and responsible dissemination.
        </h3>

        <p className="hero-text">
          Knowledge does not become public value automatically. It requires
          rigorous writing, research integrity, editorial clarity,
          ethical attribution, and responsible dissemination.
        </p>

        <div className="button-group">
          <button className="primary-btn">
            Submit a Publishing / Research Enquiry
          </button>
          <button className="secondary-btn">
            Request Editorial & Dissemination Guidance
          </button>
        </div>

        <p className="form-note">
          We do not promise fame. We support quality, integrity,
          and long-term knowledge stewardship.
        </p>

        {/* Reality Section */}
        <h2 className="section-title">The Knowledge-Creation Reality</h2>

        <ul className="problem-list">
          <li>Difficulty structuring ideas into coherent manuscripts</li>
          <li>Lack of rigorous review and editorial support</li>
          <li>Predatory publishing ecosystems</li>
          <li>IP confusion and weak rights protection</li>
          <li>Poor dissemination strategy</li>
          <li>Authorship and attribution disputes</li>
        </ul>

        <p className="insight-text">
          These are failures of knowledge production systems — not individual talent.
        </p>

        {/* Breakdown */}
        <h2 className="section-title">
          Where Knowledge Work Typically Breaks Down
        </h2>

        <ol className="challenges-list">
          <li><strong>Idea Without Architecture</strong></li>
          <li><strong>Research Without Integrity Systems</strong></li>
          <li><strong>Publishing Without Stewardship</strong></li>
          <li><strong>Dissemination Without Responsibility</strong></li>
          <li><strong>IP and Attribution Fragility</strong></li>
        </ol>

        {/* Structured Architecture */}
        <h2 className="section-title">Structured Solution Architecture</h2>

        <h3 className="subsection-title">
          SECTION A: Editorial & Publishing Systems
        </h3>

        <ul className="focus-list">
          <li>Manuscript structuring</li>
          <li>Developmental editing</li>
          <li>Copyediting discipline</li>
          <li>Publishing workflow setup</li>
        </ul>

        <button className="btn explore">
          Explore Editorial & Publishing Support
        </button>

        <h3 className="subsection-title">
          SECTION B: Research Integrity & Review Systems
        </h3>

        <ul className="focus-list">
          <li>Research design clarity</li>
          <li>Citation discipline</li>
          <li>Peer review frameworks</li>
          <li>Authorship ethics protocols</li>
        </ul>

        <button className="btn explore">
          Explore Research Quality Support
        </button>

        <h3 className="subsection-title">
          SECTION C: IP & Attribution Stewardship
        </h3>

        <ul className="focus-list">
          <li>Rights clarity</li>
          <li>Licensing structure</li>
          <li>Attribution protection</li>
        </ul>

        <button className="btn explore">
          Explore IP & Authorship Support
        </button>

        {/* Ethics Section */}
        <h2 className="section-title">
          Ethics & Integrity Are Non-Negotiable
        </h2>

        <ul className="problem-list">
          <li>Clear authorship recognition</li>
          <li>Non-plagiarism standards</li>
          <li>Transparency in research</li>
          <li>Confidentiality of drafts</li>
        </ul>

        <p className="principle-text">
          We may decline work that compromises integrity.
        </p>

        {/* Action */}
        <h2 className="section-title">
          Submit Your Publishing / Research Enquiry
        </h2>

        <div className="button-group">
          <button className="primary-btn">Submit Enquiry</button>
          <button className="secondary-btn">Request Editorial Guidance</button>
        </div>

        <p className="footer-note">
          Vasudheva Publishing operates with editorial integrity.
          Engagements are formalised under written terms with clarity of roles and rights.
        </p>

      </div>
    </section>
  );
}
