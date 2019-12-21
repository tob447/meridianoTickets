import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {HTTP} from '@ionic-native/http/ngx'


const firebaseConfig = {
  apiKey: "AIzaSyB_VRwXtsw4NNLPg1cBFs9Q0aOyusQmRhc",
  authDomain: "meridiano-tickets.firebaseapp.com",
  databaseURL: "https://meridiano-tickets.firebaseio.com",
  projectId: "meridiano-tickets",
  storageBucket: "meridiano-tickets.appspot.com",
  messagingSenderId: "756872120435",
  appId: "1:756872120435:web:8902f01dfae107d3034206",
  measurementId: "G-QYV0WC44Z5"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
