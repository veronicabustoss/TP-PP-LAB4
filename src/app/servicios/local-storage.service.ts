import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( private lsService : LocalStorageService) { }

  agregarFavorito(personaje)
  {
    
    let lista = [];

    let auxLocal = localStorage.getItem('favoritos');
    
    if(auxLocal != null)
    {
      let jsonAuxLocal = JSON.parse(auxLocal);
      jsonAuxLocal.forEach(element => {
        
        if(element.id == personaje.id)
        {
          alert("No se puede volver a agregar el mismo personaje");
        }
        else
        {
          jsonAuxLocal.push(personaje);
          console.log(element);
          localStorage.setItem('favoritos',JSON.stringify(jsonAuxLocal));
        }

      });
    }
    else
    {
      lista.push(personaje);
      localStorage.setItem('favoritos',JSON.stringify(lista));
    }
    
  }


}
