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
  codice_ruolo:string='2';

  registerForm = new FormGroup({
  
    nome: new FormControl('a'),
    cognome: new FormControl('a'),
    dob: new FormControl('2025-05-13'),
    luogoNascita: new FormControl('Bra'),
    nazionalita: new FormControl('Italia'),
    disciplinaPrincipale : new FormControl(),
    gradoDisciplina : new FormControl(),
    cellulare: new FormControl('1234567890'),
    mail: new FormControl('a@a.com'),
    password: new FormControl('123')
  });

  onSubmit() {

    // if (this.registerForm.valid) {
          console.log(this.codice_ruolo)
      const { nome,cognome,dob,luogoNascita,nazionalita, disciplinaPrincipale,gradoDisciplina,cellulare,mail,password }:string|undefined|null|any = this.registerForm.value;
      this.userService.register(nome,cognome,dob,luogoNascita,nazionalita, disciplinaPrincipale,gradoDisciplina,cellulare,this.codice_ruolo,mail,password).subscribe({
        next: (res:any) => {
          console.log('Signin riuscito!');
          this.Router.navigate(["conferma"]);
        },
        error: () => {
          this.errorMsg = 'Credenziali non valide';
        }
      });
    }
  // }
}
