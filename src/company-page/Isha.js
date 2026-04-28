import { Link } from "react-router-dom";
import ishaPhoto from "../assets/hero/isha_photo.jpg";   
import "../stakeholderlayout.css";

export default function IshaBharati() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={ishaPhoto} alt="Isha Bharati" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Isha Bharati</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Associate – Operations & Information Technology (IT)<br />The Vasudheva Group
          </h2>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Isha Bharati is a Technology and Operations Associate with a strong foundation in Computer Science and Engineering and hands-on experience in web development, system implementation, and digital infrastructure management. As an Associate – Operations & IT at Vasudheva Group, she supports the development, management, and continuous improvement of the group's technology systems, digital platforms, and operational infrastructure.
        </p>
        <p className="resume-text">
          Working closely with the leadership, she contributes to building structured, reliable, and scalable systems, in alignment with Vasudheva's philosophy of creating institutional, system-driven solutions.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          In her role, Isha operates at the execution and system management layer, ensuring that the group’s digital and operational systems function efficiently across all entities.
        </p>
        <ul className="resume-list diamond-list">
          <li>Managing and maintaining the IT and digital infrastructure of the group</li>
          <li>Supporting the development and deployment of web platforms and digital systems</li>
          <li>Ensuring performance optimization, system reliability, and usability</li>
          <li>Assisting in the design and implementation of operational workflows and structured processes</li>
          <li>Collaborating with teams to enhance functionality, resolve technical issues, and improve user experience</li>
          <li>Supporting integration between frontend interfaces, backend systems, and databases</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Professional Summary</h5>
        <p className="resume-text">
          Isha Bharati is a Web Developer and Systems Associate with practical experience in building responsive, user-centric applications and managing technology-enabled processes. She combines technical capability with disciplined execution, enabling effective implementation of digital solutions.
        </p>
        <ul className="resume-list diamond-list">
          <li>Frontend Development (HTML, CSS, JavaScript, React.js)</li>
          <li>Backend Integration & Database Handling (Node.js, MongoDB, MySQL)</li>
          <li>System Optimization and Performance Enhancement</li>
          <li>Full-Stack Application Development</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Experience & Technical Exposure</h5>
        <ul className="resume-list diamond-list">
          <li>Web Developer – Vasudheva Holdings Pvt. Ltd. (Developed and maintained responsive web interfaces and supported system-level improvements)</li>
          <li>Web Development – Octanet Pvt. Ltd. (Built interactive UI components and contributed to backend logic and database handling)</li>
          <li>Industrial Exposure – Banaras Locomotive Works (Indian Railways) (Worked on technical systems supporting planning, execution, and process automation)</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Projects & Work</h5>
        <ul className="resume-list diamond-list">
          <li>Task Management Application – Dynamic system with real-time functionality</li>
          <li>Grammar Correction Tool (Full Stack) – NLP-based application with database integration</li>
          <li>Doctor Appointment System – End-to-end platform with secure authentication and data handling</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Technical Skills</h5>
        <ul className="resume-list diamond-list">
          <li>Languages: C++, Python, JavaScript, HTML, CSS</li>
          <li>Frameworks: React.js, Node.js, Bootstrap, Tailwind CSS</li>
          <li>Databases: MongoDB, MySQL</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Education</h5>
        <p className="resume-text">Bachelor of Technology (Computer Science & Engineering)</p>

        <h5 className="resume-section-header section-icon">◆ Contribution to Vasudheva Group</h5>
        <ul className="resume-list diamond-list">
          <li>Strengthening the digital and technological backbone</li>
          <li>Supporting the execution of technology-enabled operational systems</li>
          <li>Enhancing efficiency, usability, and system performance</li>
          <li>Assisting in building structured, scalable, and reliable processes</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Closing Statement</h5>
        <p className="resume-text">
          Isha Bharati supports the operational and technological execution of Vasudheva Group by managing digital systems and contributing to the development of scalable, efficient platforms. Her work enables seamless execution and strengthens the group’s technology-driven institutional framework.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}