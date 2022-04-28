import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../helpers";

const PrivateRoute = ({ children, ...rest }: any) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
