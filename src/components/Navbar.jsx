import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="nav">
      <h2>🎰 Casino</h2>
      <div>
        {user && <span>৳{user.balance}</span>}
        {user && <button onClick={logout}>Logout</button>}
        {!user && <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
}
