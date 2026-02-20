import "../stakeholderlayout.css";

export default function Collaborate() {
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
                <button className="primary">Start a Client Conversation</button>
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
                <button className="primary">Propose a Partnership</button>
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
                <button className="primary">Start a Publishing or Knowledge Conversation</button>
              </div>
            </div>

            {/* PATH 4 – TALENT, FELLOWS & CONTRIBUTORS */}
            <div className="path-card">
              <h3>PATH 4 — Talent, Fellows & Contributors</h3>
              <p className="who-for">
                <strong>Who this is for:</strong> Researchers & analysts, educators & trainers, 
                media professionals, designers, technologists, strategists, students & early-career professionals
              </p>

              <h4>Typical Intentions</h4>
              <ul>
                <li>Work with the Vasudheva Group</li>
                <li>Join research, education, or media initiatives</li>
                <li>Contribute expertise or ideas</li>
                <li>Explore long-term association</li>
              </ul>

              <h4>How collaboration works</h4>
              <ul>
                <li>Expression of interest</li>
                <li>Review of profile and intent</li>
                <li>Alignment with group needs and values</li>
                <li>Engagement through roles, fellowships, or projects</li>
              </ul>

              <p className="delivered-through">
                Coordinated by relevant subsidiary (aligned through group-level principles)
              </p>

              <div className="button-group">
                <button className="primary">Express Interest in Working with Us</button>
              </div>
            </div>

            {/* PATH 5 – GUIDED & COMPLEX COLLABORATION */}
            <div className="path-card complex">
              <h3>PATH 5 — Guided & Complex Collaboration</h3>
              <p className="who-for">
                <strong>When to choose this:</strong> Your interest spans multiple areas, you represent a consortium or coalition, 
                the problem is systemic or long-term, or you are unsure which company to approach
              </p>

              <h4>How this works</h4>
              <ul>
                <li>Initial guided conversation</li>
                <li>Clarification of intent and scope</li>
                <li>Design of a multi-company or phased engagement</li>
              </ul>

              <p className="delivered-through">
                Coordinated by Vasudheva Holdings Pvt. Ltd.
              </p>

              <div className="button-group">
                <button className="primary">Request a Guided Conversation</button>
              </div>
            </div>

          </div>
        </section>

        {/* COLLABORATION PRINCIPLES – TRUST SIGNAL */}
        <section className="principles-section">
          <h2>How We Approach Collaboration</h2>
          <p>We believe collaboration must be:</p>
          <ul>
            <li>Purpose-aligned</li>
            <li>Ethically grounded</li>
            <li>Evidence-based</li>
            <li>Transparent and accountable</li>
            <li>Respectful of all stakeholders</li>
            <li>Sensitive to social and ecological impact</li>
          </ul>

          <p className="important-note">
            We may decline engagements that conflict with our values, are extractive or short-termist, 
            or undermine trust or public interest. This protects all parties.
          </p>
        </section>

        {/* FINAL UNIFIED CALL TO ACTION */}
        <section className="final-cta">
          <h2>Start the Right Conversation</h2>
          <p>We respond thoughtfully—not automatically.</p>

          <div className="button-group large">
            <button className="primary">Submit & Route My Request</button>
          </div>

          <p className="footnote">
            We value clarity over urgency. Every collaboration begins with understanding, not assumptions.
          </p>
        </section>

      </div>
    </section>
  );
}