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
  
    nome: new FormControl(''),
    cognome: new FormControl(''),
    data_nascita: new FormControl(''),
    luogo_nascita: new FormControl(''),
    nazionalita: new FormControl(''),
    codice_disciplina : new FormControl(),
    codice_grado : new FormControl(),
    numero_cellulare: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {

    // if (this.registerForm.valid) {
          console.log(this.codice_ruolo)
      const { nome,cognome,data_nascita,luogo_nascita,nazionalita, codice_disciplina,codice_grado,numero_cellulare,mail,password }:string|undefined|null|any = this.registerForm.value;
      this.userService.register(nome,cognome,data_nascita,luogo_nascita,nazionalita, codice_disciplina,codice_grado,numero_cellulare,this.codice_ruolo,mail,password).subscribe({
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
