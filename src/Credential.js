import { useState, useEffect } from "react";
const Credential = () => {
  const [creds, setCreds] = useState([
    { email: "test@test.com", pass: "123", id: 1 },
    { email: "test2@test.com", pass: "asf", id: 2 },
    { email: "test3@test.com", pass: "zxc", id: 3 },
    { email: "aflal@test.com", pass: "qaz", id: 4 },
  ]);
  const showMore = () => {
    // let newCreds = creds;
    // newCreds.push({ email: "new", pass: "new", id: "5" });
    // newCreds.pop();
    // console.log(newCreds);
    // console.log(typeof newCreds);
    // console.log(typeof creds);
    let new1 = [{ email: "new", pass: "new", id: 5 }];
    setCreds(new1);
    // setCreds(newCreds);
  };

  return (
    <div className="creds">
      <p>Placeholder - Email</p>
      <p>Placeholder - Password</p>

      {creds.map((cred) => (
        <div className="cred" key={cred.id}>
          <h3>{cred.email}</h3>
          <h4>{cred.pass}</h4>
        </div>
      ))}
      <button onClick={showMore}>Click Me</button>
    </div>
  );
};

export default Credential;
