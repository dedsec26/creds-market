import { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
const Topup = () => {
  const [amount, setAmount] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [id, setId] = useState();
  const { currentUser } = useAuth();
  const userRef = collection(db, "users");

  const navigate = useNavigate();
  // console.log(currentUser.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("userData:", userData);

    setLoading(true);
    if (currentUser) {
      let userDoc = doc(db, "users", id);

      let newAmount = { credits: userData.credits + parseInt(amount) };
      await updateDoc(userDoc, newAmount);
    } else setErr("Please login first...");

    setLoading(false);
    navigate("/dash");
  };

  useEffect(() => {
    let fetchData = async (currentUser) => {
      try {
        const q = query(userRef, where("email", "==", currentUser.email));
        const doc = await getDocs(q);
        // console.log(typeof doc);
        doc.forEach((d) => {
          // console.log(d.id);
          //   console.log(d.data());
          const stuff = d.data();
          setUserData(stuff);
          setId(d.id);
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
      {/* <h2 className="text-center mb-4">{currentUser.email}</h2> */}
      <h2 className="text-center mb-4">Buy Credits</h2>

      {userData && (
        <h3 className="text-center mb-4">
          Hi {userData.name}!!! You have {userData.tokens} credits in account
        </h3>
      )}
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
