import { useNavigate } from "react-router-dom";
import entrepreneurImage from "../assets/hero/entrepreneur.png";    
import institutionImage from "../assets/hero/university.png";
import governmentImage from "../assets/hero/team.png";
import corporateImage from "../assets/hero/profile.png";
import authorsImage from "../assets/hero/authorization.png";
import individualsImage from "../assets/hero/community.png";

export default function DecisionTree() {
  const navigate = useNavigate();

  const routeMap = {
    "MSMEs & Entrepreneurs": {
      path: "/Msme",
      icon: entrepreneurImage
    },
    "Institutions & Universities": {
      path: "/Institution",
      icon: institutionImage
    },
    "Government & Policymakers": {
      path: "/Government",
      icon: governmentImage
    },
    "Corporates & Organizations": {
      path: "/Corporate",
      icon: corporateImage
    },
    "Authors, Researchers & Creators": {
      path: "/authors",
      icon: authorsImage
    },
    "Individuals, Families & Communities": {
      path: "/individuals",
      icon: individualsImage
    }
  };

  const handleSelect = (value) => {
    navigate(routeMap[value].path);   // ✅ FIXED
  };

  return (
    <section style={{
    padding: "80px 20px",
    backgroundImage: `
  linear-gradient(90deg, rgba(236,193,53,0.85), rgba(76, 144, 175, 0.85)),
  repeating-radial-gradient(circle at 0 0, transparent 0, rgba(200,200,230,0.5) 10px),
  repeating-linear-gradient(rgba(123,162,100,0.9), rgba(123,162,100,0.9))
`
  }}>
      <div className="container">
        <h2>Who we work with</h2>

        <div className="dt-options">
          {Object.keys(routeMap).map((option) => (
            <button
              key={option}
              className="dt-option"
              onClick={() => handleSelect(option)}
            >
              {/* ✅ IMAGE ADDED */}
              <img
                src={routeMap[option].icon}
                alt={option}
                className="dt-icon"
              />
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}