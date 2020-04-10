import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm = null;


  get pokemonList():Array<any>
  {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.indexOf(this.nameFilter) !== -1;
    })
  }


  get pkmSprite()
  {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`
  }

  selectPokemon(pkm)
  {
    this.selectedPkm = pkm
  }

  constructor(private pokeapi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapi.listAll();
  }



}
