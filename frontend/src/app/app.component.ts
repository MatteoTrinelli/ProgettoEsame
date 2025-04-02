// src/app/app.component.ts
import { Component } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component'; // Importa il componente di login

@Component({
  selector: 'app-root',
  standalone: true,  // Questo è un componente standalone
  imports: [LoginPageComponent],  // Aggiungi LoginPageComponent agli imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
