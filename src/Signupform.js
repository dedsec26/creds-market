import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (pass) {
    }
    try {
      //   console.log(email, pass);
      //   console.log(body);
      let res = await fetch("/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          pass: pass,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let message = await res.json();
      if (res.json) {
        console.log(message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            value={passConf}
            onChange={(e) => setPassConf(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 my-3" type="submit" onClick={handleSubmit}>
          Log in
        </Button>
      </Form>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="text"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Signup;
