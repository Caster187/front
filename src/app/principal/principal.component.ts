import { Component } from '@angular/core';
import { Veiculo } from '../modelo/Veiculo';
import { VeiculoService } from '../servico/veiculo.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {


  veiculo = new Veiculo();
  
  btnCadastro:boolean=true;

  

  veiculos:Veiculo[]=[];

  constructor(private servico:VeiculoService){}

  selecionar(): void{ 
    this.servico.selecionar()
    .subscribe(retorno=>this.veiculos=retorno);

  }

  cadastrar():void{
    this.servico.cadastrar(this.veiculo)
    .subscribe(retorno =>{this.veiculos.push(retorno);});
  }

  selecionarVeiculo(posicao:number):void{
    this.veiculo=this.veiculos[posicao];



  }


  editar():void{
    this.servico.editar(this.veiculo)
    .subscribe(retorno =>{
      let posicao= this.veiculos.findIndex(obj =>{
        return obj.id == retorno.id;
      }); 

      this.veiculos[posicao] = retorno;

      this.btnCadastro=true;

      


    })
  } 



  remover():void{
    this.servico.remover(this.veiculo.id)
    .subscribe(retorno =>{
      let posicao= this.veiculos.findIndex(obj =>{
        return obj.id == this.veicu lo.id;
      }); 

      this.veiculos.splice(posicao, 1);

      this.btnCadastro=true;

      


    })
  }







  ngOnInit(){
    this.selecionar();
  }


}
