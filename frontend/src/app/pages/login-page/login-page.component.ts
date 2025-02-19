import { Component } from '@angular/core';
import { ContainerSinistra3Component } from '../../components/struttura-accessi-piattaforma/container-sinistra3/container-sinistra3.component';
import { ContainerDestra6Component } from '../../components/struttura-accessi-piattaforma/container-destra6/container-destra6.component';
@Component({
  selector: 'app-login-page',
  imports: [ContainerSinistra3Component,ContainerDestra6Component],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
