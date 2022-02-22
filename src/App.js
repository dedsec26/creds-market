import "./App.css";
import Buycreds from "./Buycredform";
import Credential from "./Credential";
import Error from "./Error";
import Login from "./Loginform";
import Signup from "./Signupform";
import Topup from "./Topupform";

function App() {
  return (
    <div className="App">
      <h1>Credentials Marketplace</h1>
      <h3>Placeholder - Current</h3>
      <Login />
      <Signup />
      <Credential />
      <Buycreds />
      <Error />
      <Topup />
    </div>
  );
}

export default App;
