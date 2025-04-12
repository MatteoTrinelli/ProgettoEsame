import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports:[ReactiveFormsModule, RouterLink],
})
export class LoginFormComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  emailError: string | null = null;
  passwordError: string | null = null;

  constructor() {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  ngOnInit(): void {

  }

  onSubmit(): void {
    this.resetErrors();

    if (this.loginForm.valid) {
      console.log('Login valido:', this.loginForm.value);
      // Esegui login o invia al servizio
    } else {
      const emailControl = this.loginForm.get('email');
      const passwordControl = this.loginForm.get('password');

      if (emailControl?.invalid) {
        if (emailControl.errors?.['required']) {
          this.emailError = 'L\'email è obbligatoria.';
        } else if (emailControl.errors?.['email']) {
          this.emailError = 'Inserisci un\'email valida.';
        }
      }

      if (passwordControl?.invalid) {
        if (passwordControl.errors?.['required']) {
          this.passwordError = 'La password è obbligatoria.';
        }
      }

      this.loginForm.markAllAsTouched();
    }
  }

  private resetErrors(): void {
    this.emailError = null;
    this.passwordError = null;
  }
}
