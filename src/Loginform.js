import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
      console.log(email, pass);
      let something = await res.json();
      if (res.json) {
        console.log(something);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form action="">
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

export default Login;
