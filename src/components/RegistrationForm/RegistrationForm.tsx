import React, {FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import './RegistrationForm.css'
import {NavLink, useNavigate} from "react-router";
import {StoreContext} from "../../index";

const RegistrationForm: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const {store} = useContext(StoreContext);
	const navigate = useNavigate()

	const handleRegistration = async () => {
		const registrationResult = await store.registration(login, email, password);
		if(registrationResult) {
			navigate('/');
		}
	}

	return (
		<div className="login_form__wrapper">
			<div className="login_form">
				<h2>Registration</h2>
				<input
					value={login}
					onChange={(e) => setLogin(e.target.value)}
					placeholder="login"
					type={"text"}
				/>
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
				<NavLink to={'/login'} className={"login_form_button"}>
					Login

				</NavLink>

				<button
					className="login_form_button"
					onClick={handleRegistration}
				>
					Registration
				</button>
			</div>
		</div>

	);
};

export default observer(RegistrationForm);
