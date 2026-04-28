import { Link } from "react-router-dom";
import asmitaPhoto from "../assets/hero/asmita.jpeg";
import "../stakeholderlayout.css";

export default function AshmitaSingh() {
  return (
    <div className="leadership-detail-page">
      
      {/* Back Button */}
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" className="back-link">
          ← Back to Leadership Team
        </Link>
      </div>

      {/* Header */}
      <div className="profile-header">
        <img src={asmitaPhoto} alt="Mrs. Ashmita Singh" className="profile-image" />

        <div>
          <h1 className="profile-name">Mrs. Ashmita Singh</h1>
          <h2 className="profile-title">
            Head – European Strategy & Market Development
          </h2>
          <p className="profile-subtitle">
            Sociologist, Research Scholar & Global Strategy Leader
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="profile-content">

        {/* Professional Overview */}
        <h5 className="resume-section-header">◆ Professional Overview</h5>
        <p className="resume-text">
          Mrs. Ashmita Singh is a Sociologist, Research Scholar, and Global Strategy Leader, and a member of the founding team of the Vasudheva Group. She leads the Group’s European Strategy & Market Development, anchoring its expansion across European markets through a research-driven, institutionally grounded, and culturally sensitive approach.
        </p>
        <p className="resume-text">
          Her work reflects the core philosophy of the Group—“For Knowledge • For System • For Society”—by integrating deep sociological insight with strategic and institutional design, ensuring that Vasudheva’s global engagements are not only economically viable but also socially aligned and systemically sustainable.
        </p>

        {/* Academic */}
        <h5 className="resume-section-header">◆ Academic Foundation & Research Orientation</h5>
        <p className="resume-text">
          Mrs. Singh holds her Graduation and Post-Graduation in Sociology from Banaras Hindu University, a premier institution known for its academic rigor and intellectual heritage.
        </p>

        <ul className="resume-list diamond-list">
          <li>Classical and contemporary sociological theory</li>
          <li>Institutional and cultural analysis</li>
          <li>Qualitative and interpretative research methodologies</li>
          <li>Socio-economic systems and human behavior</li>
        </ul>

        <p className="resume-text">
          She is currently pursuing her Ph.D. in Sociology, with specialization on:
          <br />
          <strong>The Institution of Marriage: Structure, Evolution, and Socio-Economic Transformation</strong>
        </p>

        <p className="resume-text">
          Her research contributes to understanding family systems, gender relations, cultural evolution, and institutional change across societies.
        </p>

        {/* Global Exposure */}
        <h5 className="resume-section-header">◆ Global Exposure & Entrepreneurial Engagement</h5>
        <p className="resume-text">
          Currently based in Spain, Mrs. Singh operates at the intersection of academic research and enterprise development, gaining exposure to European socio-economic systems.
        </p>

        <p className="resume-text">
          She is actively engaged in building:
          <br />
          <strong>Akshar Innovation (Spain)</strong> (Co-founded with Dr. Rahul Singh)
        </p>

        <ul className="resume-list diamond-list">
          <li>European regulatory and institutional frameworks</li>
          <li>Cross-cultural communication and stakeholder engagement</li>
          <li>Startup development and operational systems</li>
          <li>Knowledge-driven innovation and implementation</li>
        </ul>

        <p className="resume-text">
          This experience strengthens her ability to translate theory into practice and strategy into execution within international contexts.
        </p>

        {/* Role */}
        <h5 className="resume-section-header">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          As Head – European Strategy & Market Development, she leads strategic expansion in Europe with a focus on institutional partnerships and market operations.
        </p>

        {/* Responsibilities */}
        <h5 className="resume-section-header">◆ Key Responsibilities</h5>

        <p className="resume-subheading">1. Market Development & Expansion Strategy</p>
        <ul className="resume-list diamond-list">
          <li>Identifying high-potential sectors across Europe</li>
          <li>Designing region-specific entry strategies</li>
          <li>Developing scalable business models</li>
        </ul>

        <p className="resume-subheading">2. Institutional & Cultural Intelligence</p>
        <ul className="resume-list diamond-list">
          <li>Sociological insights into European institutions</li>
          <li>Culturally informed decision-making</li>
          <li>Supporting cross-border engagements</li>
        </ul>

        <p className="resume-subheading">3. Strategic Partnerships & Ecosystem Building</p>
        <ul className="resume-list diamond-list">
          <li>Building relationships with universities & institutions</li>
          <li>Facilitating collaborations</li>
          <li>Expanding international network</li>
        </ul>

        <p className="resume-subheading">4. Research Integration & Knowledge Systems</p>
        <ul className="resume-list diamond-list">
          <li>Contributing to multidisciplinary research</li>
          <li>Integrating European insights</li>
          <li>Strengthening comparative research</li>
        </ul>

        <p className="resume-subheading">5. Brand Positioning & Global Presence</p>
        <ul className="resume-list diamond-list">
          <li>Establishing global institutional identity</li>
          <li>Enhancing international visibility</li>
        </ul>

        {/* Core Competencies */}
        <h5 className="resume-section-header">◆ Core Competencies</h5>
        <ul className="resume-list diamond-list">
          <li>Sociological Research & Institutional Analysis</li>
          <li>Cross-Cultural Strategy & Market Development</li>
          <li>Social Systems & Behavioral Understanding</li>
          <li>Academic Research & Knowledge Integration</li>
          <li>Stakeholder Engagement & Communication</li>
        </ul>

        {/* Strategic Relevance */}
        <h5 className="resume-section-header">◆ Strategic Relevance to the Group</h5>
        <p className="resume-text">
          Her leadership ensures that Vasudheva’s European expansion remains culturally aligned, research-driven, and operationally feasible—bridging knowledge systems with real-world execution.
        </p>

        {/* Philosophy */}
        <h5 className="resume-section-header">◆ Personal Philosophy</h5>
        <p className="resume-text">
          “Enduring systems are built through an understanding of people, relationships, and institutions—not just markets and metrics.”
        </p>

        {/* Positioning */}
        <h5 className="resume-section-header">◆ Positioning Statement</h5>
        <p className="resume-text">
          Mrs. Ashmita Singh is a sociologist and global strategy leader who drives European expansion through research-led insights, institutional intelligence, and culturally grounded system design.
        </p>

      </div>

      {/* Buttons */}
      <div className="detail-buttons">
        <Link to="/parentcompanies" className="action-button secondary">
          Explore Group Structure →
        </Link>
        <Link to="/contact" className="action-button primary">
          Route a Request →
        </Link>
      </div>

    </div>
  );
}