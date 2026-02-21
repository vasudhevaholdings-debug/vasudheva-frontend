import { useState, useEffect } from "react";
export default function ContactForm({
  presetCategory = "",
  routingContext = {}
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    category: "",
    message: ""
  });

  const [routingResult, setRoutingResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  /**
   * Auto-fill category when preset changes
   */
  useEffect(() => {
    if (presetCategory) {
      setForm((prev) => ({
        ...prev,
        category: presetCategory
      }));
    }
  }, [presetCategory]);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setRoutingResult(null);

    try {
      const response = await fetch(
        "http://35.192.123.99:5001/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            stakeholder: routingContext.stakeholder,
            domain: routingContext.domain,
            complexity: routingContext.complexity
          })
        }
      );

      const result = await response.json();

      if (result?.success) {
        setRoutingResult({
          target: result.routedTo,
          reason: result.reason
        });

        setForm({
          name: "",
          email: "",
          organisation: "",
          category: "",
          message: ""
        });
      } else {
        throw new Error("Routing failed");
      }
    } catch (error) {
      alert(
        "We could not process your request at this time. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Start a Conversation</h2>

        <p style={{  maxWidth: 680,color: "#475569", textAlign: "center",margin: "0px auto 0px" }}>
          Share a brief description of what you are trying to solve. Based on
          your inputs, your request will be routed to the appropriate entity
          within the Vasudheva Group.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={(e) =>
              handleChange("name", e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            required
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Organisation (optional)"
            value={form.organisation}
            onChange={(e) =>
              handleChange("organisation", e.target.value)
            }
          />

          <select
            value={form.category}
            required
            onChange={(e) =>
              handleChange("category", e.target.value)
            }
          >
            <option value="">Select Problem Domain</option>
            <option value="Business / Strategy">
              Business / Strategy
            </option>
            <option value="Education">
              Education
            </option>
            <option value="Media / Communication">
              Media / Communication
            </option>
            <option value="Publishing">
              Publishing
            </option>
            <option value="Policy / Institutions">
              Policy / Institutions
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          <textarea
            placeholder="Briefly describe your problem or objective"
            value={form.message}
            required
            onChange={(e) =>
              handleChange("message", e.target.value)
            }
          />

          <button type="submit" disabled={submitting}>
            {submitting
              ? "Routing your request..."
              : "Route Me to the Right Team"}
          </button>
        </form>

        {/* Transparent routing feedback */}
        {routingResult && (
          <div
            style={{
              marginTop: 32,
              padding: 24,
              background: "#eef6fb",
              borderRadius: 10,
              border: "1px solid #e2e8f0"
            }}
          >
            <strong>
              Your request has been routed to:
            </strong>
            <p style={{ marginTop: 8 }}>
              {routingResult.target}
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#475569"
              }}
            >
              {routingResult.reason}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
