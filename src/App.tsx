import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Products from "./components/Products/Products";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route path={'login'} element={<LoginForm/>}/>
					<Route path={'registration'} element={<RegistrationForm/>}/>
					<Route index element={
						<ProtectedRoutes>
							<Products/>
						</ProtectedRoutes>}
					/>
					<Route path={'*'} element={<NotFound/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default observer(App);
