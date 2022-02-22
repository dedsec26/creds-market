import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   console.log(email, pass);
      let body = JSON.stringify({
        name: name,
        email: email,
        pass: pass,
      });
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
  );
};

export default Signup;
