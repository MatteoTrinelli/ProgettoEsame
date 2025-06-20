
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './../../../../../NON_COMMIT';
import { SHA256 } from 'crypto-js';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class UserService {

 apiUrl=API_URL;




  constructor(private http: HttpClient,private Router:Router) {}

  login(email: string, password: string): Observable<any> {
    const hashedPassword=SHA256(password).toString();
    return this.http.post<any>(`${this.apiUrl}api/login`, { email, password:hashedPassword });
  }

getNationality(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}api/getNationality`);
}

getDisciplina(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}api/getDisciplina`);
}

getGrado(codDisciplina:number): Observable<any> {
  console.log(codDisciplina)
   return this.http.get<any>(`${this.apiUrl}api/getGrado`, {
    params: { codDisciplina: codDisciplina}
  });
}

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.Router.navigate([""]);
  }

   decodeToken(token:string | null):string | null {
    if (token!=null)
    {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
       return JSON.parse(jsonPayload);
    }
    return null;
}


  isLoggedIn(): boolean {
    return !!this.getToken();
  }

   register(
    nome: string,
    cognome: string,
    data_nascita: string,
    luogo_nascita: string,
    codNazionalita: number,
    codice_disciplina: number,
    codice_grado: number,
    numero_cellulare: string, // keep as string
    codice_ruolo: number,
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
        codNazionalita: codNazionalita,
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
