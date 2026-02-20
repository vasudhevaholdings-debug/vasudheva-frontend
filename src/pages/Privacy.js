// src/pages/PrivacyPolicy.jsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../stakeholderlayout.css";

export default function Privacy() {
  return (
    <section className="py-5 py-md-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">

            {/* Header */}
            <div className="text-center mb-5 mb-md-6">
              <h1 className="display-5 fw-bold text-dark mb-3">
                Privacy Policy
              </h1>
              <h5 className="text-muted fw-normal mb-4">
                Vasudheva Holdings Pvt. Ltd.
              </h5>
              <p className="text-muted lead fs-5">
                Last updated: [Date- February 19, 2026]
              </p>
            </div>

            {/* Content */}
            <div className="policy-content fs-5 lh-lg text-dark">

              <h2 className="h3 fw-bold mt-5 mb-4">1. Introduction</h2>
              <p>
                Vasudheva Holdings Pvt. Ltd. (“Company”, “we”, “our”, “us”) is committed to responsible, ethical, and lawful handling of personal data.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect information obtained through:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Our website</li>
                <li>• Smart Routing and Contact forms</li>
                <li>• Email communications</li>
                <li>• Institutional correspondence</li>
                <li>• Collaborative engagements</li>
              </ul>
              <p>
                This policy applies to Vasudheva Holdings Pvt. Ltd. and may extend to subsidiary companies where data is shared for legitimate routing and engagement purposes.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">2. Legal Basis (India Context)</h2>
              <p>This policy aligns with:</p>
              <ul className="list-unstyled ms-4">
                <li>• Information Technology Act, 2000</li>
                <li>• SPDI Rules, 2011</li>
                <li>• Digital Personal Data Protection Act, 2023 (as applicable)</li>
                <li>• Applicable international standards where relevant</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">3. Information We Collect</h2>

              <h3 className="h5 fw-semibold mt-4 mb-3">3.1 Information You Provide</h3>
              <ul className="list-unstyled ms-4">
                <li>• Name</li>
                <li>• Organisation / affiliation</li>
                <li>• Contact details (email, phone)</li>
                <li>• Designation (optional)</li>
                <li>• Problem or intent description</li>
                <li>• Attachments (if voluntarily shared)</li>
              </ul>

              <h3 className="h5 fw-semibold mt-4 mb-3">3.2 Automatically Collected Information</h3>
              <ul className="list-unstyled ms-4">
                <li>• Page visited</li>
                <li>• Referrer information</li>
                <li>• Session identifiers</li>
                <li>• Interaction with Insight content (non-invasive analytics)</li>
              </ul>
              <p className="mt-3">
                We do not collect sensitive personal data unless voluntarily submitted.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">4. Purpose of Collection</h2>
              <p>We collect information only to:</p>
              <ul className="list-unstyled ms-4">
                <li>• Route enquiries responsibly</li>
                <li>• Evaluate collaboration requests</li>
                <li>• Conduct institutional correspondence</li>
                <li>• Fulfil governance and compliance obligations</li>
                <li>• Improve service alignment</li>
              </ul>
              <p className="mt-3">
                We do not sell or commercially exploit personal data.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">5. Data Sharing</h2>
              <p>Data may be shared:</p>
              <ul className="list-unstyled ms-4">
                <li>• Internally within the Vasudheva Group for routing purposes</li>
                <li>• With relevant subsidiary companies when engagement is appropriate</li>
                <li>• With legal or regulatory authorities when legally required</li>
              </ul>
              <p className="mt-3">
                We do not share data with third parties for marketing purposes.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">6. Data Retention</h2>
              <ul className="list-unstyled ms-4">
                <li>• Enquiries are retained for institutional record-keeping.</li>
                <li>• Governance cases may be retained longer due to compliance requirements.</li>
                <li>• Data may be archived or anonymised where appropriate.</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">7. Data Security</h2>
              <p>We implement:</p>
              <ul className="list-unstyled ms-4">
                <li>• Role-based access control</li>
                <li>• Encryption of sensitive governance records</li>
                <li>• Secure hosting infrastructure</li>
                <li>• Audit logging for routing decisions</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">8. Your Rights</h2>
              <p>Subject to applicable law, you may request:</p>
              <ul className="list-unstyled ms-4">
                <li>• Access to your personal data</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion (where legally permissible)</li>
                <li>• Clarification on processing</li>
              </ul>
              <p className="mt-3">
                Requests may be sent to:{' '}
                <a 
                  href="mailto:contact@vasudhevaholdings.com" 
                  className="text-primary fw-medium text-decoration-underline"
                >
                  connect@vasudhevaholdings.com
                </a>
              </p>

              <hr className="my-5 opacity-50" />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}