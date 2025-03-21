import React, {DetailedHTMLProps, FC, HTMLAttributes, useContext} from 'react';
import './ProductsList.css'
import {StoreContext} from "../../../index";
import {observer} from "mobx-react-lite";

interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableElement>, HTMLTableElement>{

}

const ProductsList: FC<ProductsListProps> = () => {
	const {store} = useContext(StoreContext)
	const currentProducts = store.products.items
	const tableHeaders = Object.keys(currentProducts[0] ?? {})

	if(store.products.isLoading) {
		return <div className="lds-ring">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	}
	return (
		<table className={'product_list__table'}>
			<thead>
			<tr className={'product_list__header'}>
					{tableHeaders.map(key => (<th key={`thead-${key}`}>{key}</th>))}
				</tr>
			</thead>
			<tbody>
				{store.products.items?.map(p => <tr className={'product_list__item'}>
					{tableHeaders.map(header =>  <td>{p[header]}</td>)}
				</tr>)}

			</tbody>
		</table>
	);
};

export default observer(ProductsList);
