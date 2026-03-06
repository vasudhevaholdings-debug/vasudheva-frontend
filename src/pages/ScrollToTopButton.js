import { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false); // Start hidden

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "6px", // Adjusted for better desktop visibility (away from edge)
            width: "45px",
            height: "45px",
            background: "linear-gradient(135deg, #007BFF, #0056b3)",
            color: "white", // Explicit button color
            border: "none",
            borderRadius: "50%",
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 16px rgba(0, 123, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.3)";
          }}
        >
          {/* Explicit styling on the icon to force white color */}
          <FaArrowUp 
            style={{ 
              color: "white", // Force icon color
              fill: "white",   // Backup for SVG fill
              width: "20px",   // Ensure consistent sizing
              height: "20px",
              transition: "all 0.2s ease" // Subtle icon animation
            }} 
          />
          
        </button>
      )}
    </>
  );
}