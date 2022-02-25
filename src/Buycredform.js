import { useState, useEffect } from "react";

import { Button, Form, Alert } from "react-bootstrap";

import { useAuth } from "./contexts/AuthContext";
import Credential from "./Credential";

const Buycreds = () => {
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [result, setResult] = useState(false);
  const [data, setData] = useState({});
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch("/cred/buy", {
        method: "POST",
        body: JSON.stringify({
          creds: amount,
          id: userData._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let message = await res.json();
      // console.log(res.status);
      if (res.status === 400) {
        setErr(message);
      } else {
        setResult(true);
        setData(message);
      }
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
      <h2 className="text-center mb-4">Buy Credentials</h2>
      <h2 className="text-center mb-4">Hi {userData.name}!!!</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      {result && <Credential data={data} />}
      <Form>
        <Form.Group id="credentials">
          <Form.Label>Amount of credentials to buy</Form.Label>
          <Form.Control
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button
          className="w-100 my-3"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          Buy
        </Button>
      </Form>
    </>
  );
};

export default Buycreds;
