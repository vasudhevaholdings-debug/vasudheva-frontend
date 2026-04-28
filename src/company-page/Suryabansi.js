import { Link } from "react-router-dom";
import doctorPhoto from "../assets/hero/doctor.jpeg";   
import "../stakeholderlayout.css";

export default function SuryaBansiSingh() {
  return (
    <div className="leadership-detail-page">
      <div style={{ marginBottom: "40px" }}>
        <Link to="/leadership" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "500", fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px" }}>
          ← Back to Leadership Team
        </Link>
      </div>

      <div className="profile-header" style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", marginBottom: "48px" }}>
        <img src={doctorPhoto} alt="Dr. Surya Bansi Singh" style={{ width: "240px", height: "240px", borderRadius: "50%", objectFit: "cover", border: "4px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: "2.8rem", color: "#0a2540" }}>Dr. Surya Bansi Singh</h1>
          <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#475569", fontWeight: "500" }}>
            Scientific Advisor – Vasudheva Holdings Pvt. Ltd.<br />
            Head – Research & Development (Biotech, Agro-Tech & Translational Systems)
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>Alumni: National Centre For Cell Science & National Dairy Research Institute</p>
        </div>
      </div>

      <div className="profile-content" style={{ maxWidth: "900px" }}>

        <h5 className="resume-section-header section-icon">◆ Profile Overview</h5>
        <p className="resume-text">
          Dr. Surya Bansi Singh is a biotechnology researcher, scientific systems thinker, and translational innovation specialist serving as the Scientific Advisor to the Vasudheva Group and Head of Research & Development within its innovation arm.
        </p>
        <p className="resume-text">
          With deep expertise in molecular biology, cell biology, mechanobiology, and gene editing technologies, he brings a rigorous scientific foundation to the Group's mission of designing evidence-based, scalable, and sustainable systems for institutions, organizations, and society.
        </p>
        <p className="resume-text">
          At Vasudheva, his role is not limited to research leadership—he serves as the central scientific anchor, ensuring that all strategic, operational, and consulting interventions are grounded in scientific reasoning, validated frameworks, and long-term systemic thinking.
        </p>

        <h5 className="resume-section-header section-icon">◆ Role at Vasudheva Group</h5>
        <p className="resume-text">
          As Scientific Advisor, Dr. Singh plays a strategic, institutional, and integrative role across the Group:
        </p>

        <h5 className="resume-section-header section-icon">A. Scientific Vision & Governance</h5>
        <ul className="resume-list diamond-list">
          <li>Defines the scientific philosophy and research direction of the Group</li>
          <li>Establishes standards for research integrity, evidence-based practice, and ethical innovation</li>
          <li>Aligns scientific initiatives with long-term institutional and societal goals</li>
        </ul>

        <h5 className="resume-section-header section-icon">B. Research & Development Leadership</h5>
        <ul className="resume-list diamond-list">
          <li>Leads multi-disciplinary R&D programs across: Biotechnology, Agro-tech & food systems, Health systems & hospital management, Nutrition, lifestyle, and human development systems</li>
          <li>Designs translational pipelines: Fundamental Research → Applied Innovation → System Design → Scalable Implementation</li>
        </ul>

        <h5 className="resume-section-header section-icon">C. Integration with Consulting & Systems Design</h5>
        <ul className="resume-list diamond-list">
          <li>Embeds scientific rigor into consulting frameworks delivered by Vasudheva Strategic Innovations</li>
          <li>Supports development of: Evidence-based institutional models, Health and education system design, Data-driven decision-making frameworks</li>
        </ul>

        <h5 className="resume-section-header section-icon">D. Knowledge Systems & Capacity Building</h5>
        <ul className="resume-list diamond-list">
          <li>Contributes to academic consulting and institutional development</li>
          <li>Mentors students, researchers, and professionals</li>
          <li>Promotes scientific temperament and research culture within organizations</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Academic & Research Background</h5>
        <ul className="resume-list diamond-list">
          <li>PhD in Biotechnology – National Centre for Cell Science (NCCS), Pune (2016–2024)</li>
          <li>M.Sc in Animal Biotechnology – National Dairy Research Institute (NDRI), Karnal</li>
        </ul>
        <p className="resume-text">
          His doctoral research focused on cellular mechanisms governing endocytosis and protein aggregation, particularly in the context of neurodegenerative disease pathways. His PhD research examined the “role of wild-type and pathogenic forms of Huntingtin in endocytosis”, contributing to the understanding of cellular dysfunction in disease systems.
        </p>

        <h5 className="resume-section-header section-icon">◆ Areas of Expertise</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Core Scientific Domains:</strong> Molecular Biology & Genetic Engineering, Cell Biology & Mechanobiology, CRISPR/Cas9 Gene Editing, Translational Biotechnology</li>
          <li><strong>Applied & Systems Domains:</strong> Health Systems & Evidence-Based Consulting, Agro-Tech & Food Systems Innovation, Nutrition & Lifestyle Systems Design, Education, Mentorship & Scientific Temperament</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Technical & Research Capabilities</h5>
        <ul className="resume-list diamond-list">
          <li><strong>Laboratory & Experimental Systems:</strong> DNA/RNA isolation, cloning, PCR, CRISPR-based gene editing (knock-in / knock-out), Mammalian cell culture and transfection</li>
          <li><strong>Advanced Imaging & Biophysics:</strong> Confocal and live-cell imaging, Atomic Force Microscopy (AFM), FRAP, Quantitative cellular analysis</li>
          <li><strong>Model Systems & Experimental Biology:</strong> Mouse genetics and embryo manipulation (IVF, microinjection), Drosophila genetics and developmental models</li>
          <li><strong>Computational & Analytical Tools:</strong> Bioinformatics (NCBI, BLAST, Primer design), Data interpretation and experimental modeling</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Research Contributions & Publications</h5>
        <ul className="resume-list diamond-list">
          <li>Research on protein aggregation and cellular mechanics (eLife)</li>
          <li>Studies on stem cell biology and endocytosis (Journal of Biological Chemistry)</li>
          <li>Contributions to cell adhesion and transcriptional regulation (FEBS Letters)</li>
          <li>Development of experimental protocols in cellular biomechanics (STAR Protocols)</li>
        </ul>
        <p className="resume-text">His research advances understanding in: Cellular mechanics and stiffness, Neurodegenerative disease biology, Stem cell regulation, Gene editing applications.</p>

        <h5 className="resume-section-header section-icon">◆ Multidisciplinary Roles within the Group</h5>
        <ul className="resume-list diamond-list">
          <li>Scientific Advisor – Vasudheva Holdings</li>
          <li>Head of R&D – Vasudheva Strategic Innovations</li>
          <li>Consultant – Health & Hospital Management</li>
          <li>Counsellor – Education & Career Development</li>
          <li>Designer – Nutrition, Fitness & Lifestyle Systems</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Thought Leadership & Philosophy</h5>
        <p className="resume-text">
          “To integrate science with society-building systems that are ethical, evidence-based, and sustainable.”
        </p>
        <ul className="resume-list diamond-list">
          <li>Scientific rigor over assumptions</li>
          <li>Systems thinking over isolated solutions</li>
          <li>Long-term impact over short-term outcomes</li>
        </ul>

        <h5 className="resume-section-header section-icon">◆ Strategic Contribution to Vasudheva Group</h5>
        <p className="resume-text">Dr. Singh strengthens the Group across Institutional, Strategic, and Operational dimensions.</p>

        <h5 className="resume-section-header section-icon">◆ Closing Statement</h5>
        <p className="resume-text">
          Dr. Surya Bansi Singh represents the scientific backbone of the
Vasudheva Group, enabling the organization to operate at the
intersection of science, systems, and society.
Through his leadership, Vasudheva advances its mission of delivering
scientific, innovative, and strategic solutions that are not only
conceptually sound but also practically implementable and socially
transformative.
        </p>
      </div>

      <div className="detail-buttons" style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "64px", flexWrap: "wrap" }}>
        <Link to="/parentcompanies" className="action-button secondary">Explore Group Structure →</Link>
        <Link to="/Contact" className="action-button primary">Route a Request →</Link>
      </div>
    </div>
  );
}