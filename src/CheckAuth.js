import { useAuth } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";
const CheckAuth = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/dash" /> : children;
};

export default CheckAuth;
