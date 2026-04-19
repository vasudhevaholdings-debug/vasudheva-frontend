import "../stakeholderlayout.css";
import { useNavigate } from "react-router-dom";

export default function Insights() {
  const navigate = useNavigate();

  return (
    <section className="page-wrapper">
      <div className="container">

        {/* ================= HERO SECTION ================= */}
        <div className="hero-section">
          <h2>Insights & Thought Leadership</h2>
          <p className="subheading">
            Research, frameworks, reflections, and public knowledge from the Vasudheva Group.
          </p>
          <p className="supporting-line">
            Our work begins with understanding systems, institutions, and human behaviour—and ends
            with better decisions, better coordination, and better outcomes.
          </p>
        </div>

        {/* ================= INTELLECTUAL LANES ================= */}
        <section>
          <h2>Our Intellectual Lanes</h2>
          <p className="instruction">
            Browse content structured into clear categories for focused exploration.
          </p>

          <div className="insights-categories-grid">

            <div className="category-tile">
              <h3>1. Frameworks & Models</h3>
              <p>System design frameworks, institutional models, decision tools, governance architectures</p>
              <p className="example">Example: A Framework for Diagnosing Institutional Failure</p>
              <button onClick={() => navigate("/frameworks")}>View Frameworks</button>
            </div>

            <div className="category-tile">
              <h3>2. Research & Analysis</h3>
              <p>Policy studies, sectoral analysis, institutional reviews, evidence-based reports</p>
              <p className="example">Example: Institutional Bottlenecks in MSME Growth</p>
              <button onClick={() => navigate("/research")}>View Research</button>
            </div>

            <div className="category-tile">
              <h3>3. Governance & Systems Design</h3>
              <p>Governance principles, ethics & accountability, institutional reform ideas</p>
              <p className="example">Example: Designing Institutions for Cooperation</p>
              <button onClick={() => navigate("/governance")}>View Governance Insights</button>
            </div>

            <div className="category-tile">
              <h3>4. Education, Media & Knowledge</h3>
              <p>Education reform, learning models, narrative analysis, knowledge dissemination</p>
              <p className="example">Example: Why Education Systems Fail to Create Capability</p>
              <button onClick={() => navigate("/education")}>View Related Insights</button>
            </div>

            <div className="category-tile">
              <h3>5. Public Notes & Manifestos</h3>
              <p>Public declarations, charters, long-form essays, philosophical reflections</p>
              <p className="example">Example: Towards Joyful Coexistence</p>
              <button onClick={() => navigate("/manifestos")}>Read Manifestos</button>
            </div>

            <div className="category-tile">
              <h3>6. Group Announcements</h3>
              <p>New company launches, partnerships, major initiatives, public disclosures</p>
              <p className="example">Minimal & factual updates</p>
              <button onClick={() => navigate("/announcements")}>View Announcements</button>
            </div>

          </div>
        </section>

        {/* ================= FEATURED INSIGHTS ================= */}
        <section className="featured-insights">
          <h2>Latest & Featured Insights</h2>

          <div className="insight-card-wrapper">

            <div className="insight-card">
              <h3>A Framework for Diagnosing Institutional Failure</h3>
              <p className="category-tag">Frameworks & Models</p>
              <div className="insight-summary">
                <p>
                  Many institutions fail due to structural misalignments in incentives and feedback loops.
                </p>
              </div>
              <div className="button-group">
                <button onClick={() => navigate("/framework-detail")}>Read Full Framework</button>
                <button className="secondary">Apply to Your Organisation</button>
              </div>
            </div>

            <div className="insight-card">
              <h3>Education–Industry Mismatch</h3>
              <p className="category-tag">Research & Analysis</p>
              <div className="insight-summary">
                <p>
                  Skill gaps arise from misaligned incentives between education and labour markets.
                </p>
              </div>
              <div className="button-group">
                <button onClick={() => navigate("/research-detail")}>Read the Analysis</button>
                <button className="secondary">Request Engagement</button>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="final-cta">
          <h2>From Insight to Action</h2>
          <p>
            If an idea resonates with your challenge, we can help you apply it carefully and responsibly.
          </p>

          <div className="button-group">
            
            <button 
              className="primary" 
              onClick={() => navigate("/clientconversation")}
            >
              Start a Conversation
            </button>

            <button onClick={() => navigate("/services")}>
              Explore Services & Solutions
            </button>

            <button 
              className="btn-primary"
              onClick={() => navigate("/parentcompanies")}
            >
              Explore Group Companies
            </button>

          </div>
        </section>

      </div>
    </section>
  );
}