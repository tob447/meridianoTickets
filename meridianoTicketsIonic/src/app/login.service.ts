import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const loginApiUrl='http://192.168.5.6:8000/api-token-auth/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  loginToApp(user:string,password:string){
    let request={"username":user,"password":password}
    return this.httpClient.post(loginApiUrl,request)

  }
}
