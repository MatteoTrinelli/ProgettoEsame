import { Component } from '@angular/core';
import { ProfiloComponent } from '../../components/profilo/profilo.component';
import { PalestraProfiloComponent } from '../../components/palestra-profilo/palestra-profilo.component';
import { ImpostazioniComponent } from '../../components/impostazioni/impostazioni.component';
@Component({
  selector: 'app-dashboard',
  imports: [ProfiloComponent, PalestraProfiloComponent, ImpostazioniComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
