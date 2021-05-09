import { StatusCodes } from "http-status-codes";
import { action, observable, makeAutoObservable } from "mobx";
import { emptyUser, User } from "../models/user";
import API from "../utils/api";

class UserStore {

    @observable user: User = emptyUser;
    @observable isLoggedIn: boolean = false;
    
    @observable loading: boolean = false;
    @observable loginError: boolean = false;
    @observable loginErrorCode: number = -1;
 
    constructor() {
        makeAutoObservable(this)
        const user = localStorage.getItem("user");
        if(user !== null) {
            this.user = JSON.parse(user? user : "{}");
            this.isLoggedIn = true;
        }
    }

    @action
    setAuthenticationInfo(info: any) {
        localStorage.setItem("accessToken", info.access_token);
        localStorage.setItem("refreshToken", info.refresh_token);
        localStorage.setItem("user", JSON.stringify(info.user));
        this.user = info.user;
        this.loginError = false;
        this.isLoggedIn = true;
    }

    @action
    setError(errorCode: number) {
        this.loginError = true;
        this.loginErrorCode = errorCode;
    }

    @action
    getUserFromAPI(id: number) {
    }

    getAccessToken() {
        return localStorage.getItem("accessToken");
    }

    login(username: string, password: string) {
        API.post("/authentication/login", {username, password}).then(
            (r) => {
                if(r.status === StatusCodes.OK) {
                    this.setAuthenticationInfo(r.data);
                }
                else {
                    this.setError(r.status);
                }
            }
        ).catch( (e) => {
            console.log(e)
            this.setError(e.response.status)
        })
    }

    @action
    logout() {
        this.user = emptyUser;
        this.isLoggedIn = false;
        localStorage.clear();
    }
}

export default new UserStore();
