// src/pages/Profile.jsx   (or rename to OurExperts.jsx if preferred)

import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const experts = [
  {
    name: "Dr. Rajesh Kumar Sharma",
    title: "Founder & Managing Director",
    photo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "With more than 18 years in strategic advisory, institutional design, investment management, and governance transformation, Dr. Sharma has guided multi-crore portfolios and advised organizations across Eastern India on scalable growth and long-term value creation.",
    expertise: [
      "Strategic Planning & Business Transformation",
      "Investment Advisory & Holdings Management",
      "Family Business Succession Planning",
      "Institutional Reform & Governance Architecture",
    ],
    linkedin: "#", // replace with real LinkedIn URL
  },
  {
    name: "Ms. Ishani Singh",
    title: "Director – Innovation & Strategic Partnerships",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Ishani drives innovation strategy, ecosystem partnerships, and collaborative networks in Tier-2/3 cities. She brings deep experience in startup advisory, education reform, and building high-impact alliances across sectors.",
    expertise: [
      "Ecosystem Development & Startup Advisory",
      "Education Reform & Capability Building",
      "Strategic Alliances & Collaboration Design",
      "Narrative Strategy & Knowledge Dissemination",
    ],
    linkedin: "#",
  },
  {
    name: "CA Vikram Pandey",
    title: "Chief Financial & Compliance Advisor",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Chartered Accountant with 15+ years in financial structuring, regulatory compliance, risk management, and ESG integration. He helps family offices and holding companies achieve sustainable financial governance and long-term stability.",
    expertise: [
      "Financial Structuring & Capital Allocation",
      "Regulatory & Compliance Advisory",
      "Risk Management & Internal Controls",
      "ESG & Sustainable Finance Integration",
    ],
    linkedin: "#",
  },
  // Add more team members here as needed
];

export default function Profile() {
  return (
    <section className="page-wrapper">
      <div className="container">

        {/* PAGE HERO */}
        <div className="hero-section text-center">
          <h1 className="page-title">Our Experts</h1>
          <p className="subheading">
            Leadership and domain specialists guiding institutions, businesses, 
            and public systems toward sustainable excellence, responsible governance, 
            and long-term impact.
          </p>
          <p className="supporting-line">
            Our strength lies in deep domain expertise, systemic thinking, 
            and unwavering commitment to ethical, long-term value creation.
          </p>
        </div>

        {/* EXPERTS GRID */}
        <section className="mt-5 mt-md-6">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-5">
            {experts.map((expert, index) => (
              <div className="col" key={index}>
                <div className="expert-card bg-white rounded-4 shadow-sm overflow-hidden h-100 border border-light-subtle">
                  <div className="position-relative">
                    <img
                      src={expert.photo}
                      alt={expert.name}
                      className="w-100 object-fit-cover"
                      style={{ height: '340px' }}
                    />
                    {expert.linkedin !== "#" && (
                      <div className="position-absolute top-0 end-0 p-3">
                        <a
                          href={expert.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                          style={{ width: '42px', height: '42px' }}
                        >
                          <FaLinkedinIn size={20} className="text-primary" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="p-4 p-md-5 text-center">
                    <h3 className="h4 fw-bold mb-2">{expert.name}</h3>
                    <p className="text-primary fw-medium mb-4 fs-5">{expert.title}</p>

                    <p className="text-muted mb-4 lh-base" style={{ minHeight: '100px' }}>
                      {expert.bio}
                    </p>

                    <div className="expert-expertise">
                      <h6 className="fw-semibold mb-3 text-dark">Key Expertise</h6>
                      <ul className="list-unstyled small text-start mx-auto mb-0" style={{ maxWidth: '300px' }}>
                        {expert.expertise.map((item, i) => (
                          <li key={i} className="mb-2 text-muted">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL SOFT CTA */}
        <section className="cta-section text-center mt-6 pt-5">
          <h3 className="h4 fw-bold mb-4">
            Looking for Strategic Guidance or Long-term Partnership?
          </h3>
          <p className="text-muted fs-5 mb-4" style={{ maxWidth: '720px', margin: '0 auto' }}>
            Connect with our experts to discuss institutional challenges, governance design, 
            strategic alignment, or collaborative opportunities.
          </p>

          <div className="button-group d-flex flex-column flex-md-row gap-3 justify-content-center">
            <a
              href="mailto:connect@vasudhevaholdings.com"
              className="btn btn-primary btn-lg px-5 py-3"
            >
              Start a Conversation
            </a>
            <a
              href="/contact"
              className="btn btn-outline-primary btn-lg px-5 py-3"
            >
              Explore Collaboration Pathways
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}