import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiloComponent } from '../../components/profilo/profilo.component';
import { PalestraProfiloComponent } from '../../components/palestra-profilo/palestra-profilo.component';
import { ImpostazioniProfiloComponent } from '../../components/impostazioni-profilo/impostazioni-profilo.component';
import { UserService } from '../../services/auth/user.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ProfiloComponent,
    PalestraProfiloComponent,
    ImpostazioniProfiloComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
 
  constructor(private userService:UserService){}
 
   nome:string="";
  cognome:string="";
  token: string | null="";
  decodedToken:any=null;

    ngOnInit(){
      this.token=this.userService.getToken();
      this.decodedToken=this.userService.decodeToken(this.token)
      console.log(this.token)
      if (this.token!=null)
      {
        this.cognome=this.decodedToken.cognome;
        this.nome=this.decodedToken.nome
      }
    
      
    }
  

  sezioneAttiva = signal<'profilo' | 'palestra' | 'impostazioni'>('profilo');

  mostraSezione(sezione: 'profilo' | 'palestra' | 'impostazioni') {
    this.sezioneAttiva.set(sezione);
  }

  
  
}
