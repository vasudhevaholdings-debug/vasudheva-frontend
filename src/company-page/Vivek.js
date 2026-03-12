
import { Link } from "react-router-dom";
import "../stakeholderlayout.css"; 
import vivekPhoto from "../assets/hero/vivek.jpeg";

export default function Vivek() {
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
          src={vivekPhoto} 
          alt="Vivek Kumar Ojha" 
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
            Mr. Vivek Kumar Ojha
          </h1>
          <h2 style={{
            margin: 0,
            fontSize: "1.5rem",
            color: "#475569",
            fontWeight: "500"
          }}>
            Founding Team Member & National Spokesperson<br />
            Head — Cultural & Spiritual Consulting, The Vasudheva Group
          </h2>
        </div>
      </div>

      {/* Full Content – your original text preserved exactly */}
      <div className="profile-content" style={{ maxWidth: "900px" }}>
        <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
        <p className="resume-text">
          Institutional engagements succeed when expectations are clear, responsibilities are defined,
          and communication is transparent. My role within the Vasudheva Group is to ensure that
          every engagement is governed with clarity, accountability, and mutual trust.
          Too often, organisations enter partnerships without a shared understanding of scope,
          outcomes, or constraints. This leads to misaligned expectations, scope creep, and strained
          relationships. To address this, we have developed structured engagement governance
          frameworks — from onboarding protocols to agreement design and stakeholder
          communication systems — that protect both the client and the integrity of our work.
          As a founding member, I believe that trust is built through consistency, transparency, and
          responsible commitments. Our aim is not merely to deliver services but to build long-term
          partnerships grounded in governance and shared purpose.
          By ensuring that engagements are structured and ethically aligned, we create the conditions
          necessary for meaningful and sustainable institutional transformation.
        </p>
        <blockquote className="resume-quote">
          “True progress is achieved when knowledge enlightens systems, ethics guide actions, and 
          culture nurtures harmony. Our civilizational wisdom offers timeless principles for building a 
          just, sustainable, and compassionate society.” 
        </blockquote>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Mr. Vivek Kumar Ojha is a founding team member and national spokesperson of The
          Vasudheva Group, where he leads Cultural & Spiritual Consulting. A scholar of Indian
          knowledge systems and a public communicator, he plays a central role in articulating the
          group’s philosophical foundations and translating civilizational wisdom into contemporary
          institutional frameworks.
          His work integrates ethics, culture, spirituality, and social responsibility into governance,
          education, and community initiatives—strengthening the moral and cultural foundations of
          modern organizations.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role in The Vasudheva Group </h5>
        <h5 className="resume-section-header section-icon">National Spokesperson </h5>
        <p className="resume-text">
          Mr. Ojha represents the group’s vision in public forums, media engagements, academic 
          platforms, and community dialogues. 
        </p>
        <p className="resume-text"><strong>Key Contributions: </strong></p>
        <ul className="resume-list diamond-list">
          <li> Communicating the philosophy of Joyful Coexistence </li>
          <li> Building trust through value-based public narratives </li>
          <li> Strengthening stakeholder engagement across sectors </li>
          <li> Representing Vasudheva in cultural and intellectual discourse </li>
        </ul>

        <h5 className="resume-section-header section-icon">Head — Cultural & Spiritual Consulting </h5>
        <p className="resume-text">
          He leads initiatives that integrate Indian civilizational wisdom into institutional systems and 
          social programs. 
        </p>
        <p className="resume-text"><strong>Focus Areas: </strong></p>
        <ul className="resume-list diamond-list">
          <li> Ethical governance frameworks </li>
          <li> Cultural integration strategies </li>
          <li> Value-based education models </li>
          <li> Spiritual well-being and leadership </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Vision & Philosophy </h5>
        <p className="resume-text"><strong>Core Belief</strong> </p>
        <p className="resume-text">
          “Sustainable systems emerge when knowledge, ethics, and culture evolve together.” 
        </p>
        <p className="resume-text">
          Mr. Ojha advocates a development paradigm that balances material progress with spiritual 
          and cultural depth. His approach emphasizes: 
        </p>
        <ul className="resume-list diamond-list">
          <li> Harmony between tradition and modernity </li>
          <li> Ethical foundations for institutional systems </li>
          <li> Social cohesion through shared cultural values </li>
          <li> Inner development as a prerequisite for societal progress </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Areas of Expertise </h5>
        <h5 className="resume-section-header section-icon">Cultural & Civilizational Studies </h5>
        <ul className="resume-list diamond-list">
          <li> Indian knowledge systems </li>
          <li> Sanskritic traditions and classical philosophy </li>
          <li> Civilizational ethics and social harmony </li>
        </ul>
        <h5 className="resume-section-header section-icon">Ethical & Spiritual Advisory </h5>
        <ul className="resume-list diamond-list">
          <li> Value-based leadership </li>
          <li> Institutional ethics frameworks </li>
          <li> Spiritual psychology and human development </li>
        </ul>
        <h5 className="resume-section-header section-icon">Public Communication & Narrative Building </h5>
        <ul className="resume-list diamond-list">
          <li> Translating philosophical concepts into accessible language </li>
          <li> Cultural diplomacy and community engagement </li>
          <li> Public speaking and thought leadership </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Strategic Contributions to Society </h5>
        <h5 className="resume-section-header section-icon">For Institutions </h5>
        <ul className="resume-list diamond-list">
          <li> Embedding ethical frameworks in governance </li>
          <li> Designing culturally grounded organizational strategies </li>
          <li> Strengthening institutional legitimacy through value alignment </li>
        </ul>
        <h5 className="resume-section-header section-icon">For Education Systems </h5>
        <ul className="resume-list diamond-list">
          <li> Integrating value education and cultural literacy </li>
          <li> Developing holistic learning models </li>
          <li> Promoting character development alongside academic excellence </li>
        </ul>
        <h5 className="resume-section-header section-icon">For Communities </h5>
        <ul className="resume-list diamond-list">
          <li> Encouraging social harmony and coexistence </li>
          <li> Reviving civilizational awareness </li>
          <li> Promoting inclusive cultural dialogue </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Leadership & Personal Ethos </h5>
        <p className="resume-text"><strong>Guiding Values:</strong> Liberal | Secular | Socialist | Spiritual | Scholarly | Philanthropic </p>
        <h5 className="resume-section-header section-icon">Leadership Style: </h5>
        <ul className="resume-list diamond-list">
          <li> Moral authority rooted in values </li>
          <li> Influence through dialogue and ideas </li>
          <li> Inclusive and community-oriented approach </li>
        </ul>
        <p className="resume-text"><strong>Archetype:</strong> The Sage-Communicator — blending wisdom with public engagement. </p>

        <h5 className="resume-section-header section-icon">◆ Alignment with Vasudheva Philosophy </h5>
        <p className="resume-text">
          Mr. Ojha’s work advances the group’s guiding pillars: 
        </p>
        <ul className="resume-list diamond-list">
          <li>For Knowledge — Reviving and disseminating Indian knowledge traditions </li>
          <li>For System — Embedding ethics into governance structures </li>
          <li>For Society — Promoting harmony and shared cultural identity </li>
          <li>For Sustainability — Integrating spiritual consciousness with development </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Public Engagement & Initiatives </h5>
        <p className="resume-text">He actively participates in: </p>
        <ul className="resume-list diamond-list">
          <li> Cultural dialogues and civilizational discourse </li>
          <li> Ethical governance workshops </li>
          <li> Spiritual well-being and leadership sessions </li>
          <li> Educational and community outreach programs </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Speaking & Collaboration </h5>
        <p className="resume-text"><strong>Available For: </strong></p>
        <ul className="resume-list diamond-list">
          <li> Keynote lectures on Indian knowledge systems </li>
          <li> Cultural integration workshops for institutions </li>
          <li> Ethical leadership training programs </li>
          <li> Community harmony and dialogue initiatives </li>
        </ul>
        <p className="resume-text"><strong>Collaboration Areas:</strong> Education | Governance | Community Development | Cultural 
          Diplomacy | Spiritual Well-being </p>

        <h5 className="resume-section-header section-icon">◆ Quick Facts </h5>
        <ul className="resume-list diamond-list">
          <li> Founding Team Member, The Vasudheva Group </li>
          <li> National Spokesperson & Public Communicator </li>
          <li> Head — Cultural & Spiritual Consulting </li>
          <li> Scholar of Indian Knowledge Systems </li>
          <li> Advocate of Ethical Governance & Social Harmony </li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Connect & Collaborate </h5>
        <p className="resume-text">
          Vivek welcomes collaboration with educators, policymakers, entrepreneurs, researchers, 
          and institutions committed to building a more equitable and sustainable future. 
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