

import { useNavigate } from "react-router-dom";

export default function DecisionTree() {
  const navigate = useNavigate();

  // Route mapping
  const routeMap = {
    "MSMEs & Entrepreneurs": "/Msme",
    "Institutions & Universities": "/Institution",
    "Government & Policymakers": "/Government",
    "Corporates & Organizations": "/Corporate",
    "Authors, Researchers & Creators": "/authors",
    "Individuals, Families & Communities": "/individuals"
  };

  const handleSelect = (value) => {
    navigate(routeMap[value]);
  };

  return (
    <section>
      <div className="container">
        <h2>Guided Routing</h2>

        <div className="dt-options">
          {Object.keys(routeMap).map((option) => (
            <button
              key={option}
              className="dt-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
