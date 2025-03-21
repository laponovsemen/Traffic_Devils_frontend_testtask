import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import { StoreContext} from "../../index";
import ProductsUpload from "./ProductsUpload/ProductsUpload";
import ProductsList from "./ProductsList/ProductsList";
import {ArbitraryResponse} from "../../models/response/ArbitraryResponse";


const Products = () => {
	const {store} = useContext(StoreContext)

	useEffect(() => {
		store.fetchProducts()
	}, []);

	return (
		<div>
			<header className="App-header">
				{!store.user.isConfirmed &&
                    <p>Please confirm your account. Letter with activation link was sent
                        on {store.user.email}</p>}
				<button onClick={() => {
					store.logout();
				}}>
					Logout
				</button>
			</header>
			<main className="App-main">
				<ProductsUpload
				/>
				<ProductsList />
			</main>
		</div>
	);
};

export default observer(Products);
