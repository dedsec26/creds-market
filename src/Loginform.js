import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(null);
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          pass: pass,
        }),
      });
      let message = await res.json();
      if (res.json) {
        setErr(message);
      }
    } catch (e) {
      setErr(e);
    }
  };
  return (
    <>
      <h2 className="text-center mb-4">Log In</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 my-3" type="submit" onClick={handleSubmit}>
          Log in
        </Button>
      </Form>
    </>
  );
};

export default Login;
