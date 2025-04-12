import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import * as bcrypt from 'bcrypt'  // Importa bcryptjs

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
export class UserService {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  // Funzione di login
  async login(mail: string, password: string): Promise<LoginResponse> {
    // Qui normalmente verifichi la password con quella memorizzata sul server
    // Per esempio, invii la password in chiaro al server e il server la confronta con quella memorizzata.
    
    const requestBody = { mail, password };

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

  // Funzione di registrazione
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
    // Usa bcryptjs per fare l'hashing della password
    const hashedPassword = await bcrypt.hash(password, 10); // Il secondo parametro è il numero di "giri" (salt rounds)

    const requestBody = {
      mail: mail,
      password: hashedPassword,  // La password viene inviata già criptata
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
