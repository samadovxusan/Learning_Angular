import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {LoginRequest} from "../app/interfaces/login-request";
import {map, Observable} from "rxjs";
import {LoginResponse} from "../app/interfaces/login-response";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  apiUrl = environment.apiUrl;
  tokenKey : string = 'token';
  router =  inject(Router);

  login(data :LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}auth/login`,data).pipe(
      map((response: LoginResponse) => {
        localStorage.setItem(this.tokenKey, response.token);
        this.router.navigate(['/register']);
        return response;
      }));
  }
}
