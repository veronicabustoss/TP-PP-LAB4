import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos-episodios',
  templateUrl: './favoritos-episodios.component.html',
  styleUrls: ['./favoritos-episodios.component.css']
})
export class FavoritosEpisodiosComponent implements OnInit {


  listaFavoritosEpisodios = [];

  constructor() { }

  ngOnInit(): void {
    let auxListaEp = localStorage.getItem('favoritosEpisodios');
    this.listaFavoritosEpisodios = JSON.parse(auxListaEp);
  }

  
  borrarFavorito(personaje)
  {
      let auxLista = localStorage.getItem('favoritosEpisodios');
    let jsonLista = JSON.parse(auxLista);

    jsonLista.forEach(element => {

      if(element.id == personaje.id)
      {
        let indice = this.listaFavoritosEpisodios.indexOf(personaje)
        this.listaFavoritosEpisodios.splice(indice,1);
        localStorage.setItem('favoritosEpisodios',JSON.stringify(this.listaFavoritosEpisodios));
      }

    });

    

  }


}
