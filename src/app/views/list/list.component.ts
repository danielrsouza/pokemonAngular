import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  public paginaAtual:number = 1;
  public nameFilter:string = '';
  public selectedPkm = null;

  constructor(private pokeapi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectPokemon(pkm)
  {
    this.selectedPkm = pkm
  }

  get pkmSprite()
  {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }

  get pokemonList():Array<any>
  {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.indexOf(this.nameFilter) !== -1;
    })
  }



}
