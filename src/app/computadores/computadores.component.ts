import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.scss']
})
export class ComputadoresComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegaCreate():void{
    this.router.navigate(['computadores/create']);
  }
  navegaMostrar():void{
    this.router.navigate(['computadores/mostrar']);
  }
  navegaMostrarUm():void{
    this.router.navigate(['computadores/mostrarum']);
  }
  

}
