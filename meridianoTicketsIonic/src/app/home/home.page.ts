import { Component } from '@angular/core';
import {TICKETS} from '../mock-tiquets'
import {Ticket} from '../ticket'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ticket=TICKETS;
  selectedTicket:Ticket;
  listaCausas=['daño molde','falla en las piezas']
  listaSoluciones=['reparacion molde','reinicio maquina','otra']
  seleccionCausa: string
  seleccionSolucion:string
  constructor() {}
  onSelect(ticket:Ticket):void{
    this.selectedTicket=ticket;
    console.log(this.selectedTicket)

  }
  causaSelect(){
    console.log(this.seleccionCausa)
  }
  solucionSelect(){

  }

}

