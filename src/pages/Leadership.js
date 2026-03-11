import { useState } from 'react';
import { Link } from "react-router-dom";
import "../stakeholderlayout.css";
// import logo from "../assets/logos/parentLogo.png";
import shashankPhoto from "../assets/hero/shashank.jpeg";
// Assuming additional photo imports; replace with actual paths if available
import gauravPhoto from "../assets/hero/gaurav.jpeg";
import vivekPhoto from "../assets/hero/vivek.jpeg";
import amulPhoto from "../assets/hero/amul.jpeg";
import surajPhoto from "../assets/hero/suraj.jpeg";

export default function Leadership() {
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="leadership-page resume-style">
      {/* Header with Logo and Title */}
      <header className="resume-header">
        {/* <img src={logo} alt="Vasudheva Group Logo" className="resume-logo" /> */}
        <div className="header-text">
          {/* <h1 className="resume-title">Vasudheva Strategic Innovations Pvt Ltd</h1> */}
          <h2 className="resume-subtitle">Leadership & Founding Team</h2>
          <p className="resume-tagline">Stewards of Governance, Knowledge & Institutional Integrity</p>
        </div>
      </header>

     

      {/* Governance Framing */}
      {/* <section className="resume-section">
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
      </section> */}

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
             The idea of the Vasudheva Group emerged from a simple but profound observation: many
institutional failures are not due to lack of intent or resources, but due to fragmented
systems, weak governance, and the absence of integrated thinking. Across public
institutions, educational systems, enterprises, and communities, I witnessed a recurring
pattern — solutions were implemented in isolation, knowledge remained siloed, and
long-term sustainability was rarely embedded in design.
Vasudheva was conceptualised as a governance-led institutional ecosystem to address this
systemic gap. Our model integrates research, education, communication, and knowledge
stewardship under a unified framework so that institutions can design, implement, and
sustain solutions with clarity, accountability, and public trust.
As Founder, my role is not to centralise authority but to steward governance principles that
ensure ethical integrity, evidence-based decision-making, and long-term societal benefit. The
strength of this Group lies in its collective leadership — professionals who bring field
intelligence, engagement governance, operational discipline, and technical expertise into a
coherent institutional architecture.
We are committed to building systems that outlast individuals — systems that preserve
knowledge, strengthen institutions, and contribute to a more just, informed, and resilient
society
            </p>
            <button 
              className="read-more-btn" 
              onClick={() => toggleExpanded('shashank')}
            >
              {expanded['shashank'] ? 'Read Less' : 'Read More'}
            </button>
            {expanded['shashank'] && (
              <div className="expanded-content">
                <h5 className="resume-section-header section-icon">◆ About the Founder</h5>
                <p className="resume-text">
                  Shashank Singh is an entrepreneur, systems thinker, and institution builder dedicated to
                designing knowledge-driven enterprises that address complex socio-economic challenges.
                As the Principal Founder and Chief Architect of The Vasudheva Group, he leads a
                multidisciplinary ecosystem focused on research-led consulting, education innovation,
                media, and publishing.
                He is driven by the philosophy of “Thinking From The Scratch…”, emphasizing
                foundational thinking, ethical leadership, and sustainable development. His work integrates
                economics, governance, technology, and human development to create scalable and
                socially responsible institutional models.
                </p>

                <h5 className="resume-section-header section-icon">◆ Vision & Purpose</h5>
                <p className="resume-vision"><strong>Vision:</strong> To build institutions that harmonize knowledge, systems, and society—advancing sustainable prosperity and human dignity.</p>
                <ul className="resume-list diamond-list">
                  <li>Strengthen institutional capacity in emerging economies</li>
                  <li>Democratize access to knowledge and strategic thinking</li>
                  <li>Enable organizations to solve complex challenges sustainably</li>
                </ul>
                <h5 className="resume-section-header section-icon">◆ The Founding Philosophy</h5>
                <p className="resume-text">The Vasudheva Group is built on a systems-thinking doctrine that views knowledge as
                infrastructure and institutions as engines of societal progress.</p>
                <h5 className="resume-section-header section-icon">◆ Guiding Principles</h5>
                <ul className="resume-list diamond-list">
                  <li>Systems Thinking: Integrated solutions over fragmented approaches</li>
                  <li>Knowledge as Infrastructure: Research as the foundation of progress</li>
                  <li>Ethical Enterprise: Profit with purpose and responsibility</li>
                  <li>Local Roots, Global Relevance: Contextual solutions with universal value</li>
                </ul>
                <h5 className="resume-section-header section-icon">◆ Building the Vasudheva Group</h5>
                <p className="resume-text">Shashank Singh conceptualized The Vasudheva Group as an integrated ecosystem of
                specialized entities working in synergy:</p>
             <ul className="resume-list diamond-list">
                  <li>Strategic Research & Consulting — enabling informed decision-making</li>
                  <li>Education Innovation — transforming learning systems</li>
                  <li>Media & Knowledge Dissemination — amplifying ideas and insights</li>
                  <li>Publishing & Intellectual Property — preserving and sharing knowledge</li>
                </ul>
                <p className="resume-text">This architecture enables cross-sectoral collaboration and scalable impact</p>
                <h5 className="resume-section-header section-icon">◆ Leadership Approach</h5>
                <p className="resume-text">Shashank’s leadership style combines analytical rigor with human-centric values.</p>
                <h5 className="resume-section-header section-icon">◆ Leadership Traits</h5>
                 <ul className="resume-list diamond-list">
                  <li>Vision-driven and mission-focused</li>
                  <li>Research-led decision making</li>
                  <li>Ethical and socially conscious</li>
                  <li>Collaborative ecosystem builder</li>
                </ul>
                 <h5 className="resume-section-header section-icon">◆ Core Belief</h5>
                 <ul className="resume-list diamond-list">
                  <li>Institutions create enduring impact</li>
                  <li>Knowledge empowers societies</li>
                  <li>Sustainable development requires systems thinking</li>
                  
                </ul>
              
                <h5 className="resume-section-header section-icon">◆ Areas of Focus</h5>
                <ul className="resume-list diamond-list">
                  <li>Institutional design & governance</li>
                  <li>Socio-economic research & policy analysis</li>
                  <li>Education systems transformation</li>
                  <li>Knowledge dissemination & media strategy</li>
                  <li>Sustainable and inclusive development</li>
                </ul>
                  <h5 className="resume-section-header section-icon">◆ Commitment to Society</h5>
                <p className="resume-text">The Vasudheva Group reflects Shashank’s commitment to building enterprises that contribute to:</p>
                 <ul className="resume-list diamond-list">
                  <li>Inclusive economic development</li>
                  <li>Institutional strengthening in Tier-2 and Tier-3 regions</li>
                  <li>Ethical and responsible business practices</li>
                  <li>Knowledge accessibility and empowerment</li>
                  
                </ul>
                <h5 className="resume-section-header section-icon">◆ Personal Philosophy</h5>
                  <ul className="resume-list diamond-list">
                  <li>Build institutions,not just businesses</li>
                  <li>Knowledge must serve society</li>
                  <li>Sustainability begins with systems thinking</li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ The Road Ahead</h5>
                <ul className="resume-list diamond-list">
                  <li><strong>Short Term:</strong> Establish Vasudheva as a regional knowledge and consulting hub; Develop scalable frameworks for education and MSME transformation</li>
                  <li><strong>Medium Term:</strong> Expand integrated consulting services across India; Build digital platforms for knowledge dissemination</li>
                  <li><strong>Long Term:</strong> Create globally relevant institutional models from India; Position Vasudheva as a civilizational enterprise rooted in Indian values</li>
                </ul>
              </div>
            )}
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
            that are not only effective but also equitable and sustainable.</p>
            <button 
              className="read-more-btn" 
              onClick={() => toggleExpanded('gaurav')}
            >
              {expanded['gaurav'] ? 'Read Less' : 'Read More'}
            </button>
            {expanded['gaurav'] && (
              <div className="expanded-content">
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
                <p className="resume-text">As a founding member, Gaurav plays a strategic and operational role in shaping the group’s
                intellectual direction and institutional architecture.</p>
                <h5 className="resume-section-header section-icon">◆ Key Responsibilities</h5>
                <ul className="resume-list diamond-list">
                  <li>Co-designing integrated organizational systems and governance frameworks</li>
                  <li>Supporting research-driven decision-making models</li>
                  <li>Advancing initiatives in social equity and child welfare</li>
                  <li>Strengthening institutional partnerships and community engagement</li>
                  <li>Contributing to knowledge dissemination through research, media, and publishing platforms</li>
                </ul>
                 <h5 className="resume-section-header section-icon">◆ Institutional Vision Contribution</h5>
                 <p className="resume-text">Gaurav contributes to the development of the Vasudheva ecosystem through its core
                institutions:</p>
                <ul className="resume-list diamond-list">
                  <li><strong>Vasudheva Strategic Innovations :</strong>Enabling effective decision-making through research and consulting across individuals,
                organizations, and governments.</li>
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
                <p className="resume-text">Gaurav believes in harmonizing rational inquiry with ethical responsibility to foster
                cooperation, equity, and sustainable societal evolution.</p>
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
                <p className="resume-text">"To contribute meaningfully to the progress, cohesion, and evolution of society by building inclusive systems that harmonize knowledge, institutions, and the environment."</p>

                <h5 className="resume-section-header section-icon">◆ Connect & Collaborate</h5>
                <p className="resume-text">
                  Gaurav Dwivedi welcomes collaboration with educators, policymakers, entrepreneurs, researchers, and institutions committed to building a more equitable and sustainable future.
                </p>
                <p className="resume-text">
                  Together, we can design systems that enable joyful coexistence.
                </p>
              </div>
            )}
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
            {/* <blockquote className="resume-quote">
              “True progress is achieved when knowledge enlightens systems, ethics guide actions, and culture nurtures harmony. Our civilizational wisdom offers timeless principles for building a just, sustainable, and compassionate society.”
            </blockquote> */}
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
            <button 
              className="read-more-btn" 
              onClick={() => toggleExpanded('vivek')}
            >
              {expanded['vivek'] ? 'Read Less' : 'Read More'}
            </button>
            {expanded['vivek'] && (
              <div className="expanded-content">
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
                <p className="resume-text">Mr. Ojha represents the group’s vision in public forums, media engagements, academic 
                  platforms, and community dialogues. </p>
                <p className="resume-text"><strong>Key Contributions: </strong></p>
                <ul className="resume-list diamond-list">
                  <li> Communicating the philosophy of Joyful Coexistence </li>
                  <li> Building trust through value-based public narratives </li>
                  <li> Strengthening stakeholder engagement across sectors </li>
                  <li> Representing Vasudheva in cultural and intellectual discourse </li>
                </ul>

                <h5 className="resume-section-header section-icon">Head — Cultural & Spiritual Consulting </h5>
                <p className="resume-text">He leads initiatives that integrate Indian civilizational wisdom into institutional systems and 
                  social programs. </p>
                <p className="resume-text"><strong>Focus Areas: </strong></p>
                <ul className="resume-list diamond-list">
                  <li> Ethical governance frameworks </li>
                  <li> Cultural integration strategies </li>
                  <li> Value-based education models </li>
                  <li> Spiritual well-being and leadership </li>
                </ul>
                <h5 className="resume-section-header section-icon">◆ Vision & Philosophy </h5>
                <p className="resume-text"><strong>Core Belief</strong> </p>
                <p className="resume-text">“Sustainable systems emerge when knowledge, ethics, and culture evolve together.” </p>
                <p className="resume-text">Mr. Ojha advocates a development paradigm that balances material progress with spiritual 
                  and cultural depth. His approach emphasizes: </p>
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
                <p className="resume-text">Mr. Ojha’s work advances the group’s guiding pillars: </p>
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
            )}
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
              "“Our goal is to build systems that empower people, institutions, and communities to function
harmoniously. Through responsible technology and integrated processes, we aim to enable
cooperation, reduce inefficiencies, and contribute to a more inclusive and sustainable
society".
 <blockquote className="resume-quote">As a founding member, I view operations as the backbone of institutional credibility. When
systems function reliably and processes are transparent, stakeholders gain confidence, and
organisations can scale sustainably "</blockquote>
              </p>
            <button 
              className="read-more-btn" 
              onClick={() => toggleExpanded('amul')}
            >
              {expanded['amul'] ? 'Read Less' : 'Read More'}
            </button>
            {expanded['amul'] && (
              <div className="expanded-content">
                <h5 className="resume-section-header section-icon">◆ About The Founder</h5>
                <p className="resume-text">
                  Mr. Amul Patel is a Founding Team Member and Head of Operations & IT at The Vasudheva
                Group, where he leads the development of integrated systems, digital infrastructure, and
                operational frameworks that enable the group’s multi-sector initiatives to function efficiently
                and scale sustainably.
                A technology professional and systems thinker, he is committed to leveraging data, digital
                tools, and process innovation to enhance cooperation, minimize systemic inefficiencies, and
                support the Group’s mission of <strong>“Towards Joyful Coexistence — For Knowledge | For 
                  System | For Society.”</strong>
                </p>
  <h5 className="resume-section-header section-icon">◆ Vision & Philosophy </h5>
                <p className="resume-text">Mr. Patel believes that technology and systems should serve as instruments of societal 
                  progress — enabling institutions, organizations, and communities to function harmoniously 
                  while remaining sensitive to environmental and social ecosystems. </p>
                <blockquote className="resume-quote">
                  “Integrated systems and responsible technology can reduce friction, enhance 
                  cooperation, and enable inclusive progress.” 
                </blockquote>
                <p className="resume-text">His work reflects a commitment to: </p>
                <ul className="resume-list diamond-list">
                  <li> Systemic efficiency </li>
                  <li> Data-driven decision making </li>
                  <li> Institutional coherence </li>
                  <li> Sustainable and inclusive development </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Role in The Vasudheva Group </h5>
                <p className="resume-text">As Head of Operations & IT, Mr. Patel serves as the digital and operational backbone of 
                  the Group. </p>
                <p className="resume-text"><strong>Key Responsibilities </strong></p>
                <ul className="resume-list diamond-list">
                  <li> Designing integrated operational systems and workflows </li>
                  <li> Developing digital platforms and IT infrastructure </li>
                  <li> Ensuring coordination across subsidiaries </li>
                  <li> Supporting data management and decision systems </li>
                  <li> Strengthening digital presence and SEO operations </li>
                </ul>
                <p className="resume-text"><strong>Strategic Impact </strong></p>
                <ul className="resume-list diamond-list">
                  <li> Enables scalable organizational growth </li>
                  <li> Enhances operational efficiency and coordination </li>
                  <li> Builds reliable digital ecosystems </li>
                  <li> Supports data-driven governance </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Contributions Across Group Entities </h5>
                <p className="resume-text">Mr. Patel plays a pivotal role in integrating systems across the Group’s core entities: </p>
                <h5 className="resume-section-header section-icon">Vasudheva Strategic Innovations </h5>
                <ul className="resume-list diamond-list">
                  <li> Data systems for research and consulting workflows </li>
                  <li> Digital tools for analytics and reporting </li>
                </ul>
                <h5 className="resume-section-header section-icon">Vasudheva EduInnovation </h5>
                <ul className="resume-list diamond-list">
                  <li> Technology-enabled learning systems </li>
                  <li> Digital platforms for educational delivery </li>
                </ul>
                <h5 className="resume-section-header section-icon">Vasudheva Media </h5>
                <ul className="resume-list diamond-list">
                  <li> Web infrastructure and digital content systems </li>
                  <li> Visual and digital communication support </li>
                </ul>
                <h5 className="resume-section-header section-icon">Vasudheva Publishing </h5>
                <ul className="resume-list diamond-list">
                  <li> Digital publishing workflows </li>
                  <li> Content management systems </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Professional Experience </h5>
                <p className="resume-text"><strong>Infosys, Bengaluru </strong></p>
                <p className="resume-text"><strong>Data Systems Specialist (2023–2024) </strong></p>
                <p className="resume-text">At Infosys, Mr. Patel worked on enterprise data systems with specialization in data cloning 
                  and data structure management. His experience strengthened his expertise in data 
                  accuracy, system reliability, and large-scale information handling. </p>
                <p className="resume-text"><strong>Key Areas: </strong></p>
                <ul className="resume-list diamond-list">
                  <li> Enterprise data management </li>
                  <li> Database integrity & workflows </li>
                  <li> Business data systems </li>
                  <li> Analytical problem solving </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Educational Background </h5>
                <p className="resume-text"><strong>Master of Computer Applications (MCA) </strong></p>
                <p className="resume-text">School of Management Sciences, Varanasi <br />
                  Specialization: Computer Systems Networking & Telecommunications <br />
                  Recognition: Best in Data Cloning & Design </p>
                <p className="resume-text"><strong>Bachelor of Computer Applications (BCA) </strong></p>
                <p className="resume-text">School of Management Sciences, Varanasi <br />
                  Focus: Computer Programming & Applications </p>
                <p className="resume-text"><strong>Senior Secondary Education </strong></p>
                <p className="resume-text">Sunbeam Academy, Samneghat <br />
                  Mathematics & Computer Science </p>

                <h5 className="resume-section-header section-icon">◆ Core Competencies </h5>
                <h5 className="resume-section-header section-icon">Technology & Systems </h5>
                <ul className="resume-list diamond-list">
                  <li> Data Management & Analysis </li>
                  <li> Web Development </li>
                  <li> Computer Networking </li>
                  <li> IT Infrastructure Planning </li>
                  <li> Digital Systems Integration </li>
                </ul>
                <h5 className="resume-section-header section-icon">Operations & Process Design </h5>
                <ul className="resume-list diamond-list">
                  <li> Workflow Optimization </li>
                  <li> Commercial Operations Support </li>
                  <li> SEO & Digital Operations </li>
                  <li> Cross-functional Coordination </li>
                </ul>
                <h5 className="resume-section-header section-icon">Creative & Digital Skills </h5>
                <ul className="resume-list diamond-list">
                  <li> Graphic Designing </li>
                  <li> Adobe Photoshop </li>
                  <li> Visual Communication </li>
                  <li> UI/UX Support </li>
                </ul>
                <h5 className="resume-section-header section-icon">Strategic Capabilities </h5>
                <ul className="resume-list diamond-list">
                  <li> Systems Thinking </li>
                  <li> Digital Transformation </li>
                  <li> Scalability Planning </li>
                  <li> Process Innovation </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Leadership & Work Ethos </h5>
                <p className="resume-text">Mr. Patel’s leadership approach is rooted in execution excellence and systems thinking. </p>
                <h5 className="resume-section-header section-icon">Leadership Style </h5>
                <ul className="resume-list diamond-list">
                  <li> Process-driven and detail-oriented </li>
                  <li> Collaborative and reliability-focused </li>
                  <li> Quiet execution with measurable impact </li>
                  <li> Infrastructure-first approach </li>
                </ul>
                <h5 className="resume-section-header section-icon">Core Strengths </h5>
                <ul className="resume-list diamond-list">
                  <li> Analytical precision </li>
                  <li> Operational reliability </li>
                  <li> Systems integration </li>
                  <li> Technology–strategy alignment </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Personal Interests </h5>
                <ul className="resume-list diamond-list">
                  <li> Photography </li>
                  <li> Travelling </li>
                  <li> Technology exploration </li>
                  <li> Visual design & digital creativity </li>
                </ul>
                <p className="resume-text">These interests enhance his observational skills, creativity, and ability to design intuitive 
                  systems. </p>

                <h5 className="resume-section-header section-icon">◆ Strategic Role in the Vasudheva Vision </h5>
                <p className="resume-text">Within the Group’s long-term vision, Mr. Patel contributes as: </p>
                <ul className="resume-list diamond-list">
                  <li> Execution Architect → Converts ideas into operational systems </li>
                  <li> Digital Backbone → Builds and maintains technological infrastructure </li>
                  <li> Efficiency Enabler → Reduces friction through automation & integration </li>
                  <li> Systems Integrator → Ensures coherence across entities </li>
                </ul>
                <p className="resume-text">His work strengthens the Group’s transition from conceptual vision to operational reality. </p>

                <h5 className="resume-section-header section-icon">◆ Connect & Collaborate </h5>
                <p className="resume-text">
                  Vivek welcomes collaboration with educators, policymakers, entrepreneurs, researchers, 
                  and institutions committed to building a more equitable and sustainable future. 
                </p>
                <p className="resume-text">
                  Together, we can design systems that enable joyful coexistence. 
                </p>
              </div>
            )}
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
              Institutional transformation is not only a technical process; it is a human process that
            requires coordination, facilitation, and sustained stakeholder engagement. My role within the
            Vasudheva Group centres on supporting systems implementation and facilitating
            collaboration among diverse stakeholders.
            In complex engagements, progress often depends on effective communication, timely
            coordination, and the ability to align multiple perspectives. By supporting implementation
            teams, coordinating stakeholders, and ensuring that communication flows smoothly, I
            contribute to creating an environment where systems can function as intended.
            As a founding member, I believe that sustainable change emerges when people feel heard,
            processes are inclusive, and collaboration is prioritised. Vasudheva’s strength lies in its
            ability to integrate expertise with empathy — ensuring that institutional systems remain
            responsive to the people they serve.
            Through facilitation and systems support, we strive to make transformation processes
            participatory, transparent, and resilient.
              </p>
            <button 
              className="read-more-btn" 
              onClick={() => toggleExpanded('suraj')}
            >
              {expanded['suraj'] ? 'Read Less' : 'Read More'}
            </button>
            {expanded['suraj'] && (
              <div className="expanded-content">
                <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
                <p className="resume-text">
                  Suraj Mishra is an emerging strategic thinker and socially conscious professional associated
                with The Vasudheva Group, contributing to its mission of building knowledge-driven,
                ethical, and socially responsive institutions. Rooted in classical scholarship and guided by
                modern strategic frameworks, he represents a new generation of professionals committed to
                inclusive development and institutional transformation.
                With an academic foundation from Sampurnanand Sanskrit University, Suraj integrates
                Indic intellectual traditions with contemporary policy and systems thinking. His work reflects
                a deep commitment to equity, ethical governance, and sustainable societal progress.
                </p>

               <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group </h5>
                <p className="resume-text">Strategic Associate — Institutional Vision & Social Development </p>
                <p className="resume-text">In this role, Suraj supports the group’s long-term mission by contributing to: </p>
                <ul className="resume-list diamond-list">
                  <li> Institutional research and systems thinking </li>
                  <li> Strategic planning for socio-economic initiatives </li>
                  <li> Development of inclusive and equitable frameworks </li>
                  <li> Knowledge synthesis from classical and contemporary sources </li>
                  <li> Community-centric program design </li>
                </ul>
                <p className="resume-text">His contributions strengthen the group’s vision of “Thinking From The Scratch… Towards 
                  Joyful Coexistence.” </p>

                <h5 className="resume-section-header section-icon">◆ Professional Philosophy </h5>
                <p className="resume-text">Suraj’s work is guided by the belief that sustainable development requires: </p>
                <ul className="resume-list diamond-list">
                  <li> Ethical leadership </li>
                  <li> Inclusive social systems </li>
                  <li> Evidence-based policy thinking </li>
                  <li> Cultural and philosophical grounding </li>
                  <li> Human dignity at the center of institutional design </li>
                </ul>
                <p className="resume-text">He views institutions not merely as structures, but as living systems that shape human 
                  potential and societal harmony. </p>

                <h5 className="resume-section-header section-icon">◆ Core Strengths </h5>
                <h5 className="resume-section-header section-icon">Strategic & Institutional Thinking </h5>
                <ul className="resume-list diamond-list">
                  <li> Systems analysis and institutional design </li>
                  <li> Policy orientation and socio-economic awareness </li>
                  <li> Long-term planning and vision development </li>
                </ul>
                <h5 className="resume-section-header section-icon">Intellectual & Analytical Orientation </h5>
                <ul className="resume-list diamond-list">
                  <li> Philosophical reasoning </li>
                  <li> Critical and interdisciplinary thinking </li>
                  <li> Cultural and historical contextualization </li>
                </ul>
                <h5 className="resume-section-header section-icon">Social & Ethical Commitment </h5>
                <ul className="resume-list diamond-list">
                  <li> Inclusive development mindset </li>
                  <li> Equity and social justice orientation </li>
                  <li> Community-centric approach </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Areas of Interest </h5>
                <ul className="resume-list diamond-list">
                  <li> Institutional development and governance </li>
                  <li> Social equity and inclusive growth </li>
                  <li> Policy and socio-economic systems </li>
                  <li> Cultural knowledge systems and modern applications </li>
                  <li> Ethical leadership and public reasoning </li>
                </ul>

                <h5 className="resume-section-header section-icon">◆ Professional Narrative </h5>
                <p className="resume-text">Suraj Mishra’s journey reflects the evolution of a thoughtful professional shaped by classical 
                  education and inspired by contemporary institutional challenges. His association with The 
                  Vasudheva Group places him at the intersection of knowledge, systems, and society — 
                  where he contributes to designing frameworks that promote inclusive growth and ethical 
                  governance. </p>
                <p className="resume-text">He embodies a quiet yet powerful leadership ethos: to build systems that serve humanity 
                  with dignity, balance, and foresight. </p>

                <h5 className="resume-section-header section-icon">◆ Personal Ethos </h5>
                <p className="resume-text">“Institutions must evolve as instruments of human dignity, equity, and collective progress.” </p>

                <h5 className="resume-section-header section-icon">◆ Connect & Collaborate </h5>
                <p className="resume-text">
                  Suraj welcomes collaboration with educators, policymakers, entrepreneurs, researchers, and 
                  institutions committed to building a more equitable and sustainable future. 
                </p>
                <p className="resume-text">
                  Together, we can design systems that enable joyful coexistence. 
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

     

      {/* Governance Principles */}
      {/* <section className="resume-section">
        <div className="section-content">
          
          <ul className="resume-list diamond-list">
            <li>Institutional integrity over individual prominence</li>
            <li>Public interest over short-term gain</li>
            <li>Evidence-based decision making</li>
            <li>Transparency & accountability</li>
            <li>Long-term knowledge stewardship</li>
          </ul>
        </div>
      </section> */}

      

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

   

      {/* CTA */}
      {/* CTA */}
<div className="cta-wrapper resume-cta">
  <Link to="/parentcompanies" className="learn-more resume-link">
    Explore Group Structure →
  </Link>
  <Link to="/Contact" className="learn-more resume-link">
    Route a Request →
  </Link>
</div>
    </div>
  );
}