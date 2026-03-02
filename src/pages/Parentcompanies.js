import "../stakeholderlayout.css";

export default function Parentcompanies() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO */}
        <div className="hero-section">
          <h2>The Vasudheva Group</h2>
          <p className="subheading">
            A group of specialized companies integrated through shared purpose, governance, and strategy.
          </p>
          <p className="supporting-line">
            Vasudheva Holdings Pvt. Ltd. serves as the parent, holding, and intellectual-property company of the Group, 
            ensuring coherence, accountability, and long-term alignment.
          </p>
        </div>

        {/* GROUP STRUCTURE OVERVIEW */}
        <section>
          <h2>How the Group Is Structured</h2>
          <p className="visual-hint">
            {/* Designer note: Place a central-node diagram here – Vasudheva Holdings in center, 4 subsidiaries around it with arrows for Governance, IP & Brand Ownership, Strategy Coordination */}
          </p>
          <p>
            Each subsidiary operates as an independent company with its own leadership, delivery teams, and clients.
            Vasudheva Holdings provides group-level governance, strategy, and integration.
          </p>
        </section>

        {/* PARENT COMPANY – CLEARLY SEPARATED */}
        <section className="parent-company">
          <h2>Vasudheva Holdings Pvt. Ltd.</h2>
          <p className="tagline">Parent • Holding • IP • Governance Company</p>

          <h3>Role</h3>
          <ul>
            <li>Group strategy & institutional architecture</li>
            <li>Governance, ethics, and compliance</li>
            <li>Intellectual property & brand ownership</li>
            <li>Knowledge integration and long-term planning</li>
            <li>Coordination of cross-company initiatives</li>
          </ul>

          <h3>What We Do Not Do</h3>
          <ul>
            <li>Routine service delivery</li>
            <li>Project execution for external clients</li>
          </ul>
          <p className="emphasis">
            All delivery is carried out by subsidiary companies.
          </p>

          <div className="button-group">
            <button>Learn about Group Philosophy & Governance</button>
            <button>Start a Group-level Conversation</button>
          </div>
        </section>

        {/* DELIVERY COMPANIES – SUBSIDIARIES */}
        <section>
          <h2>Delivery Companies (Subsidiaries)</h2>

          {/* COMPANY 1 – Strategic Innovations */}
          <div className="company-card">
            <h3>Vasudheva Strategic Innovations Pvt. Ltd.</h3>
            <p className="domain">
              Research • Consulting • Strategy • Systems & Institutional Design
            </p>

            <h4>Who This Company Serves</h4>
            <ul>
              <li>MSMEs & startups</li>
              <li>Corporates & family businesses</li>
              <li>Institutions & NGOs</li>
              <li>Governments & policy bodies</li>
            </ul>

            <h4>Core Capabilities</h4>
            <ul>
              <li>Research & analysis</li>
              <li>Strategy & growth planning</li>
              <li>Organisational & institutional design</li>
              <li>Policy & governance consulting</li>
              <li>System diagnostics & reform</li>
            </ul>

            <h4>Typical Engagements</h4>
            <ul>
              <li>Strategy redesign</li>
              <li>Institutional restructuring</li>
              <li>Policy formulation & evaluation</li>
              <li>Multi-stakeholder coordination</li>
            </ul>

            <div className="button-group">
              <button>Explore Strategy & Consulting Services</button>
              <button>Visit Company Website</button>
              <button className="secondary">Contact Strategic Innovations Team</button>
            </div>
          </div>

          {/* COMPANY 2 – EduInnovation */}
          <div className="company-card">
            <h3>Vasudheva EduInnovation Pvt. Ltd.</h3>
            <p className="domain">
              Education • Learning Systems • Skills • Capacity Building
            </p>

            <h4>Who This Company Serves</h4>
            <ul>
              <li>Students & learners</li>
              <li>Schools, colleges & universities</li>
              <li>Training providers & EdTech firms</li>
              <li>Governments & development organisations</li>
            </ul>

            <h4>Core Capabilities</h4>
            <ul>
              <li>Education ecosystem design</li>
              <li>Curriculum & pedagogy innovation</li>
              <li>Skill development & certifications</li>
              <li>Learning platforms & EdTech</li>
              <li>Academic-industry integration</li>
            </ul>

            <h4>Typical Engagements</h4>
            <ul>
              <li>Curriculum redesign</li>
              <li>Skill development programs</li>
              <li>Education platforms</li>
              <li>Institutional capacity building</li>
            </ul>

            <div className="button-group">
              <button>Explore Education & Learning Solutions</button>
              <button>Visit Company Website</button>
              <button className="secondary">Contact EduInnovation Team</button>
            </div>
          </div>

          {/* COMPANY 3 – Media */}
          <div className="company-card">
            <h3>Vasudheva Media Pvt. Ltd.</h3>
            <p className="domain">
              Media • Communication • Content • Narrative & Influence
            </p>

            <h4>Who This Company Serves</h4>
            <ul>
              <li>Brands & organisations</li>
              <li>Institutions & governments</li>
              <li>Public figures & leaders</li>
              <li>Creators & media professionals</li>
            </ul>

            <h4>Core Capabilities</h4>
            <ul>
              <li>Narrative & content strategy</li>
              <li>Media production (digital, audio, video)</li>
              <li>Public communication systems</li>
              <li>Branding, campaigns & reputation management</li>
            </ul>

            <h4>Typical Engagements</h4>
            <ul>
              <li>Communication strategy</li>
              <li>Media campaigns</li>
              <li>Public engagement initiatives</li>
              <li>Content production</li>
            </ul>

            <div className="button-group">
              <button>Explore Media & Communication Services</button>
              <button>Visit Company Website</button>
              <button className="secondary">Contact Media Team</button>
            </div>
          </div>

          {/* COMPANY 4 – Publishing */}
          <div className="company-card">
            <h3>Vasudheva Publishing Pvt. Ltd.</h3>
            <p className="domain">
              Publishing • Knowledge Production • IP Dissemination
            </p>

            <h4>Who This Company Serves</h4>
            <ul>
              <li>Authors & researchers</li>
              <li>Academicians & institutions</li>
              <li>Think tanks & knowledge organisations</li>
              <li>Serious content creators</li>
            </ul>

            <h4>Core Capabilities</h4>
            <ul>
              <li>Editorial & publishing systems</li>
              <li>Print, digital & audio publishing</li>
              <li>IP protection & rights management</li>
              <li>Knowledge dissemination & distribution</li>
            </ul>

            <h4>Typical Engagements</h4>
            <ul>
              <li>Book & research publishing</li>
              <li>Editorial & content development</li>
              <li>Knowledge platform creation</li>
              <li>IP monetisation</li>
            </ul>

            <div className="button-group">
              <button>Explore Publishing Services</button>
              <button>Visit Company Website</button>
              <button className="secondary">Contact Publishing Team</button>
            </div>
          </div>
        </section>

        {/* HOW TO CHOOSE THE RIGHT COMPANY */}
        <section>
          <h2>How to Choose the Right Company</h2>
          <ul className="quick-guide">
            <li>Strategy / Growth / Governance → Strategic Innovations</li>
            <li>Education / Learning / Skills → EduInnovation</li>
            <li>Media / Communication / Narrative → Media</li>
            <li>Publishing / Books / Research Output → Publishing</li>
            <li>Complex / Multi-domain → Vasudheva Holdings (Guided Diagnosis)</li>
          </ul>
        </section>

        {/* CROSS-COMPANY ENGAGEMENTS */}
        <section>
          <h2>Cross-Company Engagements</h2>
          <p>
            Some challenges require more than one subsidiary, phased or parallel execution.
          </p>
          <p>In such cases:</p>
          <ul>
            <li>Vasudheva Holdings designs the engagement architecture</li>
            <li>Subsidiaries execute in coordination</li>
            <li>Learning and governance feedback flows upward</li>
          </ul>
          <p className="benefit">
            This ensures no duplication, no contradiction, and clear accountability.
          </p>
        </section>

        {/* FINAL ACTION SECTION */}
        <section className="final-cta">
          <h2>Start the Right Conversation</h2>
          <div className="button-group">
            <button className="primary">Describe Your Problem</button>
            <button>Explore Services & Solutions</button>
            <button>Visit Individual Company Websites</button>
          </div>

          <p className="legal-note small">
            Each company within the Vasudheva Group is a separate legal entity. 
            Engagements, contracts, and delivery are undertaken by the relevant subsidiary.
          </p>
        </section>

      </div>
    </section>
  );
}