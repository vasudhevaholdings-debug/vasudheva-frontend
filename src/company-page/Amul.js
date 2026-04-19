
// import { Link } from "react-router-dom";
// import "../stakeholderlayout.css"; 
// import amulPhoto from "../assets/hero/amul.jpeg";

// export default function Amul() {
//   return (
//     <div className="leadership-detail-page">
//       {/* Back link */}
//       <div style={{ marginBottom: "40px" }}>
//         <Link 
//           to="/leadership" 
//           style={{
//             color: "#3b82f6",
//             textDecoration: "none",
//             fontWeight: "500",
//             fontSize: "1.1rem",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px"
//           }}
//         >
//           ← Back to Leadership Team
//         </Link>
//       </div>

//       {/* Profile Header */}
//       <div className="profile-header" style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "32px",
//         flexWrap: "wrap",
//         marginBottom: "48px"
//       }}>
//         <img 
//           src={amulPhoto} 
//           alt="Amul Patel" 
//           style={{
//             width: "240px",
//             height: "240px",
//             borderRadius: "50%",
//             objectFit: "cover",
//             border: "4px solid #e5e7eb",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//           }}
//         />
//         <div>
//           <h1 style={{
//             margin: "0 0 8px",
//             fontSize: "2.8rem",
//             color: "#0a2540"
//           }}>
//             Mr. Amul Patel
//           </h1>
//           <h2 style={{
//             margin: 0,
//             fontSize: "1.5rem",
//             color: "#475569",
//             fontWeight: "500"
//           }}>
//             Founding Team Member & Head – Operations & IT<br />
//             The Vasudheva Group
//           </h2>
//         </div>
//       </div>

//       {/* Full Content – your original text preserved exactly */}
//       <div className="profile-content" style={{ maxWidth: "900px" }}>
//         <h5 className="resume-section-header section-icon">◆ Founder's Message</h5>
//         <p className="resume-text">
//           “Our goal is to build systems that empower people, institutions, and communities to function
//           harmoniously. Through responsible technology and integrated processes, we aim to enable
//           cooperation, reduce inefficiencies, and contribute to a more inclusive and sustainable
//           society".
//         </p>
//         <blockquote className="resume-quote">
//           As a founding member, I view operations as the backbone of institutional credibility. When
//           systems function reliably and processes are transparent, stakeholders gain confidence, and
//           organisations can scale sustainably
//         </blockquote>

//         <h5 className="resume-section-header section-icon">◆ About The Founder</h5>
//         <p className="resume-text">
//           Mr. Amul Patel is a Founding Team Member and Head of Operations & IT at The Vasudheva
//           Group, where he leads the development of integrated systems, digital infrastructure, and
//           operational frameworks that enable the group’s multi-sector initiatives to function efficiently
//           and scale sustainably.
//           A technology professional and systems thinker, he is committed to leveraging data, digital
//           tools, and process innovation to enhance cooperation, minimize systemic inefficiencies, and
//           support the Group’s mission of <strong>“Towards Joyful Coexistence — For Knowledge | For 
//             System | For Society.”</strong>
//         </p>

//         <h5 className="resume-section-header section-icon">◆ Vision & Philosophy </h5>
//         <p className="resume-text">
//           Mr. Patel believes that technology and systems should serve as instruments of societal 
//           progress — enabling institutions, organizations, and communities to function harmoniously 
//           while remaining sensitive to environmental and social ecosystems. 
//         </p>
//         <blockquote className="resume-quote">
//           “Integrated systems and responsible technology can reduce friction, enhance 
//           cooperation, and enable inclusive progress.” 
//         </blockquote>
//         <p className="resume-text">His work reflects a commitment to: </p>
//         <ul className="resume-list diamond-list">
//           <li> Systemic efficiency </li>
//           <li> Data-driven decision making </li>
//           <li> Institutional coherence </li>
//           <li> Sustainable and inclusive development </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Role in The Vasudheva Group </h5>
//         <p className="resume-text">
//           As Head of Operations & IT, Mr. Patel serves as the digital and operational backbone of 
//           the Group. 
//         </p>
//         <p className="resume-text"><strong>Key Responsibilities </strong></p>
//         <ul className="resume-list diamond-list">
//           <li> Designing integrated operational systems and workflows </li>
//           <li> Developing digital platforms and IT infrastructure </li>
//           <li> Ensuring coordination across subsidiaries </li>
//           <li> Supporting data management and decision systems </li>
//           <li> Strengthening digital presence and SEO operations </li>
//         </ul>
//         <p className="resume-text"><strong>Strategic Impact </strong></p>
//         <ul className="resume-list diamond-list">
//           <li> Enables scalable organizational growth </li>
//           <li> Enhances operational efficiency and coordination </li>
//           <li> Builds reliable digital ecosystems </li>
//           <li> Supports data-driven governance </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Contributions Across Group Entities </h5>
//         <p className="resume-text">
//           Mr. Patel plays a pivotal role in integrating systems across the Group’s core entities: 
//         </p>

//         <h5 className="resume-section-header section-icon">Vasudheva Strategic Innovations </h5>
//         <ul className="resume-list diamond-list">
//           <li> Data systems for research and consulting workflows </li>
//           <li> Digital tools for analytics and reporting </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Vasudheva EduInnovation </h5>
//         <ul className="resume-list diamond-list">
//           <li> Technology-enabled learning systems </li>
//           <li> Digital platforms for educational delivery </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Vasudheva Media </h5>
//         <ul className="resume-list diamond-list">
//           <li> Web infrastructure and digital content systems </li>
//           <li> Visual and digital communication support </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Vasudheva Publishing </h5>
//         <ul className="resume-list diamond-list">
//           <li> Digital publishing workflows </li>
//           <li> Content management systems </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Professional Experience </h5>
//         <p className="resume-text"><strong>Infosys, Bengaluru </strong></p>
//         <p className="resume-text"><strong>Data Systems Specialist (2023–2024) </strong></p>
//         <p className="resume-text">
//           At Infosys, Mr. Patel worked on enterprise data systems with specialization in data cloning 
//           and data structure management. His experience strengthened his expertise in data 
//           accuracy, system reliability, and large-scale information handling. 
//         </p>
//         <p className="resume-text"><strong>Key Areas: </strong></p>
//         <ul className="resume-list diamond-list">
//           <li> Enterprise data management </li>
//           <li> Database integrity & workflows </li>
//           <li> Business data systems </li>
//           <li> Analytical problem solving </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Educational Background </h5>
//         <p className="resume-text"><strong>Master of Computer Applications (MCA) </strong></p>
//         <p className="resume-text">
//           School of Management Sciences, Varanasi <br />
//           Specialization: Computer Systems Networking & Telecommunications <br />
//           Recognition: Best in Data Cloning & Design 
//         </p>
//         <p className="resume-text"><strong>Bachelor of Computer Applications (BCA) </strong></p>
//         <p className="resume-text">
//           School of Management Sciences, Varanasi <br />
//           Focus: Computer Programming & Applications 
//         </p>
//         <p className="resume-text"><strong>Senior Secondary Education </strong></p>
//         <p className="resume-text">
//           Sunbeam Academy, Samneghat <br />
//           Mathematics & Computer Science 
//         </p>

//         <h5 className="resume-section-header section-icon">◆ Core Competencies </h5>
//         <h5 className="resume-section-header section-icon">Technology & Systems </h5>
//         <ul className="resume-list diamond-list">
//           <li> Data Management & Analysis </li>
//           <li> Web Development </li>
//           <li> Computer Networking </li>
//           <li> IT Infrastructure Planning </li>
//           <li> Digital Systems Integration </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Operations & Process Design </h5>
//         <ul className="resume-list diamond-list">
//           <li> Workflow Optimization </li>
//           <li> Commercial Operations Support </li>
//           <li> SEO & Digital Operations </li>
//           <li> Cross-functional Coordination </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Creative & Digital Skills </h5>
//         <ul className="resume-list diamond-list">
//           <li> Graphic Designing </li>
//           <li> Adobe Photoshop </li>
//           <li> Visual Communication </li>
//           <li> UI/UX Support </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Strategic Capabilities </h5>
//         <ul className="resume-list diamond-list">
//           <li> Systems Thinking </li>
//           <li> Digital Transformation </li>
//           <li> Scalability Planning </li>
//           <li> Process Innovation </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Leadership & Work Ethos </h5>
//         <p className="resume-text">
//           Mr. Patel’s leadership approach is rooted in execution excellence and systems thinking. 
//         </p>

//         <h5 className="resume-section-header section-icon">Leadership Style </h5>
//         <ul className="resume-list diamond-list">
//           <li> Process-driven and detail-oriented </li>
//           <li> Collaborative and reliability-focused </li>
//           <li> Quiet execution with measurable impact </li>
//           <li> Infrastructure-first approach </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">Core Strengths </h5>
//         <ul className="resume-list diamond-list">
//           <li> Analytical precision </li>
//           <li> Operational reliability </li>
//           <li> Systems integration </li>
//           <li> Technology–strategy alignment </li>
//         </ul>

//         <h5 className="resume-section-header section-icon">◆ Personal Interests </h5>
//         <ul className="resume-list diamond-list">
//           <li> Photography </li>
//           <li> Travelling </li>
//           <li> Technology exploration </li>
//           <li> Visual design & digital creativity </li>
//         </ul>
//         <p className="resume-text">
//           These interests enhance his observational skills, creativity, and ability to design intuitive 
//           systems. 
//         </p>

//         <h5 className="resume-section-header section-icon">◆ Strategic Role in the Vasudheva Vision </h5>
//         <p className="resume-text">
//           Within the Group’s long-term vision, Mr. Patel contributes as: 
//         </p>
//         <ul className="resume-list diamond-list">
//           <li> Execution Architect → Converts ideas into operational systems </li>
//           <li> Digital Backbone → Builds and maintains technological infrastructure </li>
//           <li> Efficiency Enabler → Reduces friction through automation & integration </li>
//           <li> Systems Integrator → Ensures coherence across entities </li>
//         </ul>
//         <p className="resume-text">
//           His work strengthens the Group’s transition from conceptual vision to operational reality. 
//         </p>

//         <h5 className="resume-section-header section-icon">◆ Connect & Collaborate </h5>
//         <p className="resume-text">
//           Amul welcomes collaboration with educators, policymakers, entrepreneurs, researchers, 
//           and institutions committed to building a more equitable and sustainable future. 
//         </p>
//         <p className="resume-text">
//           Together, we can design systems that enable joyful coexistence.
//         </p>
//       </div>

//       {/* Footer buttons */}
//       <div className="detail-buttons" style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "24px",
//         marginTop: "64px",
//         flexWrap: "wrap"
//       }}>
//         <Link to="/parentcompanies" className="action-button secondary">
//           Explore Group Structure →
//         </Link>
//         <Link to="/Contact" className="action-button primary">
//           Route a Request →
//         </Link>
//       </div>
//     </div>
//   );
// }