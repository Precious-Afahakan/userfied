import { useEffect } from "react";
import useAuth from "../Auth/useAuth";
import { useState } from "react";

const ResetPassword = () => {
	const [userInfo, setUserInfo] = useState("");
	const [password, setPassword] = useState("");
	const { getUser } = useAuth();
	useEffect(() => {
		const currentUser = getUser();
		setUserInfo(currentUser);
	}, []);
	const resetPassword = () => {
		const users = JSON.parse(localStorage.getItem("users"));
		const found = users.find((user) => user.email === userInfo.email);
		const updateduser = users.map((user) => {
			if (user.email === found.email) {
				return { ...user, password: password };
			}
			return user;
		});
		console.log("updated user", updateduser);
		localStorage.setItem("users", JSON.stringify(updateduser));
	};
	return (
		<div>
			<input
				placeholder="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={resetPassword}>reset</button>
		</div>
	);
};

export default ResetPassword;
