import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stakeholderlayout.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");   // ← new state
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Optional: basic frontend validation (you can also do this in backend)
    if (contactNumber.length < 10 || !/^\d{10,15}$/.test(contactNumber)) {
      alert("Please enter a valid contact number (10-15 digits)");
      return;
    }

    try {
      await axios.post("http://35.192.123.99:5001/api/register", {
        name,
        email,
        contactNumber,     // ← sending to backend
        password,
      });

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 bg-light px-3"
      style={{ overflow: "hidden" }}
    >
      <div className="card shadow border-0" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-4 p-md-5">
          <h3 className="text-center mb-4 fw-bold text-primary">Register</h3>

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* ── New Contact Number Field ── */}
            <div className="mb-3">
              <input
                type="tel"
                className="form-control form-control-lg"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value.replace(/\D/g, ""))} // only allow digits
                pattern="[0-9]{10,15}"
                maxLength={15}
                title="Please enter a valid phone number (10-15 digits)"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn shadow-sm btn-lg w-100 btn-primary">
              Create Account
            </button>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted me-2">Already have an account?</small>
            <button
              type="button"
              className="btn btn-link text-primary p-0"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}