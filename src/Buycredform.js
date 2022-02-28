import { useState, useEffect } from "react";

import { Button, Form, Alert } from "react-bootstrap";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

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
  const userRef = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // let res = await fetch("/cred/buy", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     creds: amount,
      //     id: userData._id,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // let message = await res.json();
      // // console.log(res.status);
      // if (res.status === 400) {
      //   setErr(message);
      // } else {
      //   setResult(true);
      //   setData(message);
      // }
      let userDoc = doc(db, "users", userData.id);
      let newAmount = { credits: userData.credits + amount };
      const res = await updateDoc(userDoc, newAmount);
      if (res)
        setResult(
          `You have added ${amount} credits and now you have ${newAmount} credits in total.`
        );
    } catch (e) {
      setErr(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    let fetchData = async (currentUser) => {
      try {
        const q = query(userRef, where("email", "==", currentUser.email));
        const doc = await getDocs(q);
        // console.log(typeof doc);
        doc.forEach((d) => {
          //   console.log(d.id);
          //   console.log(d.data());
          const stuff = d.data();
          setUserData(stuff);
        });
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
