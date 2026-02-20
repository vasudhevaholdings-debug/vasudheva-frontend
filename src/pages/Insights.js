import "../stakeholderlayout.css";

export default function Insights() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO */}
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

        {/* INSIGHTS ARCHITECTURE – CATEGORIES / TABS / FILTERS */}
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

        {/* FEATURED / LATEST INSIGHTS (placeholder for dynamic content) */}
        <section className="featured-insights">
          <h2>Latest & Featured Insights</h2>
          
          {/* Example Insight Item – repeat this structure for each */}
          <div className="insight-card">
            <h3>A Framework for Diagnosing Institutional Failure</h3>
            <p className="category-tag">Frameworks & Models</p>
            
            <div className="insight-summary">
              <p>
                Many institutions fail not because of bad intentions, but due to structural misalignments 
                in incentives, information flows, and feedback loops. This framework provides a diagnostic 
                lens to identify root causes systematically.
              </p>
            </div>

            <div className="insight-implications">
              <h4>Implications</h4>
              <ul>
                <li>For institutions: Clearer path to reform</li>
                <li>For businesses: Better governance reduces risk</li>
                <li>For policy: More effective public systems</li>
              </ul>
            </div>

            <div className="button-group">
              <button>Read Full Framework</button>
              <button className="secondary">Apply this to your organisation</button>
            </div>
          </div>

          <div className="insight-card">
            <h3>Education–Industry Mismatch: A Structural Analysis</h3>
            <p className="category-tag">Research & Analysis</p>
            
            <div className="insight-summary">
              <p>
                Persistent skill gaps are not merely curriculum issues—they stem from misaligned 
                incentive structures between education providers and labour markets.
              </p>
            </div>

            <div className="insight-implications">
              <h4>Implications</h4>
              <ul>
                <li>Need for ecosystem-level redesign</li>
                <li>Opportunity for new learning platforms</li>
              </ul>
            </div>

            <div className="button-group">
              <button>Read the Analysis</button>
              <button className="secondary">Request a diagnostic engagement</button>
            </div>
          </div>

          {/* You can add 1–2 more example cards or make this section dynamic */}
        </section>

        {/* CONTENT ITEM TEMPLATE REMINDER / CROSS-LINKING */}
        <section className="insight-template-info">
          <h2>How We Structure Each Insight</h2>
          <ol>
            <li><strong>Title</strong> — Clear and serious</li>
            <li><strong>Context</strong> — Why this matters</li>
            <li><strong>Core Insight</strong> — Framework / argument / evidence</li>
            <li><strong>Implications</strong> — For institutions, business, policy, society</li>
            <li><strong>Application</strong> — How to use this insight</li>
            <li><strong>Action CTA</strong> — Apply this insight / Start a conversation</li>
          </ol>
          <p className="note">
            Every insight links to relevant Services & Solutions or subsidiary pages.
          </p>
        </section>

        {/* FINAL SOFT ACTION SECTION */}
        <section className="final-cta">
          <h2>From Insight to Action</h2>
          <p>
            If an idea here resonates with your challenge, we can help you apply it—carefully, 
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