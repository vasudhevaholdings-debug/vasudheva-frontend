
import { Link } from "react-router-dom";
import "../stakeholderlayout.css"; 
import gauravPhoto from "../assets/hero/gaurav.jpeg";

export default function Gaurav() {
  return (
    <div className="leadership-detail-page">
      {/* Back link */}
      <div style={{ marginBottom: "40px" }}>
        <Link 
          to="/leadership" 
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "1.1rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          ← Back to Leadership Team
        </Link>
      </div>

      {/* Profile Header */}
      <div className="profile-header" style={{
        display: "flex",
        alignItems: "center",
        gap: "32px",
        flexWrap: "wrap",
        marginBottom: "48px"
      }}>
        <img 
          src={gauravPhoto} 
          alt="Gaurav Dwivedi" 
          style={{
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
        <div>
          <h1 style={{
            margin: "0 0 8px",
            fontSize: "2.8rem",
            color: "#0a2540"
          }}>
            Gaurav Dwivedi
          </h1>
          <h2 style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#475569",
            fontWeight: "500"
          }}>
            Co-Founder<br />
            The Vasudheva Group
          </h2>
        </div>
      </div>

      {/* Full Content – your original text preserved exactly */}
      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
        <p className="resume-text">
          Institutions often design policies and systems from the top, but their success is determined
          on the ground. My work with the Vasudheva Group focuses on ensuring that our institutional
          designs are rooted in empirical realities, stakeholder perspectives, and field-level evidence.
          From grassroots entrepreneurs to educational institutions and community networks, I have
          seen how local contexts shape outcomes. Data collected without context can mislead
          decision-making, and policies designed without field validation can fail in implementation.
          This is why we have built rigorous field research protocols and ground intelligence systems
          within the Group — to ensure that our recommendations are not theoretical abstractions but
          practical, context-sensitive solutions.
          As a founding member, I see Vasudheva as a bridge between institutional intent and ground
          realities. Our commitment is to listen before we design, validate before we recommend, and
          learn continuously from the communities and stakeholders we serve.
          By grounding institutional transformation in real-world evidence, we aim to create solutions
          that are not only effective but also equitable and sustainable.
        </p>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Gaurav Dwivedi is a co-founder of The Vasudheva Group, a knowledge-driven institutional
          ecosystem dedicated to building inclusive systems for societal progress, cooperation, and
          sustainable coexistence. With an interdisciplinary orientation spanning technology, social
          sciences, and institutional studies, he contributes to designing frameworks that integrate
          knowledge, governance, and community development.
          Rooted in scientific reasoning and guided by ethical values, his work focuses on social
          equity, child welfare, institutional development, and the democratization of knowledge. He
          represents a new generation of institution builders committed to harmonizing technological
          advancement with human well-being.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at The Vasudheva Group</h5>
        <p className="resume-text">
          As a founding member, Gaurav plays a strategic and operational role in shaping the group’s
          intellectual direction and institutional architecture.
        </p>

        <h5 className="resume-section-header section-icon">◆ Key Responsibilities</h5>
        <ul className="resume-list diamond-list">
          <li>Co-designing integrated organizational systems and governance frameworks</li>
          <li>Supporting research-driven decision-making models</li>
          <li>Advancing initiatives in social equity and child welfare</li>
          <li>Strengthening institutional partnerships and community engagement</li>
          <li>Contributing to knowledge dissemination through research, media, and publishing platforms</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Institutional Vision Contribution</h5>
        <p className="resume-text">
          Gaurav contributes to the development of the Vasudheva ecosystem through its core
          institutions:
        </p>
        <ul className="resume-list diamond-list">
          <li><strong>Vasudheva Strategic Innovations :</strong> Enabling effective decision-making through research and consulting across individuals, organizations, and governments.</li>
          <li><strong>Vasudheva EduInnovation:</strong> Reimagining learning systems and pedagogies for equitable and future-ready education.</li>
          <li><strong>Vasudheva Media:</strong> Innovating how knowledge, values, and information reach and empower society.</li>
          <li><strong>Vasudheva Publishing:</strong> Transforming publishing models to expand opportunities for authors, scholars, and artists.</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Research & Intellectual Interests</h5>
        <ul className="resume-list diamond-list">
          <li>Mathematics & logical systems</li>
          <li>Anthropology & human cultures</li>
          <li>Economics & social welfare</li>
          <li>Institutional development</li>
          <li>Social equity & child welfare</li>
          <li>Knowledge democratization</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Skills & Expertise</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Institutional & Strategic:</strong> Systems thinking & institutional design; Governance support & coordination; Social impact frameworks</li>
          <li><strong>Technical & Analytical:</strong> Data analysis; Python programming; Front-end development; Computational problem solving</li>
          <li><strong>Business & Outreach:</strong> Account management; Sales & marketing strategy; Stakeholder engagement; Process conceptualization & implementation</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Values & Philosphical Orientation</h5>
        <p className="resume-text">Liberal • Secular • Democratic • Inclusive • Scientific • Spiritual. </p>
        <p className="resume-text">
          Gaurav believes in harmonizing rational inquiry with ethical responsibility to foster
          cooperation, equity, and sustainable societal evolution.
        </p>

        <h5 className="resume-section-header section-icon">◆ Leadership & Psychological Profile</h5>
        <h5 className="resume-section-header section-icon">Leadership Style </h5>
        <ul className="resume-list diamond-list">
          <li> Collaborative & inclusive </li>
          <li> Research-informed decision making </li>
          <li> Value-driven and ethical </li>
          <li> Systems-oriented </li>
        </ul>
        <h5 className="resume-section-header section-icon">Organizational Impact </h5>
        <ul className="resume-list diamond-list">
          <li> Builds trust-based institutional cultures </li>
          <li> Enhances operational clarity and coordination </li>
          <li> Integrates ethics with execution </li>
          <li> Encourages interdisciplinary thinking </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Vision for Society </h5>
        <p className="resume-text">Gaurav envisions a society where: </p>
        <ul className="resume-list diamond-list">
          <li> Knowledge is accessible and democratized </li>
          <li> Institutions are inclusive and accountable </li>
          <li> Children and vulnerable groups receive equitable opportunities </li>
          <li> Cooperation replaces conflict in socio-economic systems </li>
          <li> Technology serves human well-being and sustainability </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Personal Mission</h5>
        <p className="resume-text">
          "To contribute meaningfully to the progress, cohesion, and evolution of society by building inclusive systems that harmonize knowledge, institutions, and the environment."
        </p>

        <h5 className="resume-section-header section-icon">◆ Connect & Collaborate</h5>
        <p className="resume-text">
          Gaurav Dwivedi welcomes collaboration with educators, policymakers, entrepreneurs, researchers, and institutions committed to building a more equitable and sustainable future.
        </p>
        <p className="resume-text">
          Together, we can design systems that enable joyful coexistence.
        </p>
      </div>

      {/* Footer buttons */}
      <div className="detail-buttons" style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        marginTop: "64px",
        flexWrap: "wrap"
      }}>
        <Link to="/parentcompanies" className="action-button secondary">
          Explore Group Structure →
        </Link>
        <Link to="/Contact" className="action-button primary">
          Route a Request →
        </Link>
      </div>
    </div>
  );
}