import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import {AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public estaLogeado = false;
  nombre ;
  user : any;
  public user$ : Observable<any> = this.authS.AFauth.user;

  constructor(private authS : AuthService,
    private firestore: AngularFirestore,
    private router : Router) { }

  async ngOnInit() {
    const user = await this.authS.getCurrentUser();
    this.user = user
    if(this.user)
    { 
      this.nombre = this.user.email;
      this.estaLogeado = true;
    }
  }

  deslogearse()
  {
    this.authS.logout();
    this.estaLogeado = false;
    localStorage.removeItem('token');
    localStorage.removeItem('favoritos');
    localStorage.removeItem('favoritosEpisodios');
  }
  


}
