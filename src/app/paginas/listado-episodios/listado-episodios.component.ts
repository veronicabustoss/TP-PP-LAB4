import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-listado-episodios',
  templateUrl: './listado-episodios.component.html',
  styleUrls: ['./listado-episodios.component.css']
})
export class ListadoEpisodiosComponent implements OnInit {

  public estaLogeado = false;
  nombre ;
  user : any;
  public user$ : Observable<any> = this.authS.AFauth.user;
  mostrarListado = true;

  
  listado = [];
  listadoEncontrado = [];

  datosEpisodio : any;

  nombreEpisodio;

    mostrarAlerta = false;


  constructor(
    private http: HttpService,
    private authS : AuthService,
    private firestore: AngularFirestore,
    private router : Router
    ) { }

  async ngOnInit() {

      for(let i = 1; i < 2; i ++)
      {
        this.http.getAllEpisodes(i.toString())
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

  buscarEpisodio(nombreEpisodio)
  {
    const resultado = this.listado.filter(dato => dato.name == nombreEpisodio);
  
    this.listadoEncontrado = resultado;
  }

  detalleEpisodio(episodio)
  {
    this.datosEpisodio = episodio;
    this.mostrarListado = false;
  }


  funCambiar(event)
  {
    this.mostrarListado = event;
  
  }


  agregarFavorito(episodio)
  {
    let lista = [];
    let bandera = 'noSeRepite';
    let auxLocal = localStorage.getItem('favoritosEpisodios');
    
    if(auxLocal != null)
    {
      let jsonAuxLocal = JSON.parse(auxLocal);
      jsonAuxLocal.forEach(element => {
        
        if(element.id == episodio.id)
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
        jsonAuxLocal.push(episodio);
        localStorage.setItem('favoritosEpisodios',JSON.stringify(jsonAuxLocal));

      }
    }
    else
    {
      lista.push(episodio);
      localStorage.setItem('favoritosEpisodios',JSON.stringify(lista));
    }
  }

}
