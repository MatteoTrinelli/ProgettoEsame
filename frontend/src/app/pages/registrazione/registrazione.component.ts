import { Component } from '@angular/core';
import { UserService } from '../../services/auth/user.service';
import { Router,RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SceltaUserComponent } from '../../components/scelta-user/scelta-user.component';
import { RegistrazioneAllievoComponent } from '../../components/registrazione-allievo/registrazione-allievo.component';
import { RegistrazioneMaestroComponent } from '../../components/registrazione-maestro/registrazione-maestro.component';
@Component({
  selector: 'app-registrazione',
  imports: [ReactiveFormsModule,RouterLink,SceltaUserComponent,RegistrazioneAllievoComponent,RegistrazioneMaestroComponent],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  currentYear: number = new Date().getFullYear();
  sceltaTipo:number=0;

  constructor(
      private userService:UserService,
      private Router:Router,
  ){}

  signupFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  aggiornaScelta(tipo: number) {
    this.sceltaTipo = tipo;
    console.log(this.sceltaTipo)
  }
}
