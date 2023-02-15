import { useContext } from "react";

import { AuthContext } from "../hoc/authProvider";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
