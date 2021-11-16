import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Computador } from '../computador.model';
import { ComputadorService } from '../computador.service';


@Component({
  selector: 'app-computador-editar',
  templateUrl: './computador-editar.component.html',
  styleUrls: ['./computador-editar.component.scss']
})
export class ComputadorEditarComponent implements OnInit {

  id:any;

  comp: Computador = {
    marca:"",
    modelo:"",
    placaMae:"",
    memoria:"",
    hd:"",
    marcaHd:"",
    velocidadeProcessador:"",
    imagem:''
  };

  constructor(private servico:ComputadorService, private route:ActivatedRoute,private rout: Router) { 
    this.id=this.route.snapshot.paramMap.get('id');
    this.servico.mostrarComputadores().subscribe(r=>{
      r.forEach(
        element => {
          if(element.id==this.id){
            this.comp=element;
          }
        });
        
    });
  }

  ngOnInit(): void {
    
  }

  voltar():void{
    
    this.rout.navigate(['computadores/mostrar']);
  }

  modificar():void{
    this.comp.imagem = this.comp.imagem.replace('C:\\fakepath\\','');
    this.servico.modificar(this.comp,this.id).subscribe(()=>{
      this.servico.mostrarMensagem('Modificado com Sucesso!');
      this.rout.navigate(['computadores']);
    });
  }

  excluir(t:string):void{
    this.servico.excluir(this.id).subscribe(()=>{
      this.servico.mostrarMensagem('Excluido com Sucesso!');
      this.rout.navigate(['computadores']);
    });
  }

}
