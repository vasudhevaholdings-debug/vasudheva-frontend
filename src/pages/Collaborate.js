import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function Collaborate() {
  const navigate = useNavigate();

  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO */}
        <div className="hero-section">
          <h2>Collaborate with the Vasudheva Group</h2>
          <p className="subheading">
            We collaborate with individuals, institutions, organisations, governments, and creators 
            to design solutions, build systems, and strengthen knowledge ecosystems.
          </p>
          <p className="supporting-line">
            Choose the collaboration path that best reflects who you are and what you are trying to achieve.
          </p>
        </div>

        {/* COLLABORATION PATHS – PRIMARY SECTION */}
        <section>
          <h2>Select Your Collaboration Path</h2>
          <p className="instruction">
            Choose the option that best describes your interest in collaborating with us.
          </p>

          <div className="collaboration-grid">

            {/* PATH 1 – CLIENTS & ORGANISATIONS */}
            <div className="path-card">
              <h3>PATH 1 — Clients & Organisations</h3>
              <p className="who-for">
                <strong>Who this is for:</strong> MSMEs, startups, corporates, educational institutions, 
                governments & public bodies, foundations, NGOs, think tanks
              </p>

              <h4>Typical Intentions</h4>
              <ul>
                <li>Solve a strategic or institutional problem</li>
                <li>Design or reform systems</li>
                <li>Improve coordination or governance</li>
                <li>Build education, media, or knowledge initiatives</li>
              </ul>

              <h4>How collaboration works</h4>
              <ol>
                <li>Initial problem description</li>
                <li>Diagnostic discussion</li>
                <li>Routing to the appropriate subsidiary</li>
                <li>Structured engagement proposal</li>
              </ol>

              <p className="delivered-through">
                Delivered through relevant Vasudheva subsidiary (coordinated by Holdings when required)
              </p>

              <div className="button-group">
                <button 
                  className="primary" 
                  onClick={() => navigate("/clientconversation")}
                >
                  Start a Client Conversation
                </button>
              </div>
            </div>

            {/* PATH 2 – PARTNERS & ALLIANCES */}
            <div className="path-card">
              <h3>PATH 2 — Partners & Alliances</h3>
              <p className="who-for">
                <strong>Who this is for:</strong> Universities & research institutions, corporates & industry bodies, 
                government agencies, international organisations, technology & platform partners
              </p>

              <h4>Typical Intentions</h4>
              <ul>
                <li>Joint research or programs</li>
                <li>Co-creation of platforms or institutions</li>
                <li>Policy or ecosystem initiatives</li>
                <li>Long-term strategic partnerships</li>
              </ul>

              <h4>How collaboration works</h4>
              <ul>
                <li>Alignment of purpose and values</li>
                <li>Definition of shared objectives</li>
                <li>Governance and role clarity</li>
                <li>Formal partnership structure (MoU / Agreement)</li>
              </ul>

              <p className="delivered-through">
                Coordinated by Vasudheva Holdings Pvt. Ltd.
              </p>

              <div className="button-group">
                <button 
                  className="primary"
                  onClick={() => navigate("/partnership")}
                >
                  Propose a Partnership
                </button>
              </div>
            </div>

            {/* PATH 3 – AUTHORS, RESEARCHERS & CREATORS */}
            <div className="path-card">
              <h3>PATH 3 — Authors, Researchers & Creators</h3>
              <p className="who-for">
                <strong>Who this is for:</strong> Authors & researchers, academicians & scholars, 
                journalists & thinkers, serious content creators
              </p>

              <h4>Typical Intentions</h4>
              <ul>
                <li>Publish books, research, or reports</li>
                <li>Collaborate on knowledge projects</li>
                <li>Create educational or media content</li>
                <li>Disseminate ideas responsibly</li>
              </ul>

              <h4>How collaboration works</h4>
              <ul>
                <li>Editorial or research discussion</li>
                <li>Evaluation of fit and quality</li>
                <li>Publishing or content pathway design</li>
                <li>Clear IP, rights, and responsibility framework</li>
              </ul>

              <p className="delivered-through">
                Delivered through Vasudheva Publishing Pvt. Ltd. (with support from Media or Education where relevant)
              </p>

              <div className="button-group">
                <button 
                  className="primary"
                  onClick={() => navigate("/publishing")}
                >
                  Start a Publishing or Knowledge Conversation
                </button>
              </div>
            </div>

            {/* PATH 4 – TALENT */}
            <div className="path-card">
              <h3>PATH 4 — Talent, Fellows & Contributors</h3>

              <div className="button-group">
                <button 
                  className="primary"
                  onClick={() => navigate("/careers")}
                >
                  Express Interest in Working with Us
                </button>
              </div>
            </div>

            {/* PATH 5 */}
            <div className="path-card complex">
              <h3>PATH 5 — Guided & Complex Collaboration</h3>

              <div className="button-group">
                <button 
                  className="primary" 
                  onClick={() => navigate("/clientconversation")}
                >
                  Request a Guided Conversation
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}