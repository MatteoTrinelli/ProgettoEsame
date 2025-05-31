import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService} from '../../services/auth/user.service';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrazione-maestro',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './registrazione-maestro.component.html',
  styleUrl: './registrazione-maestro.component.css'
})
export class RegistrazioneMaestroComponent {

   constructor(private userService: UserService, private Router: Router) { }
  errorMsg: string = '';
  codice_ruolo: number = 1;
  nazionalita: { id: number; nazionalita: string }[] = [];
  discipline: { id: number; nome: string }[] = [];
  gradi: { id: number; nome: string }[] = [];
  codDisciplina: number = 0;

  registerForm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    mail: new FormControl(''),
    numero_cellulare: new FormControl(''),
    data_nascita: new FormControl(''),
    codNazionalita: new FormControl(''),
    luogo_nascita: new FormControl(''),
    codice_disciplina: new FormControl(''),
    codice_grado: new FormControl(''),
    password: new FormControl('')
  });

 ngOnInit() {
    this.userService.getNationality().subscribe({
      next: (res) => {
        this.nazionalita = res.nazionalita;
        console.log('Nazionalità caricate:', this.nazionalita);
      },
      error: () => {
        this.errorMsg = 'Errore nel caricamento delle nazionalità';
      },
    });

    this.userService.getDisciplina().subscribe({
      next: (res) => {
        this.discipline = res.discipline;
        console.log('Discipline caricate:', this.discipline);
      },
      error: () => {
        this.errorMsg = 'Errore nel caricamento delle nazionalità';
      },
    });

     this.registerForm.get('codice_disciplina')?.valueChanges.subscribe(codDisciplina => {
    console.log('Hai selezionato:', codDisciplina);

    this.userService.getGrado(Number(codDisciplina)).subscribe({
      next: (res) => {
        this.gradi = res.gradi;
        console.log('Gradi caricati:', this.gradi);
      },
      error: () => {
        this.errorMsg = 'Errore nel caricamento dei gradi';
      },
    });
  });
}

  onSubmit() {

    // if (this.registerForm.valid) {
    console.log(this.codice_ruolo)
    const { nome, cognome, data_nascita, luogo_nascita, codNazionalita, codice_disciplina, codice_grado, numero_cellulare, mail, password }:  any = this.registerForm.value;
    console.log(codNazionalita)
    this.userService.register(nome, cognome, data_nascita, luogo_nascita, codNazionalita, codice_disciplina, codice_grado, numero_cellulare, this.codice_ruolo, mail, password).subscribe({
      next: (res: any) => {
        alert('Signin riuscito! Ora verrai portato alla pagina di accesso');
        this.Router.navigate([""]);
      },
      error: () => {
        this.errorMsg = 'Credenziali non valide';
        alert("signin non riuscito, " + this.errorMsg)
      }
    });

  }



}
