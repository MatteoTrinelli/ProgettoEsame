import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { UserService } from '../../services/auth/user.service';

@Component({
  selector: 'app-profilo',
  imports: [],
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.css'
})
export class ProfiloComponent {
  constructor(private profileService:ProfileService,private userService:UserService){}
  nome:string="";
  cognome:string="";
  email:string="";
  token: string | null="";
  decodedToken:any=null;
  disciplina:string="";
  grado:string="";
  citta:string="";

    ngOnInit(){
        
      this.token=this.userService.getToken();
      this.decodedToken=this.userService.decodeToken(this.token)
      console.log(this.decodedToken)

      this.profileService.getDisciplinaUtente(this.decodedToken.codDisciplina.toString()).subscribe({
  next: (res) => {
    this.disciplina = res.disciplina;
  },
  error: (err) => {
    console.error('Errore nel recupero della disciplina:', err);
  }
});

      this.profileService.getGradoUtente(this.decodedToken.codDisciplina).subscribe({
  next: (res) => {
    this.grado = res.grado;
  },
  error: (err) => {
    console.error('Errore nel recupero della disciplina:', err);
  }
});

      if (this.token!=null)
      {

        this.cognome=this.decodedToken.cognome;
        this.nome=this.decodedToken.nome
        this.email=this.decodedToken.email;
        this.citta=this.decodedToken.citta
      }
    
      
    }

 
}
