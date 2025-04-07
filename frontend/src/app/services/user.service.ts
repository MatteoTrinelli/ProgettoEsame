import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface LoginResponse {
  token: string;
}



@Injectable({
  providedIn: 'root',
})

export class signuprequest{
 constructor(
  nome:string,
  cognome:string,
  dob:string,
  mail:string,
  password:string,
  

 ){}
}
export class userService {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  async login(mail: string, password: string): Promise<LoginResponse> {
    const hashedPassword = CryptoJS.SHA256(password.toString());
    const requestBody = { mail, password: hashedPassword };

    try {
      const response = await firstValueFrom(
        this.http.post<LoginResponse>('/log-in', requestBody)
      );

      this.token = response.token;

      return response;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async signup(username:string, password:string):Promise<SignupResponse>{
    const hashedPassword=CryptoJS.SHA256(password.toString());
    const requestBody={}
  }


  }
