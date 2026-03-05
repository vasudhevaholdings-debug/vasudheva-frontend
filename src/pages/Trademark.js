// src/pages/IPAndTrademarkPolicy.jsx
import React from 'react';

export default function Trademark() {
  return (
    <section className="py-5 py-md-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">

            {/* Header */}
            <div className="text-center mb-5 mb-md-6">
              <h1 className="display-5 fw-bold text-dark mb-3">
                Intellectual Property & Trademark Policy
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

              <h2 className="h3 fw-bold mt-5 mb-4">1. Ownership</h2>
              <p>
                All intellectual property on this website is the property of:
              </p>
              <p className="fw-semibold">
                Vasudheva Holdings Pvt. Ltd.
              </p>
              <p>Including but not limited to:</p>
              <ul className="list-unstyled ms-4">
                <li>• Frameworks</li>
                <li>• System models</li>
                <li>• Institutional diagrams</li>
                <li>• Research publications</li>
                <li>• Branding elements</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">2. Use of Content</h2>
              <p>Permitted:</p>
              <ul className="list-unstyled ms-4">
                <li>• Personal, non-commercial use</li>
                <li>• Academic citation (with attribution)</li>
              </ul>

              <p className="mt-3">Not permitted:</p>
              <ul className="list-unstyled ms-4">
                <li>• Commercial redistribution</li>
                <li>• Repackaging frameworks as proprietary work</li>
                <li>• Removal of attribution</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">3. Requests for Use</h2>
              <p>
                Formal written permission is required for:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Institutional reproduction</li>
                <li>• Publishing excerpts</li>
                <li>• Training material integration</li>
              </ul>
              <p className="mt-3">
                Contact:{' '}
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