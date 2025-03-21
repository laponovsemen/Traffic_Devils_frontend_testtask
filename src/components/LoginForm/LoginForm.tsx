import React, {FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../index";
import './LoginForm.css'
import {NavLink, useNavigate} from "react-router";

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const navigate = useNavigate();
	const {store} = useContext(StoreContext);
	const handleLogin = async () => {
		const loginResult = await store.login(email, password);
		if(loginResult) {
			navigate('/');
		}
	}

	return (
		<div className="login_form__wrapper">
			<div className="login_form">
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="email"
					type={"email"}
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
					type={"password"}
				/>
				<button
					className="login_form_button"

					onClick={handleLogin}
				>
					Login
				</button>
				<NavLink className="login_form_button" to={'/registration'}>
					Registration
				</NavLink>

			</div>
		</div>

	);
};

export default observer(LoginForm);
