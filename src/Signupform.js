import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const Signup = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  let handleSubmit = async (e) => {
    // console.log("submitted");

    e.preventDefault();
    if (pass === passConf) {
      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          credits: 3,
        });
        console.log("here", docRef);
        //   console.log(email, pass);
        //   console.log(body);
        // let res = await fetch("/register", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     name: name,
        //     email: email,
        //     pass: pass,
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // let message = await res.json();
        // if (res.json) {
        //   setErr(message);
        // }
        await signup(email, pass);

        // let req = await fetch("/register", {
        //   method: "POST",
        //   body: JSON.stringify({ name: name, email: email }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
      } catch (e) {
        setErr(e.message);
        console.log(e);
      }
      setLoading(false);
    } else {
      setErr("Passwords do not match");
    }
  };

  return (
    <>
      <h2 className="text-center mb-4">Sign Up</h2>
      {err && <Alert variant="danger">{err}</Alert>}
      <Form>
        <Form.Group id="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
        <Form.Group id="password-conf">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={passConf}
            onChange={(e) => setPassConf(e.target.value)}
          />
        </Form.Group>
        <Button
          className="w-100 my-3"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          Sign Up
        </Button>
      </Form>
      <div className="w-100 text-center">
        Already have an account? <Link to={"/"}> Login</Link>
      </div>
    </>
  );
};

export default Signup;
