import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokemons: any;
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  private nextPokemonsUrl: string | undefined;

  constructor(private httpClient: HttpClient) {}

  /*
  async fetchAllPokemons() {
    try {
      this.pokemons = await this.fetchPokemonList();
    } catch (error) {
      console.error(error);
    }
    console.log('ici');
  }
  */

  getPokemonData(pokemon: any) {
    return this.httpClient.get(pokemon.url).pipe(
      catchError((error) => {
        console.error(error);
        return of({});
      })
    );
  }

  fetchPokemonListOLD(): Promise<any> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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

  fetchPokemonList(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
      tap((response: any) => (this.nextPokemonsUrl = response.next)),
      map((response) => response.results)
    );
  }
}
