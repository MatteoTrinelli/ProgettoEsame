import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-allievo',
  imports: [ReactiveFormsModule],
  templateUrl: './registrazione-allievo.component.html',
  styleUrl: './registrazione-allievo.component.css'
})
export class RegistrazioneAllievoComponent {
  constructor(private userService:UserService, private Router:Router){}
  errorMsg:string='';
  codice_ruolo:number=2;

  registerForm = new FormGroup({
  
    nome: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    cognome: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    dob: new FormControl(),
    luogoNascita: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    nazionalità: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    disciplinaPrincipale : new FormControl(),
    gradoDisciplinaPrincipale : new FormControl(),
    cellulare: new FormControl(),
    mail: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')  // almeno una minuscola, una maiuscola e un numero
    ])
  });

  onSubmit() {
    if (this.registerForm.valid) {
      const { nome,cognome,dataNascita,luogoNascita,nazionalità, disciplinaPrinciplae,gradoDisciplinaPrincipale,cellulare,mail,password }:string|undefined|null|any = this.registerForm.value;
      this.userService.register(nome,cognome,dataNascita,luogoNascita,nazionalità, disciplinaPrinciplae,gradoDisciplinaPrincipale,cellulare,this.codice_ruolo,mail,password).subscribe({
        next: (res:any) => {
          console.log('Signin riuscito!');
          this.Router.navigate(["conferma"]);
        },
        error: () => {
          this.errorMsg = 'Credenziali non valide';
        }
      });
    }
  }
}
