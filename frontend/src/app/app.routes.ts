import { Routes } from '@angular/router';
import { SceltaPageComponent } from './components/scelta-page/scelta-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'scelta',
    component: SceltaPageComponent
  },
  {
    path:'signup',
    component:RegistrazioneComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }

];
