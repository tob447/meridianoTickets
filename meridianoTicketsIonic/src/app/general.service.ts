import { Injectable } from '@angular/core';
import {Ticket} from './ticket'
import {HttpClient} from '@angular/common/http'
import {LoginService} from './login.service'
import {HttpHeaders} from '@angular/common/http'
import {Codigo} from './ticket'

const ticketsUrl='http://192.168.1.189:8000/api/ticket/'
const codigosUrl='http://192.168.1.189:8000/api/codigosparos/'


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  token:string
  constructor(private httpClient:HttpClient,private loginService:LoginService) { }

  getTickets(){
    console.log("entro al general service")
    console.log(this.loginService.token)
    return this.httpClient.get<Ticket[]>(ticketsUrl,{
      headers:{'Authorization':'Token '.concat(this.loginService.token)}
    }) 
  }

  getCodigosParos(){
    return this.httpClient.get<Codigo[]>(codigosUrl,{
      headers:{'Authorization':'Token '.concat(this.loginService.token)}
    })
  }

  closeTicket(id:string,causaId:any,solucion:string){

    let request={"id":id,"causa":causaId,"solucion":solucion}
    return this.httpClient.put(ticketsUrl,request,{

      headers:{'Authorization':'Token '.concat(this.loginService.token)}
    }) 
  }
}
