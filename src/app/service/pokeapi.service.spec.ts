import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http'

import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(PokeapiService);
  });

  it(`should create`, async(inject([HttpTestingController, PokeapiService],
    (httpClient: HttpTestingController, apiService: PokeapiService) => {
      expect(apiService).toBeTruthy();
  })));

  describe('sort pokemons', () => {
    it ('return sort pokemons', () => {
      let listPokemons = [
        "{Name: 'poke1', Number: 2}",
        "{Name: 'poke2', Number: 4}",
      ];
      
      expect(service.sortPokemon(listPokemons)).toEqual(listPokemons);
    })
  })

  describe('number url', () => {
    it ('return number for url', () => {
      let url:string = 'dev.treinaweb.com.br/pokeapi/pokedex/1'
      expect(service.getNumberForUrl(url) == 1);
    })
  })
  
  

});
