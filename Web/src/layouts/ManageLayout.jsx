import { Outlet, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function manageLayout() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div>
      <nav>
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/dashboard/profile">Profile</Link> | 
        <button onClick={logout}>Logout</button>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

