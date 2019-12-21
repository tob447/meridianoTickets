import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import { NavController } from '@ionic/angular';
import {LoadingController} from '@ionic/angular'
import {Platform} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string
  password:string
  token:string
  loginError:any
  constructor(private loginService:LoginService,public navCtrl:NavController,
    public loadingController:LoadingController,
    public platform:Platform) { }

  ngOnInit() {
  }

  async login(){
    const loading= await this.loadingController.create({
      message:"Haciendo el login espere un momento"
    })
    await loading.present()

    let platform= this.platform.platforms()

    if (platform[1]=="android"){
      let request=this.loginService.loginToApp(this.username,this.password).then(data=>{
        console.log(data)
        if ('token' in data){
          console.log(data)
          loading.message="Success"
          this.token=data['token']
          this.navCtrl.navigateForward('/home')
          loading.dismiss()
          console.log("hola")
          this.loginService.token=data['token']
  
        }
  
      },
      error=>{
        this.loginError=error['message']
        console.log(this.loginError)
          loading.dismiss()
      })
    }


  else{
    let request=this.loginService.loginToAppWeb(this.username,this.password).subscribe(data=>{
      if ('token' in data){
        loading.message="Success"
        this.token=data['token']
        this.navCtrl.navigateForward('/home')
        loading.dismiss()
        console.log("hola")
        this.loginService.token=data['token']

      }

    },
    error=>{
      this.loginError=error['message']
        loading.dismiss()
    })

  }
      
  }

    

}
