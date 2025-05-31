import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './../../../../../NON_COMMIT';
import { UserService } from '../auth/user.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private userService:UserService) { }
   apiUrl:string =API_URL
  

  getDisciplinaUtente(codDisciplina:string | null){
     const token=this.userService.getToken()
      
     const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

        return this.http.get<any>(`${this.apiUrl}api/getDisciplinaUtente?codDisciplina=${codDisciplina}`,{headers});

  }

    getGradoUtente(codGrado:number){
       const token=this.userService.getToken()

         const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
        return this.http.get<any>(`${this.apiUrl}api/getGradoUtente?codGrado=${codGrado}`,{headers});
  }
}
