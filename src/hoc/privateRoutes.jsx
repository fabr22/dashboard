import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { isSignIn } = useAuthContext();
  return isSignIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
