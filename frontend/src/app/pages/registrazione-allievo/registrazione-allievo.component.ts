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

  constructor(private userService: UserService, private Router: Router) { }
  errorMsg: string = '';
  codice_ruolo: number = 2;
  nazionalita: { id: number; nazionalita: string }[] = [];
  discipline: { id: number; nome: string }[] = [];
  gradi: { id: number; nome: string }[] = [];
  codDisciplina:number=0;

  registerForm = new FormGroup({

    nome: new FormControl(''),
    cognome: new FormControl(''),
    data_nascita: new FormControl(''),
    luogo_nascita: new FormControl(''),
    codNazionalita: new FormControl(''),
    codice_disciplina: new FormControl(),
    codice_grado: new FormControl(),
    numero_cellulare: new FormControl(''),
    mail: new FormControl(''),
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

    this.userService.getGrado(codDisciplina).subscribe({
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
// onChangeDisciplina(){
//   const codDisciplina=this.registerForm.value.codice_disciplina;
//   console.log(codDisciplina)
//       this.userService.getGrado(codDisciplina).subscribe({
//       next: (res) => {
//         this.discipline = res.discipline;
//         console.log('Discipline caricate:', this.discipline);
//       },
//       error: () => {
//         this.errorMsg = 'Errore nel caricamento delle nazionalità';
//       },
//     });
//}

  onSubmit() {

    // if (this.registerForm.valid) {
    console.log(this.codice_ruolo)
    const { nome, cognome, data_nascita, luogo_nascita, codNazionalita, codice_disciplina, codice_grado, numero_cellulare, mail, password }:  any = this.registerForm.value;
    console.log(codNazionalita)
    this.userService.register(nome, cognome, data_nascita, luogo_nascita, codNazionalita, codice_disciplina, codice_grado, numero_cellulare, this.codice_ruolo, mail, password).subscribe({
      next: (res: any) => {
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
