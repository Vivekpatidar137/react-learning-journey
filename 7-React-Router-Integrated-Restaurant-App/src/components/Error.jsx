import { Link, useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="error-container">
      <div className="error-code">{status || "404"}</div>
      <div className="error-message">
        <h1>Oops! Something went wrong</h1>
        <p>{statusText || "The page you're looking for doesn't exist."}</p>
        <Link to="/" className="error-button">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
