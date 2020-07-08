import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { ListadoPersonajesComponent } from './paginas/listado-personajes/listado-personajes.component';
import { RegistrarseComponent } from './paginas/registrarse/registrarse.component';
import { InfoPersonalComponent } from './paginas/info-personal/info-personal.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { ErrorComponent } from './paginas/error/error.component';
import { LogeoGuard } from './guards/logeo.guard';
import { DeslogeoGuard } from './guards/deslogeo.guard';
import { ListadoEpisodiosComponent } from './paginas/listado-episodios/listado-episodios.component';
import { FavoritosEpisodiosComponent } from './componentes/favoritos-episodios/favoritos-episodios.component';


const routes: Routes = [
  { 
    path:'' , 
    component : HomeComponent
  },
  { 
    path:'login' , 
    component : LoginComponent,
    canActivate : [DeslogeoGuard],
    children : []
  }, // GUARD -> DESLOGEO
  { 
    path:'listado-personajes' , 
    component : ListadoPersonajesComponent
  },
  { 
    path:'listado-episodios' , 
    component : ListadoEpisodiosComponent
  },
  { 
    path:'registrarse' , 
    component : RegistrarseComponent,
    canActivate : [DeslogeoGuard],
    children : []
  }, // GUARD -> DESLOGEO 
  {
    path:'info-personal' , 
    component : InfoPersonalComponent
  }, 
  {
    path:'favoritos' , 
    component : FavoritosComponent,
    canActivate : [LogeoGuard],
    children : []
  }, // GUARD -> LOGEO
  {
    path:'favoritos-episodios' , 
    component : FavoritosEpisodiosComponent,
    canActivate : [LogeoGuard],
    children : []
  },
  {
    path:'**' , 
    component : ErrorComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
