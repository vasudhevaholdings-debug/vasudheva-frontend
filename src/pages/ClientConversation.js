import "../stakeholderlayout.css";
import { useState } from "react";

export default function ClientConversation() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/client-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Thank you! Your inquiry has been received and routed successfully.");
        e.target.reset();
      } else {
        setStatus("❌ " + (result.message || "Something went wrong. Please try again."));
      }
    } catch (error) {
      setStatus("❌ Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-wrapper">
      <div className="container">

        <a href="/collaborate" className="back-link">← Back to Collaboration Paths</a>

        <div className="hero-section">
          <h2>Start a Client Conversation</h2>
          <p className="subheading">
            Tell us about your challenge or goal. We will route your request to the right subsidiary 
            and respond thoughtfully within 5–7 business days.
          </p>
        </div>

        <section className="form-section">
          <div className="form-container">
            <h3>Your Organisation & Intent</h3>

            <form className="collaboration-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* All your existing fields — make sure 'name' attributes are present */}
                <div className="form-group">
                  <label>Your Full Name <span className="required">*</span></label>
                  <input type="text" name="from_name" placeholder="Dr. Priya Sharma" required />
                </div>

                <div className="form-group">
                  <label>Designation / Role</label>
                  <input type="text" name="designation" placeholder="Founder & CEO" />
                </div>

                <div className="form-group">
                  <label>Organisation Name <span className="required">*</span></label>
                  <input type="text" name="organisation" placeholder="GreenEarth Solutions Pvt Ltd" required />
                </div>

                <div className="form-group">
                  <label>Type of Organisation</label>
                  <select name="org_type" required>
                    <option value="">Select type</option>
                    <option value="MSME / Startup">MSME / Startup</option>
                    <option value="Corporate / Large Enterprise">Corporate / Large Enterprise</option>
                    <option value="Educational Institution">Educational Institution</option>
                    <option value="Government / Public Body">Government / Public Body</option>
                    <option value="NGO / Foundation / Think Tank">NGO / Foundation / Think Tank</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input type="email" name="reply_to" placeholder="you@organisation.com" required />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" />
                </div>

                <div className="form-group full-width">
                  <label>What would you like to achieve? <span className="required">*</span></label>
                  <textarea name="message" rows="5" placeholder="Describe your goal..." required></textarea>
                </div>

                <div className="form-group full-width">
                  <label>Any specific subsidiary or area you have in mind?</label>
                  <textarea name="subsidiary" rows="2" placeholder="e.g. Vasudheva Education, Vasudheva Media..."></textarea>
                </div>

                <div className="form-group full-width">
                  <label>How did you hear about Vasudheva Group?</label>
                  <input type="text" name="source" placeholder="LinkedIn, Website, Referral..." />
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="primary large" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Client Inquiry"}
                </button>
              </div>

              {status && (
                <p className="form-note" style={{ color: status.includes("✅") ? "green" : "red" }}>
                  {status}
                </p>
              )}

              <p className="form-note">
                We respect your time and will only proceed if there is a strong values and purpose alignment.
              </p>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}