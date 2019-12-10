import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const loginApiUrl='http://127.0.0.1:8000/api-token-auth/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:string

  constructor(private httpClient:HttpClient) { }

  loginToApp(user:string,password:string){
    let request={"username":user,"password":password}
    console.log(request)
    return this.httpClient.post(loginApiUrl,request)

  }
}
