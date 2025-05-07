// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet per la navigazione

@Component({
  selector: 'app-root',
  standalone: true,  // Questo è un componente standalone
  imports: [RouterOutlet],  // Aggiungi LoginPageComponent agli imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
