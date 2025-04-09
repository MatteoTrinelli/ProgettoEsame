import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface LoginResponse {
  token: string;
}

export interface SignupResponse {
  success: boolean;
  message: string;
}


@Injectable({
  providedIn: 'root',
})


export class userService {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  async login(mail: string, password: string): Promise<LoginResponse> {
    const hashedPassword = CryptoJS.SHA256(password.toString()).toString(CryptoJS.enc.Hex);
    const requestBody = { mail, password: hashedPassword };
  
    try {
      const response = await firstValueFrom(
        this.http.post<LoginResponse>('http://localhost:3000/log-in', requestBody)
      );
  
      this.token = response.token;
      return response;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async signup(mail:string,password:string,username:string, nome:string, cognome:string, codiceRuolo:string, codiceGrado:string, codDisciplinaPrincipale:string, nazionalità:string){
    const hashedPassword = CryptoJS.SHA256(password.toString()).toString(CryptoJS.enc.Hex);
    const requestBody={
      mail:mail,
      password:hashedPassword,
      username:username,
      nome:nome,
      cognome:cognome,
      codiceRuolo:codiceRuolo,
      codiceGrado:codiceGrado,
      codDisciplinaPrincipale:codDisciplinaPrincipale,
      nazionalità:nazionalità,
    };

    try {
      const response = await firstValueFrom(
        this.http.post<SignupResponse>('http://localhost:3000/sign-up', requestBody)
      );
      return response; //il server restituirà un messaggio che dirà se la registrazione è avvenuta con successo
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }
  
}

