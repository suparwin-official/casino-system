import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      login(email);
      navigate("/casino");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
