
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../modelo/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private url:string = 'http://localhost:8080/veiculos'; 

  constructor(private http: HttpClient) { }

  selecionar():Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(this.url);
  }
cadastrar(obj: Veiculo):Observable<Veiculo>{
  return this.http.post<Veiculo>(this.url, obj);
}


editar(obj: Veiculo):Observable<Veiculo>{
  return this.http.put<Veiculo>(this.url, obj);
}

remover(id:number):Observable<void>{
  return this.http.delete<void>(this.url + '/' + id) 
}
  
}
