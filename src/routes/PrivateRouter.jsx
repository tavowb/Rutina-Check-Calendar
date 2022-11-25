import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children, log }) => {
  return log ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
