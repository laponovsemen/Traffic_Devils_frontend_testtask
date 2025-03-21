import axiosApi, {API_URL} from "../api";
import axios, {AxiosResponse} from 'axios'
import {AuthResponse} from "../models/response/AuthResponse";


export default class AuthService {

	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse.Login>> {
		return axios.post<AuthResponse.Login>(`${API_URL}/api/auth/login`, {email, password}, {withCredentials: true})
	}

	static async registration(login: string, email: string, password: string): Promise<AxiosResponse<AuthResponse.Registration>> {
		return axios.post<AuthResponse.Registration>(`${API_URL}/api/auth/registration`, {login, email, password}, {withCredentials: true})
	}

	static async logout(): Promise<void> {
		return axiosApi.post('/auth/logout', {}, {withCredentials: true})
	}


}
