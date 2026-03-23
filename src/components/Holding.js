import { Link } from "react-router-dom";

export default function Holding() {
  return (
    <section className="why-vasudheva"   style={{
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
        <h2>Why Vasudheva Holdings</h2>
        <h4>Principles That Guide Our Decisions, Design, and Engagements</h4>
        

        <ul>
          <li>
            <Link to="/integrated">
              Integrated Group Structure
            </Link>
          </li>

          <li>
            <Link to="/evidence">
              Evidence-Based Thinking
            </Link>
          </li>

          <li>
            <Link to="/longterm">
              Long-term Institutional View
            </Link>
          </li>

          <li>
            <Link to="/ethical">
              Ethical Governance & Transparency
            </Link>
          </li>

          <li>
            <Link to="/commitment">
              Commitment to Society & Ecology
            </Link>
          </li>
        </ul>

       <Link to="/philosopy" className="btn-primary" style={{ backgroundColor: "var(--primary)" }}>
  Learn About Our Philosophy & Governance
</Link>
      </div>
    </section>
  );
}