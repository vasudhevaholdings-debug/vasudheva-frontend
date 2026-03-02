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
    <section>
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