import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadorCreateComponent } from './components/computador/computador-create/computador-create.component';
import { ComputadorEditarComponent } from './components/computador/computador-editar/computador-editar.component';
import { ComputadorMostrarComponent } from './components/computador/computador-mostrar/computador-mostrar.component';
import { ComputadorMostrarumComponent } from './components/computador/computador-mostrarum/computador-mostrarum.component';
import { ComputadorPesquisarComponent } from './components/computador/computador-pesquisar/computador-pesquisar.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',component: HomeComponent
} , {
  path:'computadores', component:ComputadoresComponent
} ,{
  path:'computadores/create', component:ComputadorCreateComponent
},{
  path:'computadores/mostrar', component:ComputadorMostrarComponent
},{
  path:'computadores/editar/:id', component:ComputadorEditarComponent
},{
  path:'computadores/mostrarum', component:ComputadorMostrarumComponent
},{
  path:'computadores/pesquisar/:pesquisa', component:ComputadorPesquisarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
