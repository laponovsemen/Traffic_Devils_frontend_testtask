



export namespace ArbitraryResponse {
	export interface Product {
		id: string;
		[key: string]: any;
	}



	export interface UploadProducts {
		message: string;
		data: Product[];
	}

}
