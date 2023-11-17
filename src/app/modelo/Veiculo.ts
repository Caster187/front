export class Veiculo {
    id: number = 0;
    modelo: string = '';
    marca: string = '';
    cor: string = '';
    anoFabricacao: number = 0;
    placa: string = '';
    reservado: boolean = false;
  
    possuiReserva(): boolean {
      return this.reservado;
    }
  }
  