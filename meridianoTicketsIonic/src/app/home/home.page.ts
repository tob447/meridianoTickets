import { Component } from '@angular/core';
import {Ticket} from '../ticket'
import {GeneralService} from '../general.service'
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ticket:any;
  selectedTicket:Ticket;
  listaCausas=['daño molde','falla en las piezas']
  listaSoluciones=['reparacion molde','reinicio maquina','otra']
  seleccionCausa: string
  seleccionSolucion:string
  constructor(private generalService:GeneralService) {}

  ngOnInit(){
    console.log('Entro al init')
    this.ticket=this.generalService.getTickets().subscribe(data=>{
      this.ticket=data
    })

  }



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

