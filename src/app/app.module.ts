import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

import {AngularFirestore} from "@angular/fire/firestore";

import {AngularFireStorageModule} from "@angular/fire/storage";

import { MenuComponent } from './componente/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistrarseComponent } from './paginas/registrarse/registrarse.component';
import { ErrorComponent } from './paginas/error/error.component';
import { HomeComponent } from './paginas/home/home.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { ListadoPersonajesComponent } from './paginas/listado-personajes/listado-personajes.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { InfoPersonalComponent } from './paginas/info-personal/info-personal.component';

import { JwtModule } from "@auth0/angular-jwt";
import { ListadoEpisodiosComponent } from './paginas/listado-episodios/listado-episodios.component';
import { DetalleEpisodioComponent } from './paginas/detalle-episodio/detalle-episodio.component';
import { FavoritosEpisodiosComponent } from './componentes/favoritos-episodios/favoritos-episodios.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistrarseComponent,
    ErrorComponent,
    HomeComponent,
    FavoritosComponent,
    ListadoPersonajesComponent,
    DetalleComponent,
    InfoPersonalComponent,
    ListadoEpisodiosComponent,
    DetalleEpisodioComponent,
    FavoritosEpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
