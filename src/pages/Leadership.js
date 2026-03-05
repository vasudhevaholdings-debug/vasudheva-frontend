import "../stakeholderlayout.css";
// import logo from "../assets/logos/parentLogo.png";
import shashankPhoto from "../assets/hero/shashank.jpeg";
// Assuming additional photo imports; replace with actual paths if available
import gauravPhoto from "../assets/hero/gaurav.jpeg";
import vivekPhoto from "../assets/hero/vivek.jpeg";
import amulPhoto from "../assets/hero/amul.jpeg";
import surajPhoto from "../assets/hero/suraj.jpeg";

export default function Leadership() {
  return (
    <div className="leadership-page resume-style">
      {/* Header with Logo and Title */}
      <header className="resume-header">
        {/* <img src={logo} alt="Vasudheva Group Logo" className="resume-logo" /> */}
        <div className="header-text">
          <h1 className="resume-title">Vasudheva Strategic Innovations Pvt Ltd</h1>
          <h2 className="resume-subtitle">Leadership & Founding Team</h2>
          <p className="resume-tagline">Stewards of Governance, Knowledge & Institutional Integrity</p>
        </div>
      </header>

      {/* Purpose Section */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Purpose of This Page</h3>
          <p className="resume-text">
            To present the founding leadership of the Vasudheva Group as institutional stewards 
            responsible for governance, ethical integrity, knowledge continuity, and systemic integration 
            across the Group's subsidiaries. This page emphasises roles, responsibilities, and institutional 
            contributions rather than personality, ensuring alignment with the Group's governance-led positioning.
          </p>
        </div>
      </section>

      {/* Governance Framing */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Governance Framing</h3>
          <p className="resume-text">
            The Vasudheva Group is guided by a founding team committed to building institutions that 
            serve society through ethical governance, knowledge systems, and integrated solutions.
          </p>
          <p className="resume-text">The leadership functions as custodians of:</p>
          <ul className="resume-list diamond-list">
            <li>Governance frameworks</li>
            <li>Institutional doctrine</li>
            <li>Intellectual stewardship</li>
            <li>Cross-subsidiary integration</li>
            <li>Public-interest alignment</li>
          </ul>

          <h4 className="resume-subheading diamond-heading">Leadership Structure</h4>
          <p className="resume-text">The Group follows a governance-led leadership model:</p>
          <table className="resume-table leadership-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Holdings Leadership</td>
                <td>Governance, doctrine, integration</td>
              </tr>
              <tr>
                <td>Subsidiary Leadership</td>
                <td>Domain execution & delivery</td>
              </tr>
              <tr>
                <td>Advisory & Expert Network</td>
                <td>Specialist knowledge & review</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Founding Leadership Profiles - Resume-Style Cards */}
      <section className="resume-section founding-leadership">
        <h3 className="resume-heading diamond-heading">◆ Founding Leadership</h3>
        
        {/* Shashank Singh Profile */}
        <div className="resume-card founder-card">
          <img src={shashankPhoto} alt="Shashank Singh" className="resume-photo founder-photo" />
          <div className="resume-card-content founder-info">
            <h4 className="resume-name">Shashank Singh</h4>
            <p className="resume-title">
              Principal Founder, Chief Architect & Lead Strategist<br />
              The Vasudheva Group
            </p>
            <p className="resume-role">
              <strong>Group Role:</strong> Chief Architect of Governance & Institutional Design
            </p>
            <p className="resume-credentials">
              IIM Alumni | Economics & Public Policy | Business Strategist | Independent Researcher | Entrepreneur
            </p>
            
            <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
            <blockquote className="resume-quote">
              “Institutions shape societies. Systems shape institutions. Ideas shape systems.”<br />
              — Shashank Singh
            </blockquote>
            <p className="resume-text">
              The idea of the Vasudheva Group emerged from a profound observation: many institutional 
              failures are not due to lack of intent or resources, but due to fragmented systems, weak governance, 
              and the absence of integrated thinking. Vasudheva was conceptualised as a governance-led institutional 
              ecosystem to address this systemic gap, integrating research, education, communication, and knowledge 
              stewardship under a unified framework.
            </p>

            <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
            <p className="resume-text">
              Entrepreneur, systems thinker, and institution builder dedicated to designing knowledge-driven 
              enterprises that address complex socio-economic challenges. Leads a multidisciplinary ecosystem 
              focused on research-led consulting, education innovation, media, and publishing. Philosophy: 
              “Thinking From The Scratch…”, emphasizing foundational thinking, ethical leadership, and sustainable development.
            </p>

            <h5 className="resume-section-header section-icon">◆ Vision & Purpose</h5>
            <p className="resume-vision"><strong>Vision:</strong> To build institutions that harmonize knowledge, systems, and society—advancing sustainable prosperity and human dignity.</p>
            <ul className="resume-list diamond-list">
              <li>Strengthen institutional capacity in emerging economies</li>
              <li>Democratize access to knowledge and strategic thinking</li>
              <li>Enable organizations to solve complex challenges sustainably</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Guiding Principles</h5>
            <ul className="resume-list diamond-list">
              <li>Systems Thinking: Integrated solutions over fragmented approaches</li>
              <li>Knowledge as Infrastructure: Research as the foundation of progress</li>
              <li>Ethical Enterprise: Profit with purpose and responsibility</li>
              <li>Local Roots, Global Relevance: Contextual solutions with universal value</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Areas of Focus</h5>
            <ul className="resume-list diamond-list">
              <li>Institutional design & governance</li>
              <li>Socio-economic research & policy analysis</li>
              <li>Education systems transformation</li>
              <li>Knowledge dissemination & media strategy</li>
              <li>Sustainable and inclusive development</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ The Road Ahead</h5>
            <ul className="resume-list diamond-list">
              <li><strong>Short Term:</strong> Establish Vasudheva as a regional knowledge and consulting hub; Develop scalable frameworks for education and MSME transformation</li>
              <li><strong>Medium Term:</strong> Expand integrated consulting services across India; Build digital platforms for knowledge dissemination</li>
              <li><strong>Long Term:</strong> Create globally relevant institutional models from India; Position Vasudheva as a civilizational enterprise rooted in Indian values</li>
            </ul>
          </div>
        </div>

        {/* Gaurav Dwivedi Profile */}
        <div className="resume-card founder-card">
          <img src={gauravPhoto} alt="Gaurav Dwivedi" className="resume-photo founder-photo" />
          <div className="resume-card-content founder-info">
            <h4 className="resume-name">Gaurav Dwivedi</h4>
            <p className="resume-title">Co-Founder, The Vasudheva Group</p>
            <p className="resume-credentials">
              Tech Graduate | Entrepreneur & Independent Researcher | Social Equity & Institutional Development Advocate
            </p>
            
            <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
            <p className="resume-text">
              Institutions often design policies and systems from the top, but their success is determined on the ground. 
              My work with the Vasudheva Group focuses on ensuring that our institutional designs are rooted in empirical 
              realities, stakeholder perspectives, and field-level evidence. We have built rigorous field research protocols 
              and ground intelligence systems to ensure recommendations are practical, context-sensitive solutions.
            </p>

            <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
            <p className="resume-text">
              Co-founder of a knowledge-driven institutional ecosystem dedicated to building inclusive systems for societal 
              progress, cooperation, and sustainable coexistence. Interdisciplinary orientation spanning technology, social 
              sciences, and institutional studies. Focus: social equity, child welfare, institutional development, and knowledge democratization.
            </p>

            <h5 className="resume-section-header section-icon">◆ Key Responsibilities</h5>
            <ul className="resume-list diamond-list">
              <li>Co-designing integrated organizational systems and governance frameworks</li>
              <li>Supporting research-driven decision-making models</li>
              <li>Advancing initiatives in social equity and child welfare</li>
              <li>Strengthening institutional partnerships and community engagement</li>
              <li>Contributing to knowledge dissemination through research, media, and publishing platforms</li>
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

            <h5 className="resume-section-header section-icon">◆ Values & Leadership Style</h5>
            <p className="resume-text">Liberal • Secular • Democratic • Inclusive • Scientific • Spiritual. Collaborative & inclusive; Research-informed decision making; Value-driven and ethical; Systems-oriented.</p>
          </div>
        </div>

        {/* Vivek Kumar Ojha Profile */}
        <div className="resume-card founder-card">
          <img src={vivekPhoto} alt="Vivek Kumar Ojha" className="resume-photo founder-photo" />
          <div className="resume-card-content founder-info">
            <h4 className="resume-name">Mr. Vivek Kumar Ojha</h4>
            <p className="resume-title">
              Founding Team Member & National Spokesperson<br />
              Head — Cultural & Spiritual Consulting, The Vasudheva Group
            </p>
            
            <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
            <blockquote className="resume-quote">
              “True progress is achieved when knowledge enlightens systems, ethics guide actions, and culture nurtures harmony. Our civilizational wisdom offers timeless principles for building a just, sustainable, and compassionate society.”
            </blockquote>
            <p className="resume-text">
              Institutional engagements succeed when expectations are clear, responsibilities are defined, and communication is transparent. My role ensures every engagement is governed with clarity, accountability, and mutual trust through structured frameworks.
            </p>

            <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
            <p className="resume-text">
              Scholar of Indian knowledge systems and public communicator. Central role in articulating the group’s philosophical foundations and translating civilizational wisdom into contemporary institutional frameworks. Integrates ethics, culture, spirituality, and social responsibility into governance, education, and community initiatives.
            </p>

            <h5 className="resume-section-header section-icon">◆ Key Contributions</h5>
            <ul className="resume-list diamond-list">
              <li>National Spokesperson: Communicating philosophy of Joyful Coexistence; Building trust through value-based narratives</li>
              <li>Head — Cultural & Spiritual Consulting: Ethical governance frameworks; Cultural integration strategies; Value-based education models; Spiritual well-being and leadership</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Areas of Expertise</h5>
            <ul className="resume-list diamond-list">
              <li><strong>Cultural & Civilizational Studies:</strong> Indian knowledge systems; Sanskritic traditions; Civilizational ethics</li>
              <li><strong>Ethical & Spiritual Advisory:</strong> Value-based leadership; Institutional ethics; Spiritual psychology</li>
              <li><strong>Public Communication:</strong> Translating concepts; Cultural diplomacy; Public speaking</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Guiding Values</h5>
            <p className="resume-text">Liberal | Secular | Socialist | Spiritual | Scholarly | Philanthropic. Leadership Style: Moral authority rooted in values; Influence through dialogue; Inclusive approach.</p>
          </div>
        </div>

        {/* Amul Patel Profile */}
        <div className="resume-card founder-card">
          <img src={amulPhoto} alt="Amul Patel" className="resume-photo founder-photo" />
          <div className="resume-card-content founder-info">
            <h4 className="resume-name">Mr. Amul Patel</h4>
            <p className="resume-title">
              Founding Team Member & Head – Operations & IT<br />
              The Vasudheva Group
            </p>
            <p className="resume-credentials">Entrepreneur, Digital Infrastructure Architect & Data Enthusiast</p>
            
            <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
            <p className="resume-text">
              The success of any institutional initiative depends on disciplined execution and operational coherence. 
              My role focuses on aligning systems, processes, and workflows with governance standards to translate 
              strategic frameworks into actionable outcomes.
            </p>

            <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
            <p className="resume-text">
              Technology professional and systems thinker committed to leveraging data, digital tools, and process 
              innovation for cooperation and efficiency. MCA from School of Management Sciences, Varanasi; Experience 
              at Infosys in enterprise data systems.
            </p>

            <h5 className="resume-section-header section-icon">◆ Key Responsibilities</h5>
            <ul className="resume-list diamond-list">
              <li>Designing integrated operational systems and workflows</li>
              <li>Developing digital platforms and IT infrastructure</li>
              <li>Ensuring coordination across subsidiaries</li>
              <li>Supporting data management and decision systems</li>
              <li>Strengthening digital presence and SEO operations</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Core Competencies</h5>
            <ul className="resume-list diamond-list">
              <li><strong>Technology & Systems:</strong> Data Management & Analysis; Web Development; Computer Networking</li>
              <li><strong>Operations & Process:</strong> Workflow Optimization; SEO & Digital Operations; Cross-functional Coordination</li>
              <li><strong>Creative & Digital:</strong> Graphic Designing; Adobe Photoshop; UI/UX Support</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Leadership Style</h5>
            <p className="resume-text">Process-driven and detail-oriented; Collaborative and reliability-focused; Infrastructure-first approach.</p>
          </div>
        </div>

        {/* Suraj Mishra Profile */}
        <div className="resume-card founder-card">
          <img src={surajPhoto} alt="Suraj Mishra" className="resume-photo founder-photo" />
          <div className="resume-card-content founder-info">
            <h4 className="resume-name">Suraj Mishra</h4>
            <p className="resume-title">
              Founding Team Member, Strategic Associate and Head—People & Culture<br />
              Institutional Vision & Social Development, The Vasudheva Group
            </p>
            
            <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
            <p className="resume-text">
              Institutional transformation is a human process requiring coordination, facilitation, and sustained 
              stakeholder engagement. My role centers on supporting systems implementation and facilitating 
              collaboration to make transformation participatory and resilient.
            </p>

            <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
            <p className="resume-text">
              Emerging strategic thinker and socially conscious professional. Academic foundation from Sampurnanand 
              Sanskrit University, integrating Indic intellectual traditions with contemporary policy and systems thinking. 
              Committed to equity, ethical governance, and sustainable societal progress.
            </p>

            <h5 className="resume-section-header section-icon">◆ Key Responsibilities</h5>
            <ul className="resume-list diamond-list">
              <li>Institutional research and systems thinking</li>
              <li>Strategic planning for socio-economic initiatives</li>
              <li>Development of inclusive and equitable frameworks</li>
              <li>Knowledge synthesis from classical and contemporary sources</li>
              <li>Community-centric program design</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Core Strengths</h5>
            <ul className="resume-list diamond-list">
              <li><strong>Strategic & Institutional:</strong> Systems analysis; Policy orientation; Long-term planning</li>
              <li><strong>Intellectual:</strong> Philosophical reasoning; Critical thinking; Cultural contextualization</li>
              <li><strong>Social & Ethical:</strong> Inclusive mindset; Equity orientation; Community-centric approach</li>
            </ul>

            <h5 className="resume-section-header section-icon">◆ Personal Ethos</h5>
            <p className="resume-text">“Institutions must evolve as instruments of human dignity, equity, and collective progress.”</p>
          </div>
        </div>
      </section>

      {/* Extended Network */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Extended Leadership & Expert Network</h3>
          <p className="resume-text">
            The founding team is supported by a multidisciplinary expert network spanning: digital transformation, 
            biotechnology & health systems, architecture & real estate, education systems, policy & governance. 
            Detailed expert profiles are available in proposals and engagement documents.
          </p>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Governance Stewardship Principles</h3>
          <ul className="resume-list diamond-list">
            <li>Institutional integrity over individual prominence</li>
            <li>Public interest over short-term gain</li>
            <li>Evidence-based decision making</li>
            <li>Transparency & accountability</li>
            <li>Long-term knowledge stewardship</li>
          </ul>
        </div>
      </section>

      {/* Why Leadership Matters */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Why Leadership Matters in Institutional Work</h3>
          <p className="resume-text">
            Strong leadership ensures: continuity of governance standards, ethical decision-making, accountability 
            to stakeholders, preservation of institutional knowledge. Without governance-led leadership, organisations 
            risk fragmentation and loss of credibility.
          </p>
        </div>
      </section>

      {/* Federal Structure Table */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ Leadership & the Federal Structure</h3>
          <p className="resume-text">The founding leadership serves as the governance nucleus while empowering subsidiaries to operate with domain autonomy.</p>
          <table className="resume-table leadership-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Holdings Leadership</th>
                <th>Subsidiaries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Governance</td>
                <td>✔</td>
                <td></td>
              </tr>
              <tr>
                <td>Ethics & Integrity</td>
                <td>✔</td>
                <td></td>
              </tr>
              <tr>
                <td>Strategy</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Execution</td>
                <td></td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Knowledge Preservation</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When Leadership Intervenes */}
      <section className="resume-section">
        <div className="section-content">
          <h3 className="resume-heading diamond-heading">◆ When Leadership Intervenes</h3>
          <ul className="resume-list diamond-list">
            <li>Multi-subsidiary engagements</li>
            <li>Ethical risk scenarios</li>
            <li>Conflict resolution</li>
            <li>Governance reviews</li>
            <li>Institutional transformation projects</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-wrapper resume-cta">
        <a href="/group/structure" className="learn-more resume-link">
          Explore Group Structure →
        </a>
        <a href="../components/ContactForm.js/" className="learn-more resume-link">
          Route a Request →
        </a>

      </div>
    </div>
  );
}