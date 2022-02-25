import { Link } from "react-router-dom";
const Error = () => {
  return (
    <h2 className="error">
      The resource you requested does not exist.<Link to={"/"}> Go back.</Link>
    </h2>
  );
};

export default Error;
