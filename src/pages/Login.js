import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stakeholderlayout.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 bg-light px-3"
      style={{ overflow: "hidden" }}
    >
      <div className="card shadow border-0" style={{ maxWidth: "380px", width: "100%" }}>
        <div className="card-body p-4 p-md-5">
          <h3 className="text-center mb-4 fw-bold text-primary">Sign in</h3>

          <form onSubmit={handleLogin}>
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

            <button type="submit" className="btn shadow-sm btn-lg w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted me-2">No account yet?</small>
            <button
              type="button"
              className="btn btn-link text-primary p-0"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}