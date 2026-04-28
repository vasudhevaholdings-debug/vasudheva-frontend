import { Link } from "react-router-dom";
import anupamPhoto from "../assets/hero/anupam-photo.jpeg";
import "../stakeholderlayout.css";

export default function AnupamKumari() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={anupamPhoto} alt="Anupam Kumari" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Anupam Kumari</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Associate – Operations & Information Technology (IT)<br />The Vasudheva Group
          </h2>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Anupam Kumari is a Front-End Developer and Digital Systems Associate with a strong foundation in web development, user interface design, and technology-enabled execution. As an Associate – Operations & IT at Vasudheva Group, she supports the development and implementation of the group's digital infrastructure, operational systems, and platform interfaces.
        </p>
        <p className="resume-text">
          She brings a combination of technical capability, design sensibility, and execution focus, contributing to Vasudheva’s mission of building structured, scalable, and system-driven institutions.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          In her role, Anupam contributes to the execution layer of technology and operations, working closely with leadership and the IT function to translate ideas into functional digital solutions.
        </p>
        <ul className="resume-list diamond-list">
          <li>Developing responsive, user-centric web interfaces and platforms</li>
          <li>Supporting the implementation of digital systems, dashboards, and operational tools</li>
          <li>Assisting in the design of process workflows and structured execution systems</li>
          <li>Ensuring performance, usability, and cross-platform compatibility of digital assets</li>
          <li>Collaborating with teams to integrate frontend interfaces with backend and AI systems</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
        <p className="resume-text">
          Anupam is a React.js-based Front-End Developer with hands-on experience in building fast, scalable, and responsive web applications. She specializes in converting ideas into clean, efficient, and user-friendly digital products, with a strong focus on performance and usability.
        </p>
        <ul className="resume-list diamond-list">
          <li>React.js, JavaScript, HTML, CSS</li>
          <li>Responsive Web Design & UI/UX Development</li>
          <li>Basic Backend Integration & Database Understanding (MySQL)</li>
          <li>Tools: GitHub, Firebase, REST APIs</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Experience & Exposure</h5>
        <ul className="resume-list diamond-list">
          <li>Front-End Developer Intern – CODEXINTERN (Worked on real-world web applications and interface development)</li>
          <li>Internshala Student Partner (ISP) (Demonstrated leadership, communication, and outreach capabilities)</li>
          <li>Infosys Springboard – Pragati Program Participant (Exposure to structured learning in technology and professional development)</li>
          <li>Marketing Intern – Bleep Education (Gained experience in digital communication and engagement)</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Projects & Work</h5>
        <ul className="resume-list diamond-list">
          <li>Developed responsive websites and web application interfaces</li>
          <li>Built frontend systems using React.js and modern UI frameworks</li>
          <li>Worked on real-world projects involving UI design and platform development</li>
        </ul>
        <p className="resume-text">Portfolio: <a href="https://www.anupamkumari.tech" target="_blank" rel="noopener noreferrer">www.anupamkumari.tech</a></p>

        <h5 className="resume-section-header section-icon">◆ Education</h5>
        <p className="resume-text">Bachelor of Computer Applications (BCA)</p>

        <h5 className="resume-section-header section-icon">◆ Contribution to Vasudheva Group</h5>
        <ul className="resume-list diamond-list">
          <li>Strengthening digital presence and platform usability</li>
          <li>Supporting execution of technology-enabled systems</li>
          <li>Enabling efficient and structured operational workflows</li>
          <li>Assisting in building scalable and user-friendly digital solutions</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Closing Statement</h5>
        <p className="resume-text">
          Anupam Kumari supports the operational and digital execution of Vasudheva Group by developing responsive, user-centric systems that enhance efficiency, usability, and scalability. As part of the Operations & IT function, she contributes to translating ideas into practical, technology-driven solutions.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}