
// /companies/strategic-innovations/services.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // if using react-router

export default function MediaService() {
  const [selectedTile, setSelectedTile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Optional: read URL params for smart prefill
    const params = new URLSearchParams(location.search);
    console.log('From:', params.get('from'), 'Company:', params.get('company'));
  }, [location]);

const tiles = [
    { id: 1, title: "Institutional Narrative Architecture" },
    { id: 2, title: "Communication Operating Model (SOP + Governance)" },
    { id: 3, title: "Brand Systems (Identity + Coherence, not cosmetic)" },
    { id: 4, title: "Stakeholder Trust & Reputation Systems" },
    { id: 5, title: "Public Communication for Programs (Gov/CSR/Education)" },
    { id: 6, title: "Crisis Communication Readiness" },
    { id: 7, title: "Content Systems (Editorial calendar + distribution logic)" },
    { id: 8, title: "Media Production (documentaries, explainers, talks)" },
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
      <h1>Vasudheva Media – Services</h1>
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