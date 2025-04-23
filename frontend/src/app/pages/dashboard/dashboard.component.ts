import { Component } from '@angular/core';
import { ProfiloComponent } from '../../components/profilo/profilo.component';
import { PalestraProfiloComponent } from '../../components/palestra-profilo/palestra-profilo.component';
import { ImpostazioniProfiloComponent } from "../../components/impostazioni-profilo/impostazioni-profilo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ProfiloComponent, PalestraProfiloComponent, ImpostazioniProfiloComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sezioneAttiva: 'profilo' | 'palestra' | 'impostazioni' = 'profilo';

  mostraSezione(sezione: 'profilo' | 'palestra' | 'impostazioni') {
    this.sezioneAttiva = sezione;
  }
}

