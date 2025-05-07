
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import bcrypt from 'bcrypt';
import { API_URL } from './../../../../../NON_COMMIT';
import { SHA256 } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 apiUrl=API_URL;


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const hashedPassword=SHA256(password).toString();
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

   register(
    nome: string,
    cognome: string,
    dataNascita: string,
    luogoNascita: string,
    nazionalità: string,
    codDisciplinaPrincipale: string,
    codiceGrado: string,
    cellulare: string, // keep as string
    codice_ruolo: number,
    mail: string,
    password: string
  ) {
    try {
      // Calcola l'hash SHA256 della password
      const hashedPassword = CryptoJS.SHA256(password).toString();
  
      const requestBody = {
        nome: nome,
        cognome: cognome,
        data_nascita: dataNascita,
        luogo_nascita: luogoNascita,
        nazionalità: nazionalità,
        codDisciplinaPrincipale: codDisciplinaPrincipale,
        codice_grado: codiceGrado,
        cellulare: cellulare,
        codice_ruolo: codice_ruolo,
        mail: mail,
        password: hashedPassword,
      };
  
      return this.http.post<any>(`${this.apiUrl}api/register`, requestBody);
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
      throw error; 
    }
  }
  
}
