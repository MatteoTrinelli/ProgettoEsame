import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = null;

  constructor(private http: HttpClient) {}

  async login(username: string, password: string): Promise<LoginResponse> {
    const hashedPassword = CryptoJS.SHA256(password.toString());
    const requestBody = { username, password: hashedPassword };

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


  }
