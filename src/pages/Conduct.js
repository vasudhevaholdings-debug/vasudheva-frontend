
import React from 'react';

export default function Conduct() {
  return (
    <section className="py-5 py-md-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">

            {/* Header */}
            <div className="text-center mb-5 mb-md-6">
              <h1 className="display-5 fw-bold text-dark mb-3">
                Code of Conduct
              </h1>
              <h5 className="text-muted fw-normal mb-4">
                Vasudheva Group
              </h5>
              <p className="text-muted lead fs-5">
                Last updated: [Insert Date – e.g., February 19, 2026]
              </p>
            </div>

            {/* Content */}
            <div className="policy-content fs-5 lh-lg text-dark">

              <h2 className="h3 fw-bold mt-5 mb-4">1. Purpose</h2>
              <p>
                This Code establishes standards of:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Ethical engagement</li>
                <li>• Institutional integrity</li>
                <li>• Respectful collaboration</li>
              </ul>
              <p className="mt-3">
                It applies to:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Leadership</li>
                <li>• Employees</li>
                <li>• Consultants</li>
                <li>• Subsidiaries</li>
                <li>• Collaborators</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">2. Core Principles</h2>
              <ul className="list-unstyled ms-4">
                <li>• Integrity in all dealings</li>
                <li>• Transparency in decision-making</li>
                <li>• Accountability in commitments</li>
                <li>• Respect for human dignity</li>
                <li>• Stewardship toward ecological and social systems</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">3. Conflicts of Interest</h2>
              <p>
                Individuals must disclose any actual or potential conflict.
              </p>
              <p>
                Undisclosed conflicts may result in disengagement.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">4. Responsible Communication</h2>
              <p>
                We commit to:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Evidence-based public communication</li>
                <li>• Avoiding misinformation</li>
                <li>• Clear attribution of ideas</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">5. Non-Discrimination</h2>
              <p>
                We prohibit discrimination on grounds of:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Gender</li>
                <li>• Religion</li>
                <li>• Caste</li>
                <li>• Ethnicity</li>
                <li>• Disability</li>
                <li>• Political orientation</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">6. Reporting Misconduct</h2>
              <p>
                Concerns may be reported confidentially via:
              </p>
              <p className="mt-3">
                <strong>Subject:</strong> Grievance / Ethics
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:contact@vasudhevaholdings.com" 
                  className="text-primary fw-medium text-decoration-underline"
                >
                  connect@vasudhevaholdings.com
                </a>
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}