import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokemons: any;

  constructor() {}

  async fetchAllPokemons() {
    try {
      this.pokemons = await this.fetchPokemonList();
    } catch (error) {
      console.error(error);
    }
    console.log('ici');
  }

  fetchPokemonList(): Promise<any> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          return result.results;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
