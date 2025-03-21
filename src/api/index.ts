import axios, {AxiosError, AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export const API_URL = process.env.REACT_APP_API_URL;

const axiosApi = axios.create({
	baseURL: `${API_URL}/api`,
	withCredentials: true,
})

axiosApi.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config;
})

axiosApi.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.post<AuthResponse.Refresh>(`${API_URL}/api/auth/refresh-token`, {withCredentials: true});
				localStorage.setItem('token', response.data.accessToken)
				return axiosApi.request(originalRequest)
			} catch (e) {
				console.log('User unauthorized')
			}

		}
	})

export default axiosApi
