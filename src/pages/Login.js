import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stakeholderlayout.css";
import backgroundImage from '../assets/hero/silhouettes-modern-background_1048-3022.jpg';

// Import home icon (from react-icons)
import { FaHome } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
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
      className="d-flex align-items-center justify-content-center vh-100 px-3" 
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card shadow border-0" style={{ maxWidth: "380px", width: "100%" }}>
        <div className="card-body p-4 p-md-5 position-relative"> {/* position-relative for absolute button */}

          {/* Back to Home Button - Top Left */}
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm position-absolute top-0 start-0 m-3 d-flex align-items-center gap-1"
            onClick={() => navigate("/Home")}
            title="Back to Home"
          >
            <FaHome size={18} />
            <span>Home</span>
          </button>

          <h3 className="text-center mb-4 fw-bold text-primary">Log In</h3>

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

            <button type="submit" className="btn shadow-sm btn-lg w-100 btn-primary">
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