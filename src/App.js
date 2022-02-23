import "./App.css";
import Buycreds from "./Buycredform";
import Credential from "./Credential";
import Error from "./Error";
import Login from "./Loginform";
import Signup from "./Signupform";
import Topup from "./Topupform";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Credentials Marketplace</h2>
              <Credential />
              <Buycreds />
              <Error />
              <Topup />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Router>
  );
}

export default App;
