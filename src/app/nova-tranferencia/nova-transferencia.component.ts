import { Transferencia } from 'src/models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor:number;
  destino:number;

  constructor(private service: TransferenciaService, private router:Router){

  }

  transferir(){
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor:this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
    (resultado) => {
      console.log(resultado);
      // this.router.navigate(['extrato']);
      this.router.navigateByUrl('extrato');
    },
    (error)=> console.error(error)
    );



  }
}
