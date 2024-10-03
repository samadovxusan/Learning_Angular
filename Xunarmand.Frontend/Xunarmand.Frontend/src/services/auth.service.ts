import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {LoginRequest} from "../app/interfaces/login-request";
import {map, Observable} from "rxjs";
import {LoginResponse} from "../app/interfaces/login-response";
import {Router} from "@angular/router";
import {RegisterRequest} from "../app/interfaces/register-request";
import {RegisterResponse} from "../app/interfaces/register-response";

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
        // localStorage.setItem(this.tokenKey, response.token);
        return response;
      }));
  }

  register(data :RegisterRequest): Observable<RegisterResponse>{

    return this.http.post<RegisterResponse>(`${this.apiUrl}auth/register`,data).pipe(
      map((response: RegisterResponse) => {

        return response;
      }));

  }
  // Foydalanuvchi ma'lumotlarini saqlash funksiyasi
  saveUserData(userData: any) {
    localStorage.setItem('user', JSON.stringify(userData));
  }


  // Saqlangan foydalanuvchi ma'lumotlarini olish funksiyasi
  getUserData() {
    const userData = localStorage.getItem('user'); // yoki boshqa joy
    if (userData) {
      return JSON.parse(userData);
    }
    return null; // yoki kerakli xato xabari
  }


  // Foydalanuvchini tizimdan chiqish funksiyasi
  logout() {
    localStorage.removeItem('user');
  }


}
