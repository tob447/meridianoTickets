import { Component } from '@angular/core';
import {Ticket} from '../ticket'
import {GeneralService} from '../general.service'
import {Codigo} from '../ticket'
import {interval} from 'rxjs'
import {Platform} from '@ionic/angular'
import { NavController } from '@ionic/angular';


import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'

const {PushNotifications}= Plugins



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ticket:Ticket[];
  selectedTicket:any
  listaCausas:Codigo[]
  seleccionCausa: string
  seleccionSolucion:string
  isHidden=true

  constructor(
    private generalService:GeneralService,
    private platform:Platform,
    private navCtrl:NavController
    ) {}

 ngOnInit(){
    console.log('Entro al init')
    this.generalService.getTickets().subscribe(data=>{
      this.ticket=data 
    })
    interval(60000).subscribe(x=>{
      this.generalService.getTickets().subscribe(data=>{
        this.ticket=data 
      })
    })
    
    PushNotifications.register()

    PushNotifications.addListener('registration',
    (token:PushNotificationToken)=>{
      alert('Push registration success, token: '+token.value)
    })

    PushNotifications.addListener('registrationError',
    (error:any)=> {
      alert('Error on registration: '+JSON.stringify(error))
    })

    PushNotifications.addListener('pushNotificationReceived',
    (notification:PushNotification)=> {
      alert('Push recieved: '+ JSON.stringify(notification))
    })

    PushNotifications.addListener('pushNotificationActionPerformed',
    (notification:PushNotificationActionPerformed)=>{
      alert('Push action performed: ')+JSON.stringify(notification)

    })
    


  }
  causaSelect(){
    console.log(this.seleccionCausa)
  }


  onSelect(ticket:Ticket):void{
    this.selectedTicket=ticket;
    console.log(this.selectedTicket)
    this.generalService.getCodigosParos().subscribe(data=>{
      this.listaCausas=data
    })
    this.isHidden=false

  }
  cerrarTicket(){
    console.log(this.seleccionCausa)
    console.log(this.seleccionSolucion)
    console.log(this.selectedTicket.id)

    let ticketId=(this.selectedTicket.id).toString()
    let idCodigo=parseInt(this.seleccionCausa)
    let solucion=this.seleccionSolucion

    this.generalService.closeTicket(ticketId,idCodigo,solucion).subscribe(data=>{
      console.log(data)
    })
    this.selectedTicket.estaCerrado=true
    this.isHidden=true
  }

  logOut(){
    this.navCtrl.navigateForward('/login')
  }

}

