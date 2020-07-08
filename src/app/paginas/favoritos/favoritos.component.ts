import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  listaFavoritos = [];
  listaFavoritosEpisodios = [];
  constructor() { }

  ngOnInit(): void {

    let auxLista = localStorage.getItem('favoritos');
    this.listaFavoritos = JSON.parse(auxLista);

    let auxListaEp = localStorage.getItem('favoritosEpisodios');
    this.listaFavoritosEpisodios = JSON.parse(auxListaEp);

  }

  borrarFavorito(personaje)
  {
      let auxLista = localStorage.getItem('favoritos');
      let jsonLista = JSON.parse(auxLista);
  
      jsonLista.forEach(element => {
  
        if(element.id == personaje.id)
        {
          let indice = this.listaFavoritos.indexOf(personaje)
          this.listaFavoritos.splice(indice,1);
          localStorage.setItem('favoritos',JSON.stringify(this.listaFavoritos));
        }
  
      });
  
  }

}
