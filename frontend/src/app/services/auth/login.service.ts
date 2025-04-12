// src/app/auth/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:3000/auth/login'; 

  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any> {
    const body = { email, password }; // Corpo della richiesta con email e password
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Impostiamo i headers

    return this.http.post<any>(this.loginUrl, body, { headers });
  }
}
