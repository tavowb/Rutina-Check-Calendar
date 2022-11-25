import { Navigate } from "react-router-dom";

const PublicRouter = ({ children, log }) => {
  return !log ? children : <Navigate to="/app" />;
};

export default PublicRouter;
