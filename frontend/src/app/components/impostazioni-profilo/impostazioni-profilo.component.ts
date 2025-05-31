import { Component } from '@angular/core';
import { UserService } from '../../services/auth/user.service';

@Component({
  selector: 'app-impostazioni-profilo',
  imports: [],
  templateUrl: './impostazioni-profilo.component.html',
  styleUrl: './impostazioni-profilo.component.css'
})
export class ImpostazioniProfiloComponent {
  constructor(private userService:UserService){}
 
  logout(){
    this.userService.logout();
    alert("Logout esegiutio correttamente")
  }
}
