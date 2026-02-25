// /companies/strategic-innovations/services.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // if using react-router

export default function StrategicService() {
  const [selectedTile, setSelectedTile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Optional: read URL params for smart prefill
    const params = new URLSearchParams(location.search);
    console.log('From:', params.get('from'), 'Company:', params.get('company'));
  }, [location]);

  const tiles = [
    { id: 1, title: "Research & Diagnosis", subtitle: "System mapping, root causes, evidence pack" },
    { id: 2, title: "Strategy & Growth Architecture", subtitle: "Positioning, roadmap, competitive logic" },
    { id: 3, title: "Operating Model & SOP Systems", subtitle: "Process design, workflows, documentation" },
    { id: 4, title: "Governance & Decision Systems", subtitle: "Board/leadership protocols, accountability" },
    { id: 5, title: "Performance & KPI Architecture", subtitle: "Metrics integrity, dashboards, reviews" },
    { id: 6, title: "Institutional Reform Programs", subtitle: "Universities, schools, public institutions" },
    { id: 7, title: "Policy Design & Evaluation Support", subtitle: "Results frameworks, MEL design" },
    { id: 8, title: "Complex Systems Integration", subtitle: "Holdings review gate – mandatory for high-sensitivity cases" },
  ];

  const getPanelContent = (id) => {
    // Example content – customize per tile in real app
    const common = {
      problems: ["Fragmented decision-making", "Lack of evidence-based planning", "Misaligned incentives"],
      approach: ["1. Deep diagnostic → 2. Co-design → 3. Prototyping → 4. Institutionalisation"],
      deliverables: ["Diagnostic report", "Blueprint document", "Implementation roadmap", "Governance protocols"],
      formats: ["Diagnosis", "Program", "Retainer"],
    };

    if (id === 8) {
      return {
        ...common,
        note: "Requires Holdings governance review layer",
      };
    }
    return common;
  };

  return (
    <section className="service-navigator">
      <h1>Vasudheva Strategic Innovations – Services</h1>
      <p>Structured pathways to research-led strategy, governance and institutional coherence.</p>

      <div className="tiles-grid">
        {tiles.map(tile => (
          <div 
            key={tile.id} 
            className="tile" 
            onClick={() => setSelectedTile(tile.id === selectedTile?.id ? null : tile)}
          >
            <h3>{tile.title}</h3>
            <p>{tile.subtitle}</p>
          </div>
        ))}
      </div>

      {selectedTile && (
        <div className="panel">
          <h2>{tiles.find(t => t.id === selectedTile.id)?.title}</h2>
          <div>
            <h4>Typical problems we solve</h4>
            <ul>{getPanelContent(selectedTile.id).problems.map(p => <li key={p}>{p}</li>)}</ul>
          </div>
          <div>
            <h4>Our approach</h4>
            <ol>{getPanelContent(selectedTile.id).approach.map(s => <li key={s}>{s}</li>)}</ol>
          </div>
          <div>
            <h4>Deliverables</h4>
            <ul>{getPanelContent(selectedTile.id).deliverables.map(d => <li key={d}>{d}</li>)}</ul>
          </div>
          <div>
            <h4>Engagement formats</h4>
            <ul>{getPanelContent(selectedTile.id).formats.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
          {selectedTile.id === 8 && <p><strong>Note:</strong> {getPanelContent(selectedTile.id).note}</p>}
          <button className="cta">Request Diagnostic</button>
        </div>
      )}

      <div className="bottom-cta">
        <h3>Not sure where to start?</h3>
        <button>Request Guided Diagnosis</button>
      </div>
    </section>
  );
}