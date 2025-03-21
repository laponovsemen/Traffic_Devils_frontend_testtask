import React, {DetailedHTMLProps, FC, HTMLAttributes, useContext, useState} from 'react';
import './ProductsUpload.css'
import {StoreContext} from "../../../index";

export interface ProductsUploadProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
}

const ProductsUpload: FC<ProductsUploadProps> = () => {
	const {store} = useContext(StoreContext);


	const [file, setFile] = useState<File | null>(null);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0] || null;
		setFile(selectedFile);
	};
	const handleUpload = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!file) {
			store.setProductError('Please choose a file');
			return;
		}

		const formData = new FormData();
		formData.append('file', file);
		store.uploadFile(formData)

	}
	return (
		<form onSubmit={handleUpload} encType="multipart/form-data">
			<label htmlFor="arbitrary">Choose csv file:</label>
			<input type="file" name={'arbitrary'} accept={'.csv'} required onChange={handleFileChange}/>
			{store.products.error && <span className={'product_upload__error'}>{store.products.error}</span>}
			<button type={'submit'}>Upload</button>
		</form>
	);
};

export default ProductsUpload;
