import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  @Input() pokemon: any | undefined;
}
