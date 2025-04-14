import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/auth/user.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  currentYear: number = new Date().getFullYear();

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });


  async onSubmit(): Promise<void> {
    if (!this.loginForm.valid) return;
    try {
      const loginOk = await this.userService.login(
        this.loginForm.value.username!,
        this.loginForm.value.password!,
      );
      if (loginOk) {
        this.router.navigate(["dashboard"]);
      } else {
        alert("Incorrect Username or password");
      }
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  }
}
