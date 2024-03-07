import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import { useEffect } from "react";
import { ProtectedRoute } from "./Components/ProtectedRoute";

const App = () => {
	useEffect(() => {
		const users = JSON.parse(localStorage.getItem("users"));
		if (!users) {
			localStorage.setItem("users", JSON.stringify([]));
		}
	}, []);
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route path="/" element={<Home />} />
					</Route>

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
