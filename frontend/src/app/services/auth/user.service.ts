
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import bcrypt from 'bcrypt';
import { API_URL } from './../../../../../NON_COMMIT';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 apiUrl=API_URL;


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const hashedPassword=CryptoJS.SHA256(password).toString();
    return this.http.post<any>(`${this.apiUrl}api/login`, { email, password:hashedPassword });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // async signup(
  //   mail: string,
  //   password: string,
  //   username: string,
  //   nome: string,
  //   cognome: string,
  //   codiceRuolo: string,
  //   codiceGrado: string,
  //   codDisciplinaPrincipale: string,
  //   nazionalità: string
  // ) {
  //   // Calcola l'hash SHA256 della password
  //   const hashedPassword = CryptoJS.SHA256(password).toString();

  //   const requestBody = {
  //     mail: mail,
  //     password: hashedPassword, // Invia la password hashata
  //     username: username,
  //     nome: nome,
  //     cognome: cognome,
  //     codiceRuolo: codiceRuolo,
  //     codiceGrado: codiceGrado,
  //     codDisciplinaPrincipale: codDisciplinaPrincipale,
  //     nazionalità: nazionalità,
  //   };

  //   try {
  //     const response = await firstValueFrom(
  //       this.http.post<SignupResponse>('http://localhost:3000/sign-up', requestBody)
  //     );
  //     return response;
  //   } catch (error) {
  //     console.error('Signup failed', error);
  //     throw error;
  //   }
  // }
}
