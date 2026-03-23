import problemImage from "../assets/hero/problemsolving.png";

export default function ProblemSolve() {

  const problems = [
    "Lack of strategic clarity in growth and expansion",
    "Fragmented innovation and disconnected execution",
    "Weak governance and operational inefficiencies",
    "Limited access to credible research and insights",
    "Ineffective communication and brand positioning",
    "Low stakeholder alignment and collaboration",
    "Sustainability and long-term value creation challenges"
  ];

  return (
    <section className="problem-section"   style={{
    padding: "80px 20px",
    backgroundColor: "#fbfcfe",
    backgroundImage: `
      linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.03) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.03) 75%)
    `,
    backgroundSize: "40px 40px"
  }}>
  <div className="container">

    {/* Center Title */}
    <h2 className="problem-title">What Problems Do We Solve?</h2>

    <p className="problem-subtitle">
      Modern societies, institutions, and markets often face structural,
      strategic, and operational challenges that limit sustainable growth.
    </p>

    {/* Image + Points Layout */}
    <div className="problem-layout">

      <div className="problem-image">
        <img src={problemImage} alt="Problem illustration" />
      </div>

      <div className="problem-content">
        <ul className="problem-list">
          {problems.map((item, index) => (
            <li key={index} className="problem-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>

  </div>
</section>
  );
}