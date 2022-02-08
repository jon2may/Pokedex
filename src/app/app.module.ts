import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { MyPokemonsPageComponent } from './pages/my-pokemons-page/my-pokemons-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexPageComponent,
    MyPokemonsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
