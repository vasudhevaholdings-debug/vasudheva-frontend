import "../stakeholderlayout.css";

export default function Insights() {
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
              <button>View Frameworks</button>
            </div>

            <div className="category-tile">
              <h3>2. Research & Analysis</h3>
              <p>Policy studies, sectoral analysis, institutional reviews, evidence-based reports</p>
              <p className="example">Example: Institutional Bottlenecks in MSME Growth</p>
              <button>View Research</button>
            </div>

            <div className="category-tile">
              <h3>3. Governance & Systems Design</h3>
              <p>Governance principles, ethics & accountability, institutional reform ideas</p>
              <p className="example">Example: Designing Institutions for Cooperation</p>
              <button>View Governance Insights</button>
            </div>

            <div className="category-tile">
              <h3>4. Education, Media & Knowledge</h3>
              <p>Education reform, learning models, narrative analysis, knowledge dissemination</p>
              <p className="example">Example: Why Education Systems Fail to Create Capability</p>
              <button>View Related Insights</button>
            </div>

            <div className="category-tile">
              <h3>5. Public Notes & Manifestos</h3>
              <p>Public declarations, charters, long-form essays, philosophical reflections</p>
              <p className="example">Example: Towards Joyful Coexistence</p>
              <button>Read Manifestos</button>
            </div>

            <div className="category-tile">
              <h3>6. Group Announcements</h3>
              <p>New company launches, partnerships, major initiatives, public disclosures</p>
              <p className="example">Minimal & factual updates</p>
              <button>View Announcements</button>
            </div>

          </div>
        </section>

        {/* ================= FEATURED INSIGHTS ================= */}
        <section className="featured-insights">
          <h2>Latest & Featured Insights</h2>

          <div className="insight-card-wrapper">

            {/* CARD 1 */}
            <div className="insight-card">
              <h3>A Framework for Diagnosing Institutional Failure</h3>
              <p className="category-tag">Frameworks & Models</p>

              <div className="insight-summary">
                <p>
                  Many institutions fail not because of bad intentions, but due to structural misalignments 
                  in incentives, information flows, and feedback loops.
                </p>
              </div>

              <div className="insight-implications">
                <h4>Implications</h4>
                <ul>
                  <li>Clearer path to reform</li>
                  <li>Reduced governance risk</li>
                  <li>Better policy outcomes</li>
                </ul>
              </div>

              <div className="button-group">
                <button>Read Full Framework</button>
                <button className="secondary">Apply to Your Organisation</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="insight-card">
              <h3>Education–Industry Mismatch</h3>
              <p className="category-tag">Research & Analysis</p>

              <div className="insight-summary">
                <p>
                  Persistent skill gaps arise from misaligned incentives between education systems 
                  and labour markets.
                </p>
              </div>

              <div className="insight-implications">
                <h4>Implications</h4>
                <ul>
                  <li>Ecosystem-level redesign required</li>
                  <li>Opportunity for new learning platforms</li>
                </ul>
              </div>

              <div className="button-group">
                <button>Read the Analysis</button>
                <button className="secondary">Request Engagement</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="insight-card">
              <h3>Designing Institutions for Cooperation</h3>
              <p className="category-tag">Governance & Systems</p>

              <div className="insight-summary">
                <p>
                  Sustainable institutions require incentive alignment, trust architecture, 
                  and transparent feedback systems.
                </p>
              </div>

              <div className="button-group">
                <button>Read Insight</button>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="insight-card">
              <h3>Capability-Centered Education Reform</h3>
              <p className="category-tag">Education</p>

              <div className="insight-summary">
                <p>
                  Reform must shift from information delivery to capability creation and 
                  applied competence.
                </p>
              </div>

              <div className="button-group">
                <button>Read Article</button>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="insight-card">
              <h3>Towards Joyful Coexistence</h3>
              <p className="category-tag">Manifesto</p>

              <div className="insight-summary">
                <p>
                  A philosophical reflection on cooperation, dignity, and shared progress.
                </p>
              </div>

              <div className="button-group">
                <button>Read Manifesto</button>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="insight-card">
              <h3>Vasudheva Group Public Update</h3>
              <p className="category-tag">Announcements</p>

              <div className="insight-summary">
                <p>
                  Overview of recent initiatives, structural developments, and new collaborations.
                </p>
              </div>

              <div className="button-group">
                <button>View Update</button>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="final-cta">
          <h2>From Insight to Action</h2>
          <p>
            If an idea resonates with your challenge, we can help you apply it—carefully,
            responsibly, and with long-term intent.
          </p>

          <div className="button-group">
            <button className="primary">Start a Conversation</button>
            <button>Explore Services & Solutions</button>
            <button>Explore Group Companies</button>
          </div>
        </section>

      </div>
    </section>
  );
}