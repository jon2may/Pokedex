import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  pokemons: any[] = [];
  isLoading = true;

  constructor(private pokedexService: PokedexService) {
    this.fetchAllPokemons();
  }

  async fetchAllPokemons() {
    this.pokedexService
      .fetchPokemonList()
      .pipe(delay(3000))
      .subscribe((pokemons) => {
        this.isLoading = false;
        this.pokemons = pokemons;

        for (let i = 0; i < this.pokemons.length; i++) {
          this.pokedexService
            .getPokemonData(this.pokemons[i])
            .pipe(delay(3000))
            .subscribe((details) => {
              this.pokemons[i] = { ...this.pokemons[i], details };
              console.log(details);
            });
        }
      });
  }
}
