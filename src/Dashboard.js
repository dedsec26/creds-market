import { useState } from "react";

import { Button, Alert } from "react-bootstrap";

import { useAuth } from "./contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logout();
      navigate("/");
      window.location.reload();
    } catch (e) {
      setErr(e);
    }
    setLoading(false);
  };
  return (
    <>
      <h2 className="text-center mb-4">Buy Credentials</h2>
      <h2 className="text-center mb-4">Hi {currentUser.email}!!!</h2>
      {err && <Alert variant="danger">{err}</Alert>}

      <Button
        className="w-100 my-3"
        type="submit"
        onClick={handleLogout}
        disabled={loading}
        variant="link"
      >
        Logout
      </Button>
      <Link to={"/topup"}> Top Up</Link>
    </>
  );
};

export default Dashboard;
