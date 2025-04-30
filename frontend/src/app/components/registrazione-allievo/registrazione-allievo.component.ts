import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione-allievo',
  imports: [ReactiveFormsModule],
  templateUrl: './registrazione-allievo.component.html',
  styleUrl: './registrazione-allievo.component.css'
})
export class RegistrazioneAllievoComponent {


  registerForm = new FormGroup({
    nome: new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    cognome: new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    dob: new FormControl('',[Validators.required]),
    nazionalità: new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    luogoNascita: new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    disciplinaPrinciplae : new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    gradoDisciplinaPrincipale : new FormControl('abc',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]), 
  });
}
