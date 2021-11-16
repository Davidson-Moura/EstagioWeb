import { Attribute } from '@angular/compiler';
import { TextAttribute, Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Computador } from '../computador.model';
import { ComputadorService } from '../computador.service';

@Component({
  selector: 'app-computador-mostrar',
  templateUrl: './computador-mostrar.component.html',
  styleUrls: ['./computador-mostrar.component.scss']
})
export class ComputadorMostrarComponent implements OnInit {

  comps:Computador[] | undefined;

  constructor(private router:Router, private servico:ComputadorService) { }

  ngOnInit(): void {
    this.servico.mostrarComputadores().subscribe(comp =>{
      this.comps = comp;
    });
  }

  voltar():void{
    this.router.navigate(['computadores']);
  }

  editar(a:any):void{
    this.router.navigate([`computadores/editar`, a]);
  }
  
  
}
