import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Computador } from '../computador.model';
import { ComputadorService } from '../computador.service';

@Component({
  selector: 'app-computador-pesquisar',
  templateUrl: './computador-pesquisar.component.html',
  styleUrls: ['./computador-pesquisar.component.scss']
})
export class ComputadorPesquisarComponent implements OnInit {

  pesquisa:string|any ='';

  comps:Computador[]=[];

  constructor(private route:ActivatedRoute, private servico:ComputadorService, private router:Router) { }

  ngOnInit(): void {
    this.pesquisa =this.route.snapshot.paramMap.get('pesquisa');
    this.servico.mostrarComputadores().subscribe(r=>{
      r.forEach(
        element => {
          if((element.id!=null && element.id.indexOf(this.pesquisa)>-1 ) || element.marca.indexOf(this.pesquisa)>-1 || element.modelo.indexOf(this.pesquisa)>-1 || element.placaMae.indexOf(this.pesquisa)>-1 || element.memoria.indexOf(this.pesquisa)>-1 || element.hd.indexOf(this.pesquisa)>-1 || element.marcaHd.indexOf(this.pesquisa)>-1 || element.velocidadeProcessador.indexOf(this.pesquisa)>-1 || element.imagem.indexOf(this.pesquisa)>-1 ){
            this.comps.push(element);
          }
        });      
    });
  }

  voltar():void{
    this.router.navigate(['computadores/mostrarum']);
  }
  
  editar(a:any):void{
    this.router.navigate([`computadores/editar`, a]);
  }

}
