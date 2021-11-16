import { Component, ElementRef, OnInit } from '@angular/core';
import { ComputadorService } from '../computador.service';
import {Router} from "@angular/router"
import { Computador } from '../computador.model';

@Component({
  selector: 'app-computador-create',
  templateUrl: './computador-create.component.html',
  styleUrls: ['./computador-create.component.scss']
})
export class ComputadorCreateComponent implements OnInit {

  
  computador:Computador ={
    marca:"",
    modelo:"",
    placaMae:"",
    memoria:"",
    hd:"",
    marcaHd:"",
    velocidadeProcessador:"",
    imagem:''
  };
  constructor(private computadorService: ComputadorService, private router:Router) { }

  ngOnInit(): void {
    
  }

  voltar():void{
    this.router.navigate(['computadores']);
  }

  onChange():void{
    console.log(document.getElementById('imagem'));
  }

  encodeImageFileAsURL(element:ElementRef):void {
    var file = element;
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    //reader.readAsDataURL(file);
  }

  criar(msg:string):void{
    
    
    this.computador.imagem = this.computador.imagem.replace('C:\\fakepath\\','');
    this.computadorService.create(this.computador).subscribe(()=>{
      this.computadorService.mostrarMensagem(msg);
      this.router.navigate(['computadores']);
    });
  }

}
