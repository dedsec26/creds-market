import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  let handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      //   let res = await fetch("/login", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: email,
      //       pass: pass,
      //     }),
      //   });
      //   let message = await res.json();
      //   if (res.json) {
      //     setErr(message);
      //   }
      await login(email, pass);
    } catch (e) {
      setErr(e.message);
      setLoading(false);
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
        <Button
          className="w-100 my-3"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          Log in
        </Button>
      </Form>
      <div className="w-100 text-center">
        Don't have an account? <Link to={"/signup"}> Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
