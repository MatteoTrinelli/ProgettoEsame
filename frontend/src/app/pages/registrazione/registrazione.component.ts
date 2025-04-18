import { Component } from '@angular/core';
import { UserService } from '../../services/auth/user.service';
import { Router,RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SceltaUserComponent } from '../../components/scelta-user/scelta-user.component';

@Component({
  selector: 'app-registrazione',
  imports: [ReactiveFormsModule,RouterLink,SceltaUserComponent],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  currentYear: number = new Date().getFullYear();
  sceltaTipo:boolean=false;

  constructor(
      private userService:UserService,
      private Router:Router,
  ){}

  signupFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  aggiornaScelta(tipo: boolean) {
    this.sceltaTipo = tipo;
  }
}
