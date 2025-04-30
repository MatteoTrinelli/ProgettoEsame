import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione-maestro',
  imports: [ReactiveFormsModule],
  templateUrl: './registrazione-maestro.component.html',
  styleUrl: './registrazione-maestro.component.css'
})
export class RegistrazioneMaestroComponent {


  registerForm = new FormGroup({
    nome: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    cognome: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    dob: new FormControl(),
    nazionalità: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    luogoNascita: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    disciplinaPrinciplae : new FormControl(),
    gradoDisciplinaPrincipale : new FormControl(),
  });
}
