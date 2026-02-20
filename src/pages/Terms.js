// src/pages/TermsOfUse.jsx
import React from 'react';

export default function Terms() {
  return (
    <section className="py-5 py-md-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">

            {/* Header */}
            <div className="text-center mb-5 mb-md-6">
              <h1 className="display-5 fw-bold text-dark mb-3">
                Terms of Use
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

              <h2 className="h3 fw-bold mt-5 mb-4">1. Acceptance</h2>
              <p>
                By accessing this website, you agree to these Terms of Use.
              </p>
              <p>
                If you do not agree, please discontinue use.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">2. Purpose of Website</h2>
              <p>This website:</p>
              <ul className="list-unstyled ms-4">
                <li>• Provides institutional information</li>
                <li>• Offers structured routing for collaboration</li>
                <li>• Publishes research and insights</li>
              </ul>
              <p className="mt-3">
                It does not constitute:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Legal advice</li>
                <li>• Financial advice</li>
                <li>• Binding engagement</li>
                <li>• Formal consultancy agreement</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">3. Intellectual Property</h2>
              <p>
                All content including:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• Text</li>
                <li>• Frameworks</li>
                <li>• Diagrams</li>
                <li>• Publications</li>
                <li>• Logos</li>
                <li>• Institutional models</li>
              </ul>
              <p className="mt-3">
                Are owned by or licensed to Vasudheva Holdings Pvt. Ltd.
              </p>
              <p>
                Unauthorised reproduction, distribution, or commercial use is prohibited.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">4. No Guarantees</h2>
              <p>
                The website provides informational content.
              </p>
              <p>
                Submission of forms does not create a binding relationship.
              </p>
              <p>
                Engagements begin only upon formal agreement with the relevant subsidiary.
              </p>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">5. Limitation of Liability</h2>
              <p>
                To the extent permitted by law:
              </p>
              <ul className="list-unstyled ms-4">
                <li>• The Company is not liable for indirect or consequential damages arising from use of this website.</li>
                <li>• Content is provided “as is”.</li>
              </ul>

              <hr className="my-5 opacity-50" />

              <h2 className="h3 fw-bold mt-5 mb-4">6. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India.
              </p>
              <p>
                Jurisdiction: Courts in Varanasi, Uttar Pradesh, India.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}