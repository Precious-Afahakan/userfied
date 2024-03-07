import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken } from "../Auth/api";
const Register = () => {
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
		console.log("users:", users);
		const newUser = [...users, data];
		localStorage.setItem("users", JSON.stringify(newUser));
		getUserToken(data, navigate);
	};
	return (
		<div>
			<h4>Register here</h4>
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
				<button>Register</button>
			</form>
			<h4>
				registered?? <Link to="/login">Login</Link>{" "}
			</h4>
		</div>
	);
};

export default Register;
