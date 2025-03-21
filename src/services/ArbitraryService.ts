import axiosApi from "../api";
import {AxiosResponse} from 'axios'
import {ArbitraryResponse} from "../models/response/ArbitraryResponse";


export default class ArbitraryService {

	static async fetchProducts(): Promise<AxiosResponse<ArbitraryResponse.Product[]>> {
		return axiosApi.get<ArbitraryResponse.Product[]>(`/arbitrary`)
	}

	static async uploadProducts(file: FormData): Promise<AxiosResponse<ArbitraryResponse.UploadProducts>> {
		return axiosApi.post<ArbitraryResponse.UploadProducts>(`/arbitrary`, file, {
			headers: {
				"Content-Type": "multipart/form-data",
			}
		})
	}


}
