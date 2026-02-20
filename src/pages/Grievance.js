// src/pages/GrievanceRedressal.jsx
import React from 'react';

export default function Grievance() {
  return (
    <section className="py-5 py-md-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">

            {/* Header */}
            <div className="text-center mb-5 mb-md-6">
              <h1 className="display-5 fw-bold text-dark mb-3">
                Grievance Redressal Policy
              </h1>
              <h5 className="text-muted fw-normal mb-4">
                Vasudheva Holdings Pvt. Ltd.
              </h5>
              <p className="text-muted lead fs-5">
                Last updated: [Insert Date – e.g., February 19, 2026]
              </p>
            </div>

            {/* Content */}
            <div className="policy-content fs-5 lh-lg text-dark">

              <h2 className="h3 fw-bold mt-5 mb-4">1. Scope</h2>
              <p>
                This policy governs complaints relating to:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Ethical misconduct</li>
                <li>• Conflict of interest</li>
                <li>• Institutional behaviour</li>
                <li>• Website misuse</li>
                <li>• Data concerns</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">2. Filing a Complaint</h2>
              <p>
                Complaints must include:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Name (optional if anonymous allowed)</li>
                <li>• Nature of grievance</li>
                <li>• Relevant details</li>
              </ul>
              <p className="mt-3">
                <strong>Email subject:</strong> Grievance / Ethics
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">3. Process</h2>
              <ol className="ms-4">
                <li>Acknowledgement within reasonable time</li>
                <li>Preliminary review</li>
                <li>Investigation (if required)</li>
                <li>Resolution and closure</li>
                <li>Documentation retained confidentially</li>
              </ol>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">4. Confidentiality</h2>
              <p>
                All grievance communications are treated with discretion.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">How to Submit a Grievance</h2>
              <p>
                Send your grievance to:
              </p>
              <p className="mt-3">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:contact@vasudhevaholdings.com" 
                  className="text-primary fw-medium text-decoration-underline"
                >
                  connect@vasudhevaholdings.com
                </a>
              </p>
              <p className="mt-2">
                Please use subject line: <strong>Grievance / Ethics</strong>
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}