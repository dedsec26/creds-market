import Buycreds from "./Buycredform";
import Credential from "./Credential";
import Error from "./Error";
import Login from "./Loginform";
import Signup from "./Signupform";
import Topup from "./Topupform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./Dashboard";

function App() {
  return (
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
            <Router>
              <AuthProvider>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/dash" element={<Dashboard />} />
                  <Route path="/credentials" element={<Buycreds />} />
                  <Route path="/topup" element={<Topup />} />
                </Routes>
              </AuthProvider>
            </Router>
          </Card.Body>
        </Card>
      </div>
    </Container>

    // <Credential />
  );
}

export default App;
