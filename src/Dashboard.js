import { useState, useEffect } from "react";

import { Button, Alert } from "react-bootstrap";

import { useAuth } from "./contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState({});
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
  useEffect(() => {
    let fetchData = async (currentUser) => {
      try {
        let res = await fetch("/data/" + currentUser.email, {
          method: "GET",
        });
        let message = await res.json();
        let temp = message;
        // console.log("temp: ", temp);
        await setUserData(temp);
        // console.log("userData:", userData);
        return message;
      } catch (e) {
        setErr(e);
      }
    };
    fetchData(currentUser);

    // setUserData(message);
    // console.log(userData);
  }, [currentUser]);
  return (
    <>
      <h2 className="text-center mb-4">Hi {userData.name}!!!</h2>
      {/* {console.log(userData)} */}
      {err && <Alert variant="danger">{err}</Alert>}
      <div className="text-center">
        You have {userData.tokens} tokens left. Click{" "}
        <Link to={"/topup"}> here</Link> to top up.
      </div>
      <div className="text-center">
        Click <Link to={"/credentials"}> here</Link> to buy credentials.
      </div>
      <Button
        className="w-100 my-3"
        type="submit"
        onClick={handleLogout}
        disabled={loading}
        variant="link"
      >
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
