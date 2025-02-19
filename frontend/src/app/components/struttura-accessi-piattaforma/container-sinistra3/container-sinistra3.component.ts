import { Component } from '@angular/core';
import { LinkLogInComponent } from '../link-log-in/link-log-in.component';
import { LinkSignUpComponent } from "../link-sign-up/link-sign-up.component";
@Component({
  selector: 'app-container-sinistra3',
  imports: [LinkLogInComponent, LinkSignUpComponent],
  templateUrl: './container-sinistra3.component.html',
  styleUrl: './container-sinistra3.component.css'
})
export class ContainerSinistra3Component {

}
