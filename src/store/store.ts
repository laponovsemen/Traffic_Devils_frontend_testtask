import {UserResponse} from "../models/response/UserResponse";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios, {AxiosError} from "axios";
import {IUser} from "../models/response";
import {API_URL} from "../api";
import {AuthResponse} from "../models/response/AuthResponse";
import {ArbitraryResponse} from "../models/response/ArbitraryResponse";
import ArbitraryService from "../services/ArbitraryService";


export type Products = {
	items: ArbitraryResponse.Product[]
	error: string | null
	isLoading: boolean
}

export default class Store {
	user = {} as UserResponse.User
	isAuth = false
	isLoading = false
	products: Products = {
		items: [],
		error: null,
		isLoading: false
	}


	constructor() {
		makeAutoObservable(this)
	}
	setAuth(isAuth : boolean) {
		this.isAuth = isAuth
	}
	setUser(user : UserResponse.User) {
		this.user = user
	}
	setIsLoading(isLoading : boolean) {
		this.isLoading = isLoading
	}
	setProductError(error: string | null) {
		this.products.error = error
	}
	setProductLoading(isLoading: boolean) {
		this.products.isLoading = isLoading
	}
	setProductItems(items: ArbitraryResponse.Product[]) {
		this.products.items = items
	}
	async uploadFile(file: FormData) {
		try {
			this.setProductLoading(true)
			const response = await ArbitraryService.uploadProducts(file);
			this.setProductItems(response.data.data)
		} catch (e) {
			this.setProductError('Something happened')
		} finally {
			this.setProductError(null)
			this.setProductLoading(false)
		}
	}
	async fetchProducts() {
		try{
			this.setProductLoading(true)
			const response = await ArbitraryService.fetchProducts();
			this.setProductItems(response.data)


		} catch(e) {
			this.setProductError('Something happened')
		} finally {
			this.setProductError(null)

			this.setProductLoading(false)
		}
	}
	async login(email: string, password: string) {
		try {
			const response = await AuthService.login(email, password);
			localStorage.setItem('token', response.data.accessToken);
			this.setAuth(true)
			this.setUser(response.data.user)
			return true
		} catch (e) {
			console.error((e as AxiosError<{message: string}>)?.response?.data?.message)
			return false
		}
	}

	async registration(login: string, email: string, password: string) {
		try {
			const response = await AuthService.registration(login, email, password);
			localStorage.setItem('token', response.data.accessToken);
			this.setAuth(true)
			this.setUser(response.data.user)
			return true
		} catch (e) {
			console.error((e as AxiosError<{message: string}>)?.response?.data?.message)
			return false

		}
	}

	async logout() {
		try {
			const response = await AuthService.logout();
			localStorage.removeItem('token');
			this.setAuth(false)
			this.setUser({} as IUser)
		} catch (e) {
			console.error((e as AxiosError<{message: string}>)?.response?.data?.message)
		}
	}

	async checkAuth() {
		try {
			this.setIsLoading(true);
			const response = await axios.post<AuthResponse.Refresh>(`${API_URL}/api/auth/refresh-token`,{},  {withCredentials: true})
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true);
			this.setUser(response.data.user)
		} catch(e) {
			console.error((e as AxiosError<{message: string}>)?.response?.data?.message)
		} finally {
			this.setIsLoading(false);
		}
	}
}
