import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const ProtectedRoute = () => {
	const { validateToken } = useAuth();
	const isValid = validateToken();

	return isValid ? <Outlet /> : <Navigate to={"/login"} />;
};
export { ProtectedRoute };
