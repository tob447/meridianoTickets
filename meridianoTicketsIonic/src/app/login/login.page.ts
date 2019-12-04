import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import { NavController } from '@ionic/angular';
import {LoadingController} from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string
  password:string
  token:string
  constructor(private loginService:LoginService,public navCtrl:NavController,public loadingController:LoadingController) { }

  ngOnInit() {
  }

  login(){
    const loading=await this.loadingController.create({message:"Por favor espere verificando credenciales"})
    await loading.present();
    let request=this.loginService.loginToApp(this.username,this.password).subscribe(data=>{
      if ('token' in data){
        this.token=data['token']
        this.navCtrl.navigateForward('/home')

      }
      else{
        console.log("error en la peticion intente de nuevo")
      }

    })

  async presentLoading(){
    const loading=await this.loadingController.create({message:"Por favor espere verificando credenciales"})

    }
  }

}
