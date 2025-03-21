import {Navigate} from "react-router";
import React, {FC, JSX, ReactNode, useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../index";


const ProtectedRoutes = ({children} : {children: ReactNode}) => {
	const {store} = useContext(StoreContext);
	const [authChecked, setAuthChecked] = useState<boolean>(false);
	useEffect(() => {
		if (localStorage.getItem('token') ) {
			store.checkAuth()
			setAuthChecked(true)
			console.log('set')
		}
	}, []);
	useEffect(() => {
		setAuthChecked(true)
	});

	if (store.isLoading) {
		return (<div>Loading...</div>)
	}

	if(!store.isAuth && authChecked){
		return <Navigate to="/login"/>
	}


	return <> {children} </> as JSX.Element
}
export default observer(ProtectedRoutes)
