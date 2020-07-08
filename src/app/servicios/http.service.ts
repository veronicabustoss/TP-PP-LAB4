import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(numero : string) {

      return this.http.get<Array<any>>('https://rickandmortyapi.com/api/character/?page='+ numero);
  }

  public getCharacter(nombre : string) {

    return this.http.get<Array<any>>('https://rickandmortyapi.com/api/character/?name'+ nombre);
  }

  public getAllEpisodes(numero : string) {

    return this.http.get<Array<any>>('https://rickandmortyapi.com/api/episode?page='+ numero);
  }


  
}
