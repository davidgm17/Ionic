import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
   let numero = 10;
   numero += 10;
   debugger;
   numero *= 2;
   console.log({numero});

  }

}
