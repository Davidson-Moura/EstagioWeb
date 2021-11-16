import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import {Computador} from "./computador.model"

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  baseUrl = "http://localhost:3000/computadores";

  c:Computador={
    marca:"",
    modelo:"",
    placaMae:"",
    memoria:"",
    hd:"",
    marcaHd:"",
    velocidadeProcessador:"",
    imagem:''
  };

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  mostrarMensagem(msg:string):void{
    this.snackBar.open(msg,'X',{ duration:3000, horizontalPosition:'right', verticalPosition:"top"});
  }

  create(computador: Computador): Observable<Computador>{

    return this.http.post<Computador>(this.baseUrl, computador);
    
  }

  mostrarComputadores(): Observable<Computador[]>{
    return this.http.get<Computador[]>(this.baseUrl);
  }


  modificar(computador: Computador, id:any): Observable<Computador>{

    return this.http.put<Computador>(this.baseUrl+'/'+id, computador);
    
  }
  excluir(id:any):Observable<Computador> {
    return this.http.delete<Computador>(this.baseUrl+'/'+id);
  }
}
