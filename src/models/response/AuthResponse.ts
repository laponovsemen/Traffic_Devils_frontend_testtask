import {IUser} from "./index";


export namespace AuthResponse {
	export interface Login {
		accessToken: string
		user: IUser
	}
	export interface Registration {
		accessToken: string
		user: IUser
	}

	export interface Refresh {
		accessToken: string
		user: IUser
	}
}
