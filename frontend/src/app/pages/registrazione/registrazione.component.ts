import { Component } from '@angular/core';
import { UserService } from '../../services/auth/user.service';
import { Router,RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  imports: [RouterLink],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  currentYear: number = new Date().getFullYear();

  constructor(
      private userService:UserService,
      private Router:Router,
  ){}

  signupFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
}
