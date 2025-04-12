import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
<<<<<<< HEAD
  imports: [ReactiveFormsModule,RouterLink],
=======
  imports: [ReactiveFormsModule, RouterLink],
>>>>>>> fe05675dc11d208e57284c1811cc64f07b3ccd16
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  currentYear: number = new Date().getFullYear();

  constructor(
    private userService:UserService,
    private Router:Router,
  ){  }

 loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  async onSubmit() : Promise<void> {
    if (!this.loginForm.valid) {
      return;
    }
  try {
      const loginOk = await this.userService.login(
        this.loginForm.value.username!,
        this.loginForm.value.password!,
      );
      if (loginOk) {
        this.Router.navigate(["dashboard"]);
      }
      else{
        alert("Incorrect Username or password");
      }
    } catch (err) {
      const error = err as Error;
    } 
  }   
}
