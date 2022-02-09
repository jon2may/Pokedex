import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { MyPokemonsPageComponent } from './pages/my-pokemons-page/my-pokemons-page.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexPageComponent,
    MyPokemonsPageComponent,
    PokemonComponent,
    PokemonsListComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
