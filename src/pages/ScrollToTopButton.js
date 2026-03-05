import { useEffect, useState } from "react";
import {FaArrowUp} from 'react-icons/fa';


export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(true); 

  useEffect(() => {
    const toggleVisibility = () => {
      console.log("ScrollY:", window.scrollY); 
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
            bottom: "40px",
            right: "40px",
            width: "60px",
            height: "60px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 999999
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}