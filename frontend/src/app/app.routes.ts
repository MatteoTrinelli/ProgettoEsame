import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SceltaPageComponent } from './pages/scelta-page/scelta-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


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
    path:'dashboard',
    component:DashboardComponent
  }

];
