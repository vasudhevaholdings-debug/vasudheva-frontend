
export default function FourStepFlow() {
  const steps = [
    {
      title: "Research & Diagnosis",
      shortDesc: "Convert confusion into clarity",
      details: "Real problem • Root causes • Constraints • Feasible levers",
      outputs: "Diagnostic note, system map, decision options",
      // owner: "Group / Subsidiary",
      color: "#e3f2fd",      // light blue
      borderColor: "#1976d2" // deeper blue
    },
    {
      title: "Design & Strategy",
      shortDesc: "Translate diagnosis into solution architecture",
      details: "Strategy blueprint • Operating model • Governance • Roadmap",
      outputs: "Target operating model, governance charter, roadmap",
      // owner: "Subsidiary",
      color: "#e8f5e9",      // light green
      borderColor: "#388e3c" // green
    },
    {
      title: "Delivery & Communication",
      shortDesc: "Institutionalise change through disciplined execution",
      details: "Processes run • Training • SOPs embedded • Alignment • Monitoring",
      outputs: "Implemented systems, SOPs, dashboards, protocols",
      // owner: "Subsidiary",
      color: "#fff3e0",      // light orange
      borderColor: "#f57c00" // orange
    },
    {
      title: "Governance & Evolution",
      shortDesc: "Sustain outcomes through accountability & learning",
      details: "Governance architecture • Review cadence • Ethics controls • Learning loops • Improvement",
      outputs: "Governance charter, review system, improvement pipeline",
      // owner: "Vasudheva Holdings",
      color: "#f3e5f5",      // light purple
      borderColor: "#7b1fa2" // purple
    }
  ];

  return (
    <section >
      <div >
        {/* <img 
          src="/path-to-your-logo.png" // replace with actual logo path
          alt="Vasudheva Group Logo"
          style={{ width: "180px", marginBottom: "20px" }}
        /> */}
        {/* <h1 style={{ fontSize: "2.2rem", marginBottom: "8px", color: "#333" }}>
          THE VASUDUDHEVA GROUP
        </h1>
        <p style={{ fontStyle: "italic", color: "#555", marginBottom: "40px" }}>
          "Towards Joyful Coexistence..."
        </p> */}
        <h2>Our Systematic Approach</h2>
        {/* <p> Diagnosis → Design → Delivery → Governance → Evolution</p> */}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ width: "100%", maxWidth: "600px" }}>
              <div
                className="flow-box"
                style={{
                  backgroundColor: step.color,
                  border: `2px solid ${step.borderColor}`,
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  textAlign: "left"
                }}
              >
                <h3 style={{ margin: "0 0 12px", color: step.borderColor, fontSize: "1.5rem" }}>
                  {i + 1}. {step.title}
                </h3>
                <p style={{ fontWeight: "bold", margin: "8px 0 4px" }}>{step.shortDesc}</p>
                <p style={{ margin: "4px 0", color: "#444" }}>{step.details}</p>
                <p style={{ margin: "12px 0 4px", fontSize: "0.95rem" }}>
                  <strong>Outputs:</strong> {step.outputs}
                </p>
                <p style={{ fontSize: "0.95rem", color: "#555" }}>
                  {/* <strong>Owner:</strong> {step.owner} */}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div style={{ textAlign: "center", fontSize: "2.5rem", color: "#888", margin: "10px 0" }}>↓</div>
              )}
            </div>
          ))}

          {/* Cycle repeat */}
          <div style={{  textAlign: "center" }}>
            <div style={{ fontSize: "2rem", color: "#b8860b", margin: "10px 0" }}>↺</div>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              (Cycle repeats with stronger data and institutional memory)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}