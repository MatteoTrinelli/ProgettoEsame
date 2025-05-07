// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet per la navigazione

import { SceltaPageComponent } from "./components/scelta-page/scelta-page.component"; // Importa il componente di login

@Component({
  selector: 'app-root',
  standalone: true,  // Questo è un componente standalone
  imports: [RouterOutlet,SceltaPageComponent],  // Aggiungi LoginPageComponent agli imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
