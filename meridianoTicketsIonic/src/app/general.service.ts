import { Injectable } from '@angular/core';
import {Ticket} from './ticket'
import {HttpClient} from '@angular/common/http'
import {LoginService} from './login.service'
import {HttpHeaders} from '@angular/common/http'

const ticketsUrl='http://127.0.0.1:8000/api/ticket/'


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  token:string
  constructor(private httpClient:HttpClient,private loginService:LoginService) { }

  getTickets(){
    console.log("entro al general service")
    console.log(this.loginService.token)
    const httpOptions ={
      headers:new HttpHeaders({
        'Authentication':'Token '.concat(this.loginService.token)
      })
    }

    return this.httpClient.get(ticketsUrl,httpOptions) 
  }
}
