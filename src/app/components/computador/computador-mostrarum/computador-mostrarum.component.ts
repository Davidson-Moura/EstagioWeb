import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComputadorService } from '../computador.service';

@Component({
  selector: 'app-computador-mostrarum',
  templateUrl: './computador-mostrarum.component.html',
  styleUrls: ['./computador-mostrarum.component.scss']
})
export class ComputadorMostrarumComponent implements OnInit {
  pesquisar:string='';
  constructor(private router:Router, private servico:ComputadorService) { }

  ngOnInit(): void {
  }
  voltar():void{
    this.router.navigate(['computadores']);
  }
  pesquisar1():void{
    this.router.navigate([`computadores/pesquisar`,this.pesquisar]);
  }
}
