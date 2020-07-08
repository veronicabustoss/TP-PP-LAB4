import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent implements OnInit {

  public estaLogeado = false;
  nombre ;
  user : any;
  public user$ : Observable<any> = this.authS.AFauth.user;
  mostrarListado = true;

  
  listado = [];
  listadoEncontrado = [];

  datosPersonaje : any;

  nombrePersonaje ;

  mostrarAlerta = false;

  constructor(
    private http: HttpService,
    private authS : AuthService,
    private firestore: AngularFirestore,
    private router : Router
    ) { }

  async ngOnInit() {

      for(let i = 1; i < 10; i ++)
      {
        this.http.get(i.toString())
        .subscribe((data: any) => {
        data.results.forEach(dato => {
            this.listado.push(dato);
          });
  
        }, error => {
            console.log(error);
        });
      }

      const user = await this.authS.getCurrentUser();
      this.user = user
      if(this.user)
      { 
        this.nombre = this.user.email;
        this.estaLogeado = true;
      }

      let ls = localStorage.getItem('favoritos');
      
      let jsonLs = JSON.parse(ls);

      if(ls != null)
      {
          if(jsonLs.length == 0)
          {
            localStorage.removeItem('favoritos');
          }
      }
   

  }

  ordenarListaAsd()
  {
    this.listado.sort((a,b) => a.name.localeCompare(b.name));
  }
  ordenarListaDes()
  {
    this.listado.sort((a,b) => b.name.localeCompare(a.name));
  }

  buscarPersonaje(nombrePersonaje)
  {
    console.log(nombrePersonaje);
    const resultado = this.listado.filter(dato => dato.name == nombrePersonaje
      );

    
    this.listadoEncontrado = resultado;
  }

  detallePersonaje(personaje)
  {
    this.datosPersonaje = personaje;
    this.mostrarListado = false;
  }


  funCambiar(event)
  {
    this.mostrarListado = event;
  
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
