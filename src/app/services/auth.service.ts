import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../models/loginModel";
import { TokenModel } from "../models/tokenModel";
import { SingleResponseModel } from "../models/singleResposeModel";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiUrl = "https://localhost:44383/api/Auth/";
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel);
  }
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
