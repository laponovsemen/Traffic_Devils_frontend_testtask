import type {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import axiosApi from "../api";
import {UserResponse} from "../models/response/UserResponse";


export default class UserService {

	static async fetchAllUsers(): Promise<AxiosResponse<UserResponse.User[]>> {
		return axiosApi.get<UserResponse.User[]>('/auth/users')
	}
}
