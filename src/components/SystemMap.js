// import parentLogo from "../assets/logos/parentLogo.png";
// import siLogo from "../assets/logos/siLogo.png";
// import eduLogo from "../assets/logos/eduLogo.png";
// import mediaLogo from "../assets/logos/mediaLogo_transparent.png";
// import publishLogo from "../assets/logos/publishLogo.png";

// export default function Companies() {
//   return (
//     <section id="companies" className="group-showcase">
//       <div className="container">

//         <h2 className="group-title">Vasudheva Group Structure</h2>
//         <p className="group-description">The Vasudheva Group is organised as a governance-led institutional ecosystem designed to
// address complex societal, economic, and organisational challenges through coordinated
// expertise rather than fragmented interventions.</p>

       
//         <div className="group-parent">
//           <img src={parentLogo} alt="Vasudheva Holdings" />
//           <h3>Vasudheva Holdings</h3>
//           <span>Governance & IP</span>
//         </div>

        
//         <div className="subsidiary-grid">
//           <div className="subsidiary-card">
//             <img src={siLogo} alt="Strategic Innovations" />
//             <p>Vasudheva Strategic Innovations Pvt. Ltd.</p>
//           </div>

//           <div className="subsidiary-card">
//             <img src={eduLogo} alt="EduInnovation" />
//             <p>Vasudheva EduInnovation Pvt. Ltd.</p>
//           </div>

//           <div className="subsidiary-card">
//             <img src={mediaLogo} alt="Media" />
//             <p>Vasudheva Media Pvt. Ltd.</p>
//           </div>

//           <div className="subsidiary-card">
//             <img src={publishLogo} alt="Publishing" />
//             <p>Vasudheva Publishing Pvt. Ltd.</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
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

        <h2 className="group-title">Vasudheva Group Structure</h2>
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
              <p>Vasudheva Strategic Innovations Pvt. Ltd.</p>
            </div>
          </Link>

          <Link to="/innovationrole" className="company-link">
            <div className="subsidiary-card">
              <img src={eduLogo} alt="EduInnovation" />
              <p>Vasudheva EduInnovation Pvt. Ltd.</p>
            </div>
          </Link>

          <Link to="/mediarole" className="company-link">
            <div className="subsidiary-card">
              <img src={mediaLogo} alt="Media" />
              <p>Vasudheva Media Pvt.<br/> Ltd.</p>
            </div>
          </Link>

          <Link to="/publishrole" className="company-link">
            <div className="subsidiary-card">
              <img src={publishLogo} alt="Publishing" />
              <p>Vasudheva Publishing Pvt. Ltd.</p>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}