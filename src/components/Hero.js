import { useEffect, useState } from "react";
import image1 from "../assets/hero/hero1.jpeg";
import image2 from "../assets/hero/hero3.jpeg";
import image3 from "../assets/hero/hero2.jpeg";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";


const slides = [
  {
    image: image1,
    title: "Vasudheva Holdings Pvt. Ltd.",
    subtitle:
      "Governance, Integration & Stewardship for the Vasudheva Group",
    text:
      "Parent, Holding & Governance Company responsible for the strategic coordination, institutional governance, and institutional oversight, and intellectual property stewardship of the Vasudheva Group."
  },
  {
    image: image2,
    title: "Institutional Governance & Structure",
    subtitle:
      "A coordinated group of independent operating companies",
    text:
      "Vasudheva Holdings provides governance, strategic oversight, and intellectual property stewardship across the group."
  },
  {
    image: image3,
    title: "A Routing & Coordination Platform",
    subtitle:
      "Designed for clarity, not marketing",
    text:
      "Requests are assessed and routed to the appropriate subsidiary based on domain, mandate, and expertise."
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider" id ="home">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content container">
              <h1>{slide.title}</h1>
              <h3>{slide.subtitle}</h3>
              <p>{slide.text}</p>

              <div className="hero-actions">
                {/* <a href="#companies" className="btn-primary">
                  View Group Structure
                </a> */}
                <a href="#contact" className="btn-secondary">
                  Route a Request <HiMiniArrowTrendingUp className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="hero-nav hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className="hero-nav hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>
      {/* Dots Navigation */}
<div className="hero-dots">
  {slides.map((_, i) => (
    <button
      key={i}
      className={`hero-dot ${i === index ? "active" : ""}`}
      onClick={() => setIndex(i)}
      aria-label={`Go to slide ${i + 1}`}
    />
  ))}
</div>
    </section>
  );
}
