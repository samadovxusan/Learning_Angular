import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../interfaces/login-request";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {response} from "express";
import {LoginResponse} from "../interfaces/login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
   apiUrl = environment.apiUrl;
  tokenKey :string = 'token';
    login(data:LoginRequest):Observable<LoginResponse>{
      return this.http.post<LoginResponse>('http://localhost:5000/api/auth/login', data).pipe(
        map((response) => {
          localStorage.setItem(this.tokenKey,response.token)
          return response
        })
      );
    }
}
