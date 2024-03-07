import { useState } from "react";
import { getUserToken } from "../Auth/api";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const handleReset = () => {
		const users = JSON.parse(localStorage.getItem("users"));
		const found = users.find((user) => user.email === email);
		if (!found) {
			alert("user not found");
			return;
		}
		getUserToken(found, navigate, "/reset-password");
	};
	return (
		<div>
			<input
				placeholder="emaillll"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button onClick={handleReset}>reset</button>
		</div>
	);
};

export default ForgotPassword;
