
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    data_nascita: string,
    luogo_nascita: string,
    nazionalita: string,
    codice_disciplina: string,
    codice_grado: string,
    numero_cellulare: string, // keep as string
    codice_ruolo: string,
    mail: string,
    password: string
  ):any {
    try {
      // Calcola l'hash SHA256 della password
      const hashedPassword = SHA256(password).toString();
  
      const requestBody = {
        nome: nome,
        cognome: cognome,
        data_nascita: data_nascita,
        luogo_nascita: luogo_nascita,
        nazionalita: nazionalita,
        codice_disciplina: codice_disciplina,
        codice_grado: codice_grado,
        cellulare: numero_cellulare,
        codice_ruolo: codice_ruolo,
        mail: mail,
        password: hashedPassword,
      };
      console.log(requestBody);
      return this.http.post<any>(`${this.apiUrl}api/register`, requestBody);
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
      throw error; 
    }
  }
  
}
