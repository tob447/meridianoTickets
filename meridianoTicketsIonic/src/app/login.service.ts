import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HTTP} from '@ionic-native/http/ngx'
import {Platform} from '@ionic/angular'

const loginApiUrl='http://192.168.1.170:8000/api-token-auth/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:string

  constructor(private httpClient:HttpClient,private http:HTTP,private platform:Platform) { }

  loginToApp(user:string,password:string){
    let request={"username":user,"password":password}

    return this.http.post(loginApiUrl,request,{})



  }
  loginToAppWeb(user:string,password:string){

    let request={"username":user,"password":password}
    return this.httpClient.post(loginApiUrl,request)

  }
}
