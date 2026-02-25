import { Link } from "react-router-dom";

export default function FourStepFlow() {
  const steps = [
    {
      title: "Research & Diagnosis",
      path: "/research",
      shortDesc: "Convert confusion into clarity",
      details: "Real problem • Root causes • Constraints • Feasible levers",
      outputs: "Diagnostic note, system map, decision options",
      color: "#e3f2fd",
      borderColor: "#1976d2"
    },
    {
      title: "Design & Strategy",
      path: "/design",
      shortDesc: "Translate diagnosis into solution architecture",
      details: "Strategy blueprint • Operating model • Governance • Roadmap",
      outputs: "Target operating model, governance charter, roadmap",
      color: "#e8f5e9",
      borderColor: "#388e3c"
    },
    {
      title: "Delivery & Communication",
      path: "/delivery",
      shortDesc: "Institutionalise change through disciplined execution",
      details: "Processes run • Training • SOPs embedded • Alignment • Monitoring",
      outputs: "Implemented systems, SOPs, dashboards, protocols",
      color: "#fff3e0",
      borderColor: "#f57c00"
    },
    {
      title: "Governance & Evolution",
      path: "/governance",
      shortDesc: "Sustain outcomes through accountability & learning",
      details: "Governance architecture • Review cadence • Ethics controls • Learning loops • Improvement",
      outputs: "Governance charter, review system, improvement pipeline",
      color: "#f3e5f5",
      borderColor: "#7b1fa2"
    }
  ];

  return (
    <section>
      <div>
        <h2>Our Systematic Approach</h2>
        <p style={{ fontStyle: "italic", textAlign: "center", marginBottom: "40px" }}>
          From Diagnosis to Institutional Memory
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: "100%", maxWidth: "600px" }}>
              
              <Link
                to={step.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    backgroundColor: step.color,
                    border: `2px solid ${step.borderColor}`,
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  className="flow-box"
                >
                  <h3 style={{ marginBottom: "12px", color: step.borderColor }}>
                    {i + 1}. {step.title}
                  </h3>
                  <p style={{ fontWeight: "bold" }}>{step.shortDesc}</p>
                  <p>{step.details}</p>
                  <p>
                    <strong>Outputs:</strong> {step.outputs}
                  </p>
                </div>
              </Link>

              {i < steps.length - 1 && (
                <div style={{ textAlign: "center", fontSize: "2rem", margin: "10px 0" }}>
                  ↓
                </div>
              )}
            </div>
          ))}

          <div style={{ textAlign: "center" }}>
            ↺
            <p style={{ fontStyle: "italic" }}>
              (Cycle repeats with stronger data and institutional memory)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}