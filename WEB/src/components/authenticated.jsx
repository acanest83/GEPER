import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

export function Authenticated({ children }) {
  const authContext = useAuthContext();

  if (!authContext.user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export function Unauthenticated({ children }) {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}