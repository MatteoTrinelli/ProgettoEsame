import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scelta-user',
  imports: [],
  templateUrl: './scelta-user.component.html',
  styleUrl: './scelta-user.component.css'
})
export class SceltaUserComponent {
  @Output() sceltaEvent = new EventEmitter<boolean>();

  sceltaTipo() {
    this.sceltaEvent.emit(true);
  }
}
