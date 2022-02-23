import Buycreds from "./Buycredform";
import Credential from "./Credential";
import Error from "./Error";
import Login from "./Loginform";
import Signup from "./Signupform";
import Topup from "./Topupform";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Credentials Marketplace</h2>
                {/* <Credential />
                <Error /> */}
                <Signup />
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Router>
    </AuthProvider>
    // <Credential />
  );
}

export default App;
