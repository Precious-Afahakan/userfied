import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken } from "../Auth/api";
const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => {
			return { ...prevData, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem("users"));
		const found = users.find(
			(user) => user.email === data.email && user.password === data.password
		);
		if (!found) {
			alert("invalid credentials");
			return;
		}

		console.log("found:", found);
		getUserToken(data, navigate);
	};
	return (
		<div>
			<h4>Login here</h4>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="input email"
					name="email"
					value={data.email}
					onChange={(e) => handleChange(e)}
				/>
				<input
					placeholder="input password"
					name="password"
					value={data.password}
					onChange={(e) => handleChange(e)}
				/>
				<button>Login</button>
			</form>
			<h4>
				not registered??? <Link to="/register">REG</Link>
			</h4>
			<h4>
				forgot password??? <Link to="/forgot-password">Click</Link>
			</h4>
		</div>
	);
};

export default Login;
