import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  @Input('personaje') personaje : any;
  @Input('auxProducto') auxProducto : any;
  @Output() cambio = new EventEmitter();

  public estaLogeado = false;
  nombre ;
  user : any;
  public user$ : Observable<any> = this.authS.AFauth.user;

    mostrarAlerta = false;

  constructor(    private http: HttpService,
    private authS : AuthService,
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

 cambiar()
  {
    this.cambio.emit(true);
  }

  agregarFavorito(personaje)
  {
    let lista = [];
    let bandera = 'noSeRepite';
    let auxLocal = localStorage.getItem('favoritos');
    
    if(auxLocal != null)
    {
      let jsonAuxLocal = JSON.parse(auxLocal);
      jsonAuxLocal.forEach(element => {
        
        if(element.id == personaje.id)
        {
          this.mostrarAlerta = true;
          setTimeout(() => {
            this.mostrarAlerta = false;
          }, 2000);
          bandera = 'seRepite';
        }

      });

      if(bandera != 'seRepite')
      {
        console.log('La verdad se va a agregar un personaje');
        jsonAuxLocal.push(personaje);
        localStorage.setItem('favoritos',JSON.stringify(jsonAuxLocal));

      }
    }
    else
    {
      lista.push(personaje);
      localStorage.setItem('favoritos',JSON.stringify(lista));
    }
  }


}
