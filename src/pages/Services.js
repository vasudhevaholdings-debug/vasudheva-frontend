import "../stakeholderlayout.css";

export default function Services() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO — PROBLEM-FIRST ORIENTATION */}
        <div className="hero-section">
          <h2>Services & Solutions</h2>
          <p className="subheading">
            Tell us what problem you are trying to solve. We’ll route you to the right expertise.
          </p>
          <p className="supporting-line">
            We don’t sell generic services. We diagnose problems and deliver solutions through
            specialized companies within the Vasudheva Group.
          </p>

          <div className="button-group hero-cta">
            <button className="primary">Describe Your Problem</button>
          </div>
        </div>

        {/* STEP 1 — IDENTIFY YOUR PROBLEM */}
        <section>
          <h2>What Kind of Challenge Are You Facing?</h2>
          <p className="instruction">
            Select the category that best describes your situation.
          </p>

          <div className="problem-grid">
            <div className="tile">
              <h3>🧠 A. Strategy, Growth & Institutional Design</h3>
              <ul>
                <li>Confusing growth paths</li>
                <li>Weak coordination</li>
                <li>Governance gaps</li>
                <li>Organizational inefficiency</li>
              </ul>
              <p>→ Go to Path A</p>
            </div>

            <div className="tile">
              <h3>🎓 B. Education, Skills & Learning Systems</h3>
              <ul>
                <li>Outdated education models</li>
                <li>Skill gaps</li>
                <li>Poor academia-industry linkage</li>
                <li>Learning platforms</li>
              </ul>
              <p>→ Go to Path B</p>
            </div>

            <div className="tile">
              <h3>📜 C. Policy, Governance & Public Systems</h3>
              <ul>
                <li>Policy design challenges</li>
                <li>Institutional reform</li>
                <li>Stakeholder conflict</li>
                <li>Program evaluation</li>
              </ul>
              <p>→ Go to Path C</p>
            </div>

            <div className="tile">
              <h3>📣 D. Communication, Media & Influence</h3>
              <ul>
                <li>Poor messaging</li>
                <li>Weak public engagement</li>
                <li>Narrative failure</li>
                <li>Brand or reputation challenges</li>
              </ul>
              <p>→ Go to Path D</p>
            </div>

            <div className="tile">
              <h3>📚 E. Knowledge Creation & Publishing</h3>
              <ul>
                <li>Publishing research/books</li>
                <li>IP dissemination</li>
                <li>Content structuring</li>
                <li>Author support</li>
              </ul>
              <p>→ Go to Path E</p>
            </div>

            <div className="tile complex">
              <h3>🧩 F. Not Sure / Complex / Cross-Sector</h3>
              <ul>
                <li>Multi-dimensional problems</li>
                <li>Multiple stakeholders</li>
                <li>System-level confusion</li>
              </ul>
              <p>→ Go to Guided Diagnosis</p>
            </div>
          </div>
        </section>

        {/* PATH A — STRATEGY, GROWTH & INSTITUTIONAL DESIGN */}
        <section className="path-section">
          <h2>Path A — Strategy, Growth & Institutional Design</h2>
          <p><strong>Who This Is For:</strong> MSMEs & startups, Corporates, Institutions, Family businesses, NGOs</p>
          
          <h3>Typical Problems</h3>
          <ul>
            <li>Growth without direction</li>
            <li>Internal conflict or silos</li>
            <li>Weak systems and processes</li>
            <li>Poor decision-making frameworks</li>
          </ul>

          <h3>Our Approach</h3>
          <ul>
            <li>Evidence-based diagnosis</li>
            <li>System and incentive design</li>
            <li>Strategy formulation</li>
            <li>Institutional architecture</li>
          </ul>

          <h3>Delivered Through</h3>
          <p className="company-name">Vasudheva Strategic Innovations Pvt. Ltd.</p>

          <div className="button-group">
            <button>Explore Consulting & Strategy Services</button>
            <button className="secondary">Talk to a Strategy Team Member</button>
          </div>
        </section>

        {/* PATH B — EDUCATION, SKILLS & LEARNING SYSTEMS */}
        <section className="path-section">
          <h2>Path B — Education, Skills & Learning Systems</h2>
          <p><strong>Who This Is For:</strong> Students & learners, Educational institutions, Training providers, Governments & NGOs</p>
          
          <h3>Typical Problems</h3>
          <ul>
            <li>Low learning outcomes</li>
            <li>Irrelevant curriculum</li>
            <li>Skill mismatch</li>
            <li>Poor delivery platforms</li>
          </ul>

          <h3>Our Approach</h3>
          <ul>
            <li>Education ecosystem design</li>
            <li>Curriculum & pedagogy innovation</li>
            <li>Platforms, edtech & delivery models</li>
            <li>Skill & capacity development</li>
          </ul>

          <h3>Delivered Through</h3>
          <p className="company-name">Vasudheva EduInnovation Pvt. Ltd.</p>

          <div className="button-group">
            <button>Explore Education & Learning Solutions</button>
            <button className="secondary">Discuss Your Education Challenge</button>
          </div>
        </section>

        {/* PATH C — POLICY, GOVERNANCE & PUBLIC SYSTEMS */}
        <section className="path-section">
          <h2>Path C — Policy, Governance & Public Systems</h2>
          <p><strong>Who This Is For:</strong> Governments, Political actors, Policy institutions, Think tanks</p>
          
          <h3>Typical Problems</h3>
          <ul>
            <li>Ineffective policy design</li>
            <li>Implementation gaps</li>
            <li>Institutional friction</li>
            <li>Stakeholder misalignment</li>
          </ul>

          <h3>Our Approach</h3>
          <ul>
            <li>Policy research & analysis</li>
            <li>Institutional diagnostics</li>
            <li>Governance frameworks</li>
            <li>Monitoring & evaluation</li>
          </ul>

          <h3>Delivered Through</h3>
          <p className="company-name">Vasudheva Strategic Innovations Pvt. Ltd. (with cross-support from Education & Media where needed)</p>

          <div className="button-group">
            <button>Explore Policy & Governance Services</button>
            <button className="secondary">Request a Policy Consultation</button>
          </div>
        </section>

        {/* PATH D — COMMUNICATION, MEDIA & INFLUENCE */}
        <section className="path-section">
          <h2>Path D — Communication, Media & Influence</h2>
          <p><strong>Who This Is For:</strong> Brands, Institutions, Governments, Creators & public figures</p>
          
          <h3>Typical Problems</h3>
          <ul>
            <li>Weak narrative</li>
            <li>Poor reach or engagement</li>
            <li>Trust deficit</li>
            <li>Fragmented communication</li>
          </ul>

          <h3>Our Approach</h3>
          <ul>
            <li>Narrative & content strategy</li>
            <li>Media production</li>
            <li>Public communication systems</li>
            <li>Reputation & trust building</li>
          </ul>

          <h3>Delivered Through</h3>
          <p className="company-name">Vasudheva Media Pvt. Ltd.</p>

          <div className="button-group">
            <button>Explore Media & Communication Services</button>
            <button className="secondary">Discuss Your Communication Needs</button>
          </div>
        </section>

        {/* PATH E — KNOWLEDGE CREATION & PUBLISHING */}
        <section className="path-section">
          <h2>Path E — Knowledge Creation & Publishing</h2>
          <p><strong>Who This Is For:</strong> Authors, Researchers, Institutions, Think tanks</p>
          
          <h3>Typical Problems</h3>
          <ul>
            <li>Publishing barriers</li>
            <li>Poor dissemination</li>
            <li>IP mismanagement</li>
            <li>Low impact of knowledge</li>
          </ul>

          <h3>Our Approach</h3>
          <ul>
            <li>Editorial & publishing systems</li>
            <li>IP protection & dissemination</li>
            <li>Multi-format publishing</li>
            <li>Knowledge ecosystem building</li>
          </ul>

          <h3>Delivered Through</h3>
          <p className="company-name">Vasudheva Publishing Pvt. Ltd.</p>

          <div className="button-group">
            <button>Explore Publishing Services</button>
            <button className="secondary">Start a Publishing Conversation</button>
          </div>
        </section>

        {/* GUIDED DIAGNOSIS */}
        <section>
          <h2>Not Sure Where You Fit?</h2>
          <p>
            Many challenges cut across strategy, education, policy, and communication.
          </p>
          <div className="button-group">
            <button className="secondary">Request a Guided Diagnosis</button>
          </div>
        </section>

        {/* CROSS-CUTTING LOGIC */}
        <section>
          <h2>How the Group Works Together</h2>
          <p>
            Some problems require more than one subsidiary, sequenced interventions, or long-term engagement.
          </p>
          <p>
            <strong>Vasudheva Holdings:</strong>
          </p>
          <ul>
            <li>Designs the engagement architecture</li>
            <li>Coordinates subsidiaries</li>
            <li>Ensures coherence and accountability</li>
          </ul>
        </section>

        {/* FINAL LEAD CAPTURE */}
        <section className="lead-capture">
          <h2>Start the Right Conversation</h2>
          <p>We review requests carefully and route them thoughtfully.</p>
          <div className="button-group">
            <button className="primary">Route Me to the Right Company</button>
          </div>
          <p className="footnote">
            We don’t push services. We diagnose problems and recommend solutions—even if that means saying “not yet” or “not us.”
          </p>
        </section>

      </div>
    </section>
  );
}