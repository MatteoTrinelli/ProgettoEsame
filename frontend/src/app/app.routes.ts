import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
export const routes: Routes = [  // Aggiungi l'export davanti a routes
  { path: 'login', component: LoginPageComponent },  // Aggiungi qui i tuoi percorsi
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
