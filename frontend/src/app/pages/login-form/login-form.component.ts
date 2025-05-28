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
  errorMsg:string='';
  datiUtente:any=null;

  constructor(
    private userService: UserService,
    private Router: Router,
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });


 
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password }:string|undefined|null|any = this.loginForm.value;
      this.userService.login(email, password).subscribe({
        next: (res:any) => {
          this.userService.saveToken(res.token);
          this.datiUtente=this.userService.decodeJWTPayload(res.token.codRuolo)
          console.log(this.datiUtente)
          console.log('Login riuscito!');
          this.Router.navigate(["dashboard"]);
          alert("Login riuscito!")
        },
        error: () => {
          this.errorMsg = 'Credenziali non valide';
          alert(this.errorMsg);
        }
      });
    }
  }
}
