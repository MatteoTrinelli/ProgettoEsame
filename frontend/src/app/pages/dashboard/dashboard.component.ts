import { Component } from '@angular/core';
import { ProfiloComponent } from '../../components/profilo/profilo.component';
import { PalestraComponent } from '../../components/palestra/palestra.component';
import { ImpostazioniComponent } from '../../components/impostazioni/impostazioni.component';
@Component({
  selector: 'app-dashboard',
  imports: [ProfiloComponent, PalestraComponent, ImpostazioniComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
