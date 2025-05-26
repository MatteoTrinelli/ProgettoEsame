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
  nome: new FormControl(''),
  cognome: new FormControl(''),
  mail: new FormControl(''),
  numero_cellulare: new FormControl(''),
  data_nascita: new FormControl(''),
  nazionalita: new FormControl(''),
  luogo_nascita: new FormControl(''),
  codice_disciplina: new FormControl(''),
  codice_grado: new FormControl(''),
  password: new FormControl('')
});

}
