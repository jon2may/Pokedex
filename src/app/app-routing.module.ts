import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokemonsPageComponent } from './pages/my-pokemons-page/my-pokemons-page.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'my-pokemons', component: MyPokemonsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
