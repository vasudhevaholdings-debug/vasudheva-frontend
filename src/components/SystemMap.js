
import { Link } from "react-router-dom";

import parentLogo from "../assets/logos/parentLogo.png";
import siLogo from "../assets/logos/siLogo.png";
import eduLogo from "../assets/logos/eduLogo.png";
import mediaLogo from "../assets/logos/mediaLogo_transparent.png";
import publishLogo from "../assets/logos/publishLogo.png";

export default function Companies() {
  return (
    <section id="companies" className="group-showcase">
      <div className="container">

        <h1 className="group-title">The Vasudheva Group </h1>
        <p className="group-description">
          The Vasudheva Group is organised as a governance-led institutional ecosystem...
        </p>

        {/* Parent Company */}
        <Link to="/holdings" className="company-link">
          <div className="group-parent">
            <img src={parentLogo} alt="Vasudheva Holdings" />
            <h3>Vasudheva Holdings</h3>
            <span>Governance & IP</span>
          </div>
        </Link>

        {/* Subsidiaries */}
        <div className="subsidiary-grid">

          <Link to="/strategicrole" className="company-link">
            <div className="subsidiary-card">
              <img src={siLogo} alt="Strategic Innovations" />
              <p> Strategic Innovations </p>
            </div>
          </Link>

          <Link to="/innovationrole" className="company-link">
            <div className="subsidiary-card">
              <img src={eduLogo} alt="EduInnovation" />
              <p>EduInnovation </p>
            </div>
          </Link>

          <Link to="/mediarole" className="company-link">
            <div className="subsidiary-card">
              <img src={mediaLogo} alt="Media" />
              <p> Media </p>
            </div>
          </Link>

          <Link to="/publishrole" className="company-link">
            <div className="subsidiary-card">
              <img src={publishLogo} alt="Publishing" />
              <p>Publishing</p>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}

// import { useState } from "react";
// import siLogo from "../assets/logos/siLogo.png";
// import eduLogo from "../assets/logos/eduLogo.png";
// import mediaLogo from "../assets/logos/mediaLogo_transparent.png";
// import publishLogo from "../assets/logos/publishLogo.png";
// import { useNavigate } from "react-router-dom";

// export default function SystemMap() {
//   const navigate = useNavigate();
//   const [activeCompany, setActiveCompany] = useState(null);

//   const companies = {
//     strategic: {
//       name: "Vasudheva Strategic Innovations Pvt. Ltd.",
//       tagline: "Research • Consulting • Strategy • Systems Design",
//       logo: siLogo,
//       route: "/strategicservice"
//     },
//     edu: {
//       name: "Vasudheva EduInnovation Pvt. Ltd.",
//       tagline: "Education • Learning Platforms • Skills • Institutions",
//       logo: eduLogo,
//       route: "/eduinnovationservice"
//     },
//     media: {
//       name: "Vasudheva Media Pvt. Ltd.",
//       tagline: "Content • Media • Communication • Narrative Building",
//       logo: mediaLogo,
//       route: "/mediaservice"
//     },
//     publishing: {
//       name: "Vasudheva Publishing Pvt. Ltd.",
//       tagline: "Publishing • Knowledge Production • IP Dissemination",
//       logo: publishLogo,
//       route: "/publishingservice"
//     }
//   };

//   return (
//     <section className="system-map-companies">
//       <div className="container">
//         <h2>Our Operating Companies</h2>

//         {/* 4 Blocks */}
//         <div className="system-blocks">
//           {Object.keys(companies).map((key) => (
//             <div
//               key={key}
//               className={`system-block ${
//                 activeCompany === key ? "active" : ""
//               }`}
//               onClick={() => setActiveCompany(key)}
//             >
//               {companies[key].name.split(" ")[1]}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Company Detail */}
//         {activeCompany && (
//           <div className="company-detail-card">
//             <img
//               src={companies[activeCompany].logo}
//               alt={companies[activeCompany].name}
//             />
//             <h3>{companies[activeCompany].name}</h3>
//             <p>{companies[activeCompany].tagline}</p>

//             <div className="company-actions">
//               <button
//                 className="company-btn primary"
//                 onClick={() =>
//                   navigate(companies[activeCompany].route)
//                 }
//               >
//                 Explore Services
//               </button>

//               <button className="company-btn secondary">
//                 Visit Company Website
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }