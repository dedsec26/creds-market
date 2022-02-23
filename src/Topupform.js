import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
const Topup = () => {
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch("/tokens/add", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          email: "aftocr@gmail.com",
          pass: "admin",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let message = await res.json();
      // console.log(typeof message);
      if (res.json && typeof message === "object") {
        for (const iterator of message) {
          // setErr(iterator.email);
          setErr(iterator.pass);
          console.log(iterator);
        }
      } else setErr(message);
    } catch (e) {
      setErr(e);
    }
    setLoading(false);
  };
  return (
    <>
      <h2 className="text-center mb-4">Buy Credits</h2>
      <h2 className="text-center mb-4">Hi Name!!!</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form>
        <Form.Group id="credits">
          <Form.Label>Amount of credits to buy</Form.Label>
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

export default Topup;
