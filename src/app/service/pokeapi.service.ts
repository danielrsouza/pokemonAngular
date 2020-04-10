import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokelistresponse } from '../views/list/pokeListResponse'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = 'http://dev.treinaweb.com.br/pokeapi/'
  public pokeList = []

  constructor(private http: HttpClient) {}

  listAll()
  {
    this.http.get<Pokelistresponse>(`${this.url}/pokedex/1`)
             .subscribe(
                response => {
                  response.pokemon.forEach(pokemon => {pokemon.number = this.getNumberForUrl(pokemon.resource_uri)})
                  this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon => pokemon.number < 1000);
                })
  }

   getNumberForUrl(url)
  {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

   sortPokemon(pokemonList)
  {
    return pokemonList.sort((a,b) => {return (a.number > b.number ? 1 : -1)})
  }
}
