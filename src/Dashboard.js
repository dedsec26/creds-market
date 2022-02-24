import { useState } from "react";

import { Button, Alert } from "react-bootstrap";

const Dashboard = () => {
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    } catch (e) {
      setErr(e);
    }
    setLoading(false);
  };
  return (
    <>
      <h2 className="text-center mb-4">Buy Credentials</h2>
      <h2 className="text-center mb-4">Hi Name!!!</h2>
      {err && <Alert variant="danger">{err}</Alert>}

      <Button
        className="w-100 my-3"
        type="submit"
        onClick={handleSubmit}
        disabled={loading}
        variant="link"
      >
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
