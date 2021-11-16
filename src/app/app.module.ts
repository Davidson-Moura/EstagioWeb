import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {HttpClientModule} from "@angular/common/http"

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { ComputadorCreateComponent } from './components/computador/computador-create/computador-create.component';

import { FormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input";
import { ComputadorMostrarComponent } from './components/computador/computador-mostrar/computador-mostrar.component';
import { ComputadorEditarComponent } from './components/computador/computador-editar/computador-editar.component';
import { ComputadorMostrarumComponent } from './components/computador/computador-mostrarum/computador-mostrarum.component';
import { ComputadorPesquisarComponent } from './components/computador/computador-pesquisar/computador-pesquisar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ComputadoresComponent,
    ComputadorCreateComponent,
    ComputadorMostrarComponent,
    ComputadorEditarComponent,
    ComputadorMostrarumComponent,
    ComputadorPesquisarComponent,
    
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
