// import React from "react";

// export default function ProblemSolve() {
//   const problems = [
//     "Lack of strategic clarity in growth and expansion",
//     "Fragmented innovation and disconnected execution",
//     "Weak governance and operational inefficiencies",
//     "Limited access to credible research and insights",
//     "Ineffective communication and brand positioning",
//     "Low stakeholder alignment and collaboration",
//     "Sustainability and long-term value creation challenges"
//   ];

//   return (
//     <section className="problems-section">
//       <div className="container">
//         <h2 className="section-title">What Problems Do We Solve?</h2>
//         <p className="section-subtitle">
//           We address critical structural, strategic, and execution gaps
//           that prevent organizations from achieving sustainable growth.
//         </p>

//         <div className="problems-grid">
//           {problems.map((item, index) => (
//             <div key={index} className="problem-card">
//               <span className="problem-number">0{index + 1}</span>
//               <p>{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

export default function ProblemSolve() {
  return (
    <section className="why-vasudheva">
      <div className="container">
        <h2>What Problems Do We Solve?</h2>
        <h4>Modern societies,institutions, and markets suffer from</h4>
        

        <ul>
          <li>
          Lack of strategic clarity in growth and expansion
          </li>

          <li>
           Fragmented innovation and disconnected execution
          </li>

          <li>
          Weak governance and operational inefficiencies
          </li>

          <li>
            Limited access to credible research and insights
          </li>

          <li>
           Ineffective communication and brand positioning
          </li>
          <li>Low stakeholder alignment and collaboration</li>
          <li>Sustainability and long-term value creation challenges</li>
        </ul>
      </div>
    </section>
  );
}