import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SceltaPageComponent } from './pages/scelta-page/scelta-page.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'scelta',
    component: SceltaPageComponent
  },

];
