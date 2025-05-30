import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { DashboardAllievoComponent } from './pages/dashboard-allievo/dashboard-allievo.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path:'signup',
    component:RegistrazioneComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dashboardAllievo',
    component:DashboardAllievoComponent
  }

];
