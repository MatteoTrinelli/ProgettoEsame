import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import CryptoJS from 'crypto-js'; 



@Injectable({
  providedIn: 'root',
})
export class UserService {
 apiUrl="http://localhost:3000";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
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

  async signup(
    mail: string,
    password: string,
    username: string,
    nome: string,
    cognome: string,
    codiceRuolo: string,
    codiceGrado: string,
    codDisciplinaPrincipale: string,
    nazionalità: string
  ) {
    // Calcola l'hash SHA256 della password
    const hashedPassword = CryptoJS.SHA256(password).toString();

    const requestBody = {
      mail: mail,
      password: hashedPassword, // Invia la password hashata
      username: username,
      nome: nome,
      cognome: cognome,
      codiceRuolo: codiceRuolo,
      codiceGrado: codiceGrado,
      codDisciplinaPrincipale: codDisciplinaPrincipale,
      nazionalità: nazionalità,
    };

    try {
      const response = await firstValueFrom(
        this.http.post<SignupResponse>('http://localhost:3000/sign-up', requestBody)
      );
      return response;
    } catch (error) {
      console.error('Signup failed', error);
      throw error;
    }
  }
}
