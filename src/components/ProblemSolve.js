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
    <section className="problem-section">
      <div className="container">

        <h2 className="problem-title">What Problems Do We Solve?</h2>

        <p className="problem-subtitle">
          Modern societies, institutions, and markets often face structural,
          strategic, and operational challenges that limit sustainable growth.
        </p>

        <ul className="problem-list">
          {problems.map((item, index) => (
            <li key={index} className="problem-item">
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}